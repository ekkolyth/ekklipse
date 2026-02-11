### Reverse proxy

**Routing rules:**

- Route **/** and all paths **except** `/api` and `/api/*` to the **frontend** (container port 3000).

- Route **/api** and **/api/** and **/api/\*** to the **backend** (container port 3210). **Strip the `/api` prefix** so the backend receives paths at `/` (e.g. `/api/version` becomes `/version`).

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
