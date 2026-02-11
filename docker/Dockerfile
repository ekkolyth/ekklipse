ARG TARGETPLATFORM=linux/amd64
ARG BUILDPLATFORM

FROM --platform=$BUILDPLATFORM oven/bun:1-alpine AS build
WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile || bun install

COPY . .
ARG APP_URL=http://localhost
ARG API_PORT=3210
ENV VITE_CONVEX_URL=${APP_URL}:${API_PORT}
RUN rm -f .env.local .env .env.production .env.development 2>/dev/null || true
RUN bun run build

FROM ghcr.io/get-convex/convex-backend:latest
WORKDIR /app

ARG VERSION
LABEL org.opencontainers.image.version="${VERSION}"

# Install unzip (required by Bun install script) then Bun
RUN apt-get update && apt-get install -y --no-install-recommends unzip ca-certificates curl && \
    rm -rf /var/lib/apt/lists/* && \
    curl -fsSL https://bun.sh/install | bash - && \
    ln -s /root/.bun/bin/bun /usr/local/bin/bun && \
    ln -s /root/.bun/bin/bunx /usr/local/bin/bunx

# Ensure Bun's bin dir and global install bin are in PATH for bunx/serve
ENV PATH="/root/.bun/bin:${PATH}"

# Install Convex CLI and serve globally
RUN bun install -g convex serve

# Copy built frontend
COPY --from=build /app/dist ./dist

# Copy convex functions and dependencies
COPY convex ./convex
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile --production || bun install --production

# Copy startup script
COPY docker/init.sh ./init.sh
RUN chmod +x ./init.sh

# Override backend image entrypoint
EXPOSE 3000 3210
ENTRYPOINT []
CMD ["./init.sh"]
