# Docker Setup for ekklipse

ONE image with everything - frontend + Convex backend. Just works out of the box!

## Quick Start

```bash
make docker/build
make docker/up
```

Then access your app at http://localhost:3000

## How It Works

A single Docker image contains:

1. **Convex backend** - Official self-hosted backend, auto-starts with credentials
2. **Convex functions** - Auto-deployed on container startup
3. **Frontend** - Web UI that connects to the backend automatically

## Files

- `Dockerfile` - Builds the single image (frontend + Convex backend)
- `init.sh` - Startup script (starts backend, deploys functions, serves frontend)
- `docker-compose.yml` - Runs the single app service
- `docker-compose.example.yml` - Example with documentation

## Makefile Commands

- `make docker/build` - Build the frontend Docker image
- `make docker/push` - Push the Docker image to registry
- `make docker/tag NEW_TAG=v0.1.0` - Tag the image with a new version
- `make docker/up` - Start all services with docker-compose

## Environment Variables

Set these in your `.env` or shell when running compose. All have defaults; you only need to override when not using defaults.

| Variable      | Default            | Description |
|---------------|--------------------|-------------|
| **`APP_URL`** | `http://localhost` | Base URL where the app is reachable (e.g. your server hostname or `https://app.example.com`). |
| **`WEBUI_PORT`** | `3000`          | Port for the web UI. |
| **`API_PORT`**   | `3210`          | Port for the API. Only change if you have a port conflict. |

Example for a server or custom ports:

```bash
export APP_URL=http://YOUR_SERVER_IP_OR_DOMAIN
# Optional: export WEBUI_PORT=3000
# Optional: export API_PORT=3210
docker compose -f docker/docker-compose.example.yml up -d
```

With a reverse proxy (e.g. HTTPS at a domain), set `APP_URL` to that domain. Set `API_PORT` only if the API is on a non-default port (e.g. `443` for HTTPS).

## Convex Functions Deployment (advanced)

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
2. Build with your Convex URL:
   ```bash
   APP_URL=https://your-project.convex.cloud API_PORT=443 make docker/build
   ```
3. Update `docker-compose.yml` to use the pre-built image
