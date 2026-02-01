# --- Build ---
FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml* ./
# Try frozen lockfile first, fall back to regular install if lockfile is outdated
RUN pnpm install --frozen-lockfile || pnpm install

COPY . .
# Default to localhost - accessible from browser when backend port is exposed
ARG VITE_CONVEX_URL=http://localhost:3210
ENV VITE_CONVEX_URL=${VITE_CONVEX_URL}

RUN pnpm build  # outputs dist/

# --- Serve static ---
FROM node:22-alpine AS serve
WORKDIR /app
RUN npm i -g serve
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
