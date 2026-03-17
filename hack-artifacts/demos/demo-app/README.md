# ⚔️ Emoji Battle Arena

A fun TypeScript/Express game API where emoji fighters battle each other!

## Quick Start
```bash
npm install
npm run dev
```

Open http://localhost:3000 to see the battle arena UI.

## API Endpoints

### Fighters
- `GET /api/fighters` - List all fighters
- `GET /api/fighters/:id` - Get a fighter
- `POST /api/fighters` - Create a fighter
- `PUT /api/fighters/:id` - Update a fighter
- `DELETE /api/fighters/:id` - Delete a fighter
- `POST /api/fighters/reset` - Reset to defaults

### Battles
- `POST /api/battles` - Start a battle `{ fighter1Id, fighter2Id }`
- `GET /api/battles/history` - Battle history
- `GET /api/battles/:id` - Get battle result

### Leaderboard
- `GET /api/leaderboard` - Full leaderboard
- `GET /api/leaderboard/top/:count` - Top N fighters

## Tech Stack
- TypeScript + Express
- Vitest for testing
- In-memory data store (resets on restart)

## Development
```bash
npm run dev    # Start dev server with hot reload
npm run build  # Compile TypeScript
npm test       # Run tests
```
