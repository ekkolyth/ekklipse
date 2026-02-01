# Single Dockerfile - ONE IMAGE with everything
# TARGETPLATFORM is set by Docker buildx/build, defaults to linux/amd64 for Convex backend compatibility
ARG TARGETPLATFORM=linux/amd64
ARG BUILDPLATFORM

FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile || pnpm install

COPY . .
ARG VITE_CONVEX_URL=http://localhost:3210
ENV VITE_CONVEX_URL=${VITE_CONVEX_URL}
RUN rm -f .env.local .env .env.production .env.development 2>/dev/null || true
RUN pnpm build

# --- Runtime: ONE image with frontend + Convex backend ---
# Use Convex backend image as base (Ubuntu-based with all required libraries)
# This ensures the backend binary runs correctly with all its dependencies
ARG TARGETPLATFORM=linux/amd64
FROM --platform=${TARGETPLATFORM} ghcr.io/get-convex/convex-backend:latest
WORKDIR /app

# Install Node.js 22 (Convex backend image doesn't include Node.js)
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Enable pnpm/corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install Convex CLI and serve (curl, openssl, bash already in base image)
RUN npm install -g convex serve

# Copy built frontend
COPY --from=build /app/dist ./dist

# Copy convex functions and dependencies
COPY convex ./convex
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile || pnpm install --prod

# Copy startup script
COPY docker/start.sh ./start.sh
RUN chmod +x ./start.sh

# Override backend image's ENTRYPOINT (./run_backend.sh) with our startup script
EXPOSE 3000 3210
ENTRYPOINT []
CMD ["./start.sh"]
