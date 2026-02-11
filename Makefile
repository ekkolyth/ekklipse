# Docker
DOCKER_IMAGE ?= ekkolyth/ekklipse
DOCKER_TAG ?= dev

-include .env.local
export

all: build

build: build-web build-db

build-web:
	@echo "Building web UI..."

build-db:
	@echo "Building Convex backend..."

# ==========================================================
# Docker
# ==========================================================

docker/build:
	@if [ ! -f "docker/Dockerfile" ]; then \
		echo "Error: Must run from project root directory"; \
		exit 1; \
	fi
	@echo "Building single image (frontend + Convex backend)..."
	docker build --platform linux/amd64 \
		--build-arg APP_URL=$${APP_URL:-http://localhost} \
		--build-arg API_PORT=$${API_PORT:-3210} \
		-f docker/Dockerfile \
		-t $(DOCKER_IMAGE):$(DOCKER_TAG) .

docker/up:
	cd docker && docker-compose up

docker/setup:
	@echo "Setting up Convex backend..."
	@cd docker && docker-compose up -d backend dashboard
	@echo "Waiting for backend to be ready..."
	@sleep 5
	@echo "Generating admin key..."
	@cd docker && docker-compose exec -T backend ./generate_admin_key.sh > /tmp/convex_admin_key.txt 2>&1 || true
	@echo "Admin key generated. Check /tmp/convex_admin_key.txt"
	@echo "Add it to .env.local as CONVEX_SELF_HOSTED_ADMIN_KEY"
	@echo ""
	@echo "Then deploy functions with:"
	@echo "  CONVEX_SELF_HOSTED_URL=http://localhost:3210 CONVEX_SELF_HOSTED_ADMIN_KEY=<key> npx convex deploy --prod"

docker/deploy:
	@if [ -z "$(CONVEX_SELF_HOSTED_ADMIN_KEY)" ]; then \
		echo "Error: CONVEX_SELF_HOSTED_ADMIN_KEY not set. Generate one with: make docker/setup"; \
		exit 1; \
	fi
	@echo "Deploying Convex functions to Docker backend..."
	CONVEX_SELF_HOSTED_URL=http://localhost:3210 CONVEX_SELF_HOSTED_ADMIN_KEY=$(CONVEX_SELF_HOSTED_ADMIN_KEY) npx convex deploy --prod

.PHONY: \
	all build build-web build-db \
	docker/build docker/up docker/setup docker/deploy
