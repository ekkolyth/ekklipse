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

## Official images (CI)

Images are built by GitHub Actions:

- **Push to `dev`** → always builds and pushes `ekkolyth/ekklipse:dev` (no version tag).
- **Push to `main`** → builds only when the version in `package.json` is new; pushes `ekkolyth/ekklipse:latest` and `ekkolyth/ekklipse:<version>`. Version tags exist only for main.

## Makefile commands (local development only)

- `make docker/build` - Build the image for local testing (default tag `dev`)
- `make docker/up` - Start all services with docker-compose

## Environment Variables

Set these in your `.env` or shell when running compose. All have defaults; you only need to override when not using defaults.

| Variable      | Default            | Description |
|---------------|--------------------|-------------|
| **`APP_URL`** | `http://localhost` | Base URL where the app is reachable. When set to a custom URL (e.g. `https://app.example.com`), the API URL becomes `APP_URL` + `/api`; configure your reverse proxy to route `/api` accordingly. |
| **`WEBUI_PORT`** | `3000`          | Port for the web UI. |
| **`API_PORT`**   | `3210`          | Port for the API. Only change if you have a port conflict. |

Example for a server or custom ports:

```bash
export APP_URL=http://YOUR_SERVER_IP_OR_DOMAIN
# Optional: export WEBUI_PORT=3000
# Optional: export API_PORT=3210
docker compose -f docker/docker-compose.example.yml up -d
```

With a reverse proxy (e.g. HTTPS at a domain), set `APP_URL` to that domain. The Convex URL becomes `APP_URL` + `/api` (path-based). You must configure your reverse proxy accordingly.

### Reverse proxy (any proxy)

**Routing rules (apply to Caddy, Nginx, Traefik, etc.):**

- Route **/** and all paths **except** `/api` and `/api/*` to the **frontend** (container port 3000). Do not strip anything.
- Route **/api** and **/api/** and **/api/*** to the **backend** (container port 3210). **Strip the `/api` prefix** so the backend receives paths at `/` (e.g. `/api/version` becomes `/version`).
- If the proxy runs on the host, use `localhost:3000` and `localhost:3210`. If the proxy is in the same Docker network as the app, use `ekklipse:3000` and `ekklipse:3210`.

**Caddy:**

```caddy
your-domain.com {
    handle_path /api {
        reverse_proxy ekklipse:3210
    }
    handle_path /api/* {
        reverse_proxy ekklipse:3210
    }
    handle {
        reverse_proxy ekklipse:3000
    }
}
```

Both `handle_path /api` and `handle_path /api/*` are required so that requests to `/api` and `/api/...` go to the backend. Use `localhost:3210` and `localhost:3000` if Caddy runs on the host.

**Nginx:**

```nginx
location /api/ {
    proxy_pass http://ekklipse:3210/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}
location /api {
    proxy_pass http://ekklipse:3210/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}
location / {
    proxy_pass http://ekklipse:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}
```

Use `http://localhost:3210/` and `http://localhost:3000` if Nginx runs on the host.

**Traefik:** Route path prefix `/api` to the backend (port 3210) with the path prefix stripped; route everything else to the frontend (port 3000). Exact configuration depends on your setup (labels vs IngressRoute); use a `PathPrefix` matcher for `/api` and a middleware or rule to strip the prefix before forwarding.

### Verifying the setup

- **Container env:** `APP_URL` should be set to your public URL (e.g. `https://your-domain.com`) when using a reverse proxy.
- **Runtime config:** `GET /config.json` (or the `convex-config.js` script) should show `convexUrl` equal to `APP_URL` + `/api`.
- **Frontend:** Opening your public URL loads the app (no permanent "Loading...").
- **Backend:** Browser devtools Network tab shows successful requests to `.../api/...`, or `curl -I https://your-domain.com/api/version` returns 2xx.

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
