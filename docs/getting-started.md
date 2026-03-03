# Getting Started

Set up buidl.lol for local development or production deployment.

## Prerequisites

- **Node.js 22+** (`node --version`)
- **pnpm 9+** (`pnpm --version`)
- **PostgreSQL** database (Neon recommended for production)
- **Discord bot** (from [Discord Developer Portal](https://discord.com/developers/applications))

## Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/evm-systems/buidl-lol.git
cd buidl-lol
pnpm install
```

### 2. Configure Environment

```bash
cp .env.example .env
```

Edit `.env` with your values:

```env
# Database - Get from Neon (https://neon.tech)
DATABASE_URL="postgresql://user:pass@ep-xxx.neon.tech/buidl_lol?sslmode=require"

# Discord - Get from Developer Portal
DISCORD_TOKEN="your_bot_token"
DISCORD_CLIENT_ID="your_client_id"
DISCORD_GUILD_ID="your_server_id"

# Auth
NEXTAUTH_SECRET="openssl rand -base64 32"
NEXTAUTH_URL="http://localhost:3000"
```

### 3. Initialize Database

```bash
# Generate Prisma client
pnpm db:generate

# Push schema to database
pnpm db:push

# (Optional) Seed with sample data
pnpm db:seed
```

### 4. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Database Setup (Neon)

1. Create account at [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string (with `?sslmode=require`)
4. Paste into `.env` as `DATABASE_URL`

## Discord Bot Setup

### Create the Bot

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" → name it
3. Go to "Bot" tab → "Add Bot"
4. Copy the token → paste into `.env` as `DISCORD_TOKEN`
5. Enable these Intents:
   - Presence Intent
   - Server Members Intent
   - Message Content Intent

### Invite to Server

1. Go to "OAuth2" → "URL Generator"
2. Select scopes: `bot`, `applications.commands`
3. Select permissions:
   - Send Messages
   - Embed Links
   - Manage Roles (for assigning participant roles)
   - Read Message History
4. Copy the URL and open it to invite the bot

### Get Server ID

1. Enable Developer Mode in Discord settings
2. Right-click your server → "Copy Server ID"
3. Paste into `.env` as `DISCORD_GUILD_ID`

## Deploy Organizer Agent

Once the platform is running, deploy the Organizer Agent:

```bash
# Copy recipe config
cp recipes/organizer/config/hackathon.example.yaml recipes/organizer/config/hackathon.yaml

# Edit with your hackathon details
nano recipes/organizer/config/hackathon.yaml

# If using OpenClaw:
openclaw skill install ./recipes/organizer
openclaw agent start organizer
```

## Project Structure

```
buidl-lol/
├── apps/
│   └── web/              # Next.js web app
├── packages/
│   ├── core/            # Shared types
│   ├── database/        # Prisma schema & client
│   └── config/          # Shared configuration
├── recipes/
│   └── organizer/       # OpenClaw agent recipe
├── agents/              # Agent specifications
└── docs/                # Documentation
```

## Troubleshooting

### Database connection fails

- Check `DATABASE_URL` format
- For Neon, ensure `?sslmode=require` is appended
- Run `pnpm db:push` to sync schema

### Discord bot doesn't respond

- Check bot token is correct
- Ensure bot is invited to server
- Verify Message Content Intent is enabled
- Check bot has permissions in the channel

### Prisma generate fails

```bash
# Clear and regenerate
rm -rf node_modules/.prisma
pnpm install
pnpm db:generate
```

## Next Steps

- [Agent Architecture](../AGENT-ARCHITECTURE.md) - How the agent fleet works
- [Contributing](../CONTRIBUTING.md) - How to contribute
- [API Reference](./api-reference.md) - REST API documentation
