# Docker Setup for ekklipse

This directory contains Docker configuration files for running ekklipse with Convex backend automatically included!

## Quick Start

**First time setup (one-time admin key generation):**

```bash
# 1. Start the backend
docker compose -f docker/docker-compose.yml up backend dashboard -d

# 2. Generate admin key (one-time)
docker compose -f docker/docker-compose.yml exec backend ./generate_admin_key.sh

# 3. Copy the admin key and add it to .env.local:
# CONVEX_SELF_HOSTED_URL=http://localhost:3210
# CONVEX_SELF_HOSTED_ADMIN_KEY=<paste the admin key here>

# 4. Deploy Convex functions
CONVEX_SELF_HOSTED_URL=http://localhost:3210 CONVEX_SELF_HOSTED_ADMIN_KEY=<your-key> npx convex deploy --prod

# 5. Build and start everything
make docker/build
docker compose -f docker/docker-compose.yml up
```

**After initial setup:**

```bash
docker compose -f docker/docker-compose.yml up
```

Then access your app at http://localhost:3000

## How It Works

The docker-compose setup includes:

1. **Backend** - Official Convex self-hosted backend (`ghcr.io/get-convex/convex-backend`)
   - Runs on port 3210 (API) and 3211 (HTTP Actions)
   - Data persists in Docker volume

2. **Dashboard** - Convex dashboard for monitoring
   - Access at http://localhost:6791

3. **Frontend** - Web UI that connects to backend automatically
   - Built with Convex URL pointing to localhost:3210
   - Runs on port 3000

## Files

- `Dockerfile` - Builds the frontend web UI
- `Dockerfile.convex` - (Not used - functions deployed via CLI)
- `docker-compose.yml` - Main docker-compose file with backend, dashboard, and frontend
- `docker-compose.example.yml` - Example with documentation
- `init-convex.sh` - Helper script (for future automation)

## Makefile Commands

- `make docker/build` - Build the frontend Docker image
- `make docker/push` - Push the Docker image to registry
- `make docker/tag NEW_TAG=v0.1.0` - Tag the image with a new version
- `make docker/up` - Start all services with docker-compose

## Environment Variables

- `PORT` - Port for the web UI (default: 3000)
- `DOCKER_IMAGE` - Docker image name (default: ekkolyth/ekklipse)
- `DOCKER_TAG` - Docker image tag (default: dev)

## Convex Functions Deployment

Convex functions need to be deployed to the backend. After generating the admin key:

```bash
export CONVEX_SELF_HOSTED_URL=http://localhost:3210
export CONVEX_SELF_HOSTED_ADMIN_KEY=<your-admin-key>
npx convex deploy --prod
```

Or add these to your `.env.local` file and run `npx convex deploy --prod` from the project root.

## Data Persistence

Convex data is stored in a Docker volume (`convex-data`). To reset:
```bash
docker compose -f docker/docker-compose.yml down -v
```

## Advanced: Using Your Own Convex Instance

If you want to use Convex Cloud or your own self-hosted instance instead:

1. Remove the `backend` and `dashboard` services from `docker-compose.yml`
2. Build frontend with your Convex URL:
   ```bash
   VITE_CONVEX_URL=https://your-project.convex.cloud make docker/build
   ```
3. Update `docker-compose.yml` to use the pre-built image and your Convex URL
