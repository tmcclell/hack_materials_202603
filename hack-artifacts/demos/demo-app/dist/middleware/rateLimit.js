"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimit = rateLimit;
const requestCounts = new Map();
const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 100;
/**
 * Simple in-memory rate limiter middleware.
 *
 * INTENTIONAL BUG #1: The cleanup interval clears the ENTIRE map instead of
 * just removing expired entries. This means rate limits reset for everyone
 * every 60 seconds — even abusive clients get a fresh start.
 *
 * INTENTIONAL BUG #2: Does not check the X-Forwarded-For header, so all
 * clients behind a reverse proxy (e.g., nginx) share the same IP limit.
 */
// Cleanup runs every 60 seconds
setInterval(() => {
    // BUG: should iterate entries and remove only expired ones
    requestCounts.clear();
}, WINDOW_MS);
function rateLimit(req, res, next) {
    // BUG: should check X-Forwarded-For for proxied clients
    const ip = req.ip || 'unknown';
    const now = Date.now();
    const record = requestCounts.get(ip);
    if (!record) {
        requestCounts.set(ip, { count: 1, firstRequest: now });
        next();
        return;
    }
    // If the window has expired, reset this IP's counter
    if (now - record.firstRequest > WINDOW_MS) {
        requestCounts.set(ip, { count: 1, firstRequest: now });
        next();
        return;
    }
    // Within the window — increment and check
    record.count++;
    if (record.count > MAX_REQUESTS) {
        res.status(429).json({
            success: false,
            error: 'Too many requests. Please slow down!',
        });
        return;
    }
    next();
}
//# sourceMappingURL=rateLimit.js.map