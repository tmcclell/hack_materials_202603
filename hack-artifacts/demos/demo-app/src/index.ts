import express from 'express';
import cors from 'cors';
import path from 'path';
import fighterRoutes from './routes/fighters';
import battleRoutes from './routes/battles';
import leaderboardRoutes from './routes/leaderboard';
import { rateLimit } from './middleware/rateLimit';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(rateLimit);

// Serve static files from public/
app.use(express.static(path.join(__dirname, '..', 'public')));

// API routes
app.use('/api/fighters', fighterRoutes);
app.use('/api/battles', battleRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

// Serve the browser UI
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`⚔️  Emoji Battle Arena is live at http://localhost:${PORT}`);
});

export default app;
