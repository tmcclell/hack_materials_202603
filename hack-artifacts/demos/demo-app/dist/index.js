"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const fighters_1 = __importDefault(require("./routes/fighters"));
const battles_1 = __importDefault(require("./routes/battles"));
const leaderboard_1 = __importDefault(require("./routes/leaderboard"));
const rateLimit_1 = require("./middleware/rateLimit");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(rateLimit_1.rateLimit);
// Serve static files from public/
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
// API routes
app.use('/api/fighters', fighters_1.default);
app.use('/api/battles', battles_1.default);
app.use('/api/leaderboard', leaderboard_1.default);
// Serve the browser UI
app.get('/', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'index.html'));
});
// Start server
app.listen(PORT, () => {
    console.log(`⚔️  Emoji Battle Arena is live at http://localhost:${PORT}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map