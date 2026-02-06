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

- **`APP_URL`** – Base URL where the app is reachable (default: `http://localhost`). Set this for local use or your server hostname/IP (e.g. `https://app.example.com`). The frontend uses it to connect to the Convex API; no rebuild needed.
- **`WEB_PORT`** – Port for the web UI (default: 3000). Set only if you want a different frontend port.
- **`API_PORT`** – Optional. Only set if you have a port conflict on **3210**. Default is 3210; the Convex URL is derived as `APP_URL` + `:` + `API_PORT` at runtime.

Internal / optional:

- `DOCKER_IMAGE` - Docker image name (default: ekkolyth/ekklipse)
- `DOCKER_TAG` - Docker image tag (default: dev)

## Deploying to a server (WebSocket / "can't save" fix)

If you run the container on a **server**, the browser must reach the Convex API at the server address. Set **APP_URL** to that address (and **WEB_PORT** if you want). No rebuild required.

```bash
export APP_URL=http://YOUR_SERVER_IP_OR_DOMAIN
# Optional: export WEB_PORT=3000
docker compose -f docker/docker-compose.example.yml up -d
```

With a **reverse proxy** (e.g. HTTPS at a domain), set `APP_URL` to that domain (e.g. `https://app.example.com`). Set `API_PORT` only if the API is on a non-default port (e.g. `443` for HTTPS).

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
2. Build with your Convex URL:
   ```bash
   APP_URL=https://your-project.convex.cloud API_PORT=443 make docker/build
   ```
3. Update `docker-compose.yml` to use the pre-built image
