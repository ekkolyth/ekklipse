ARG TARGETPLATFORM=linux/amd64
ARG BUILDPLATFORM

FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile || pnpm install

COPY . .
ARG APP_URL=http://localhost
ARG API_PORT=3210
ENV VITE_CONVEX_URL=${APP_URL}:${API_PORT}
RUN rm -f .env.local .env .env.production .env.development 2>/dev/null || true
RUN pnpm build

FROM ghcr.io/get-convex/convex-backend:latest
WORKDIR /app

# Install Node.js 22 (Convex backend image doesn't include Node.js)
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Enable pnpm/corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install Convex CLI and serve
RUN npm install -g convex serve

# Copy built frontend
COPY --from=build /app/dist ./dist

# Copy convex functions and dependencies
COPY convex ./convex
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile || pnpm install --prod

# Copy startup script
COPY docker/init.sh ./init.sh
RUN chmod +x ./init.sh

# Override backend image entrypoint
EXPOSE 3000 3210
ENTRYPOINT []
CMD ["./init.sh"]
