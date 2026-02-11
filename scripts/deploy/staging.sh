#!/bin/bash

# Deploy to Convex staging environment

CONVEX_DEPLOY_KEY="dev:valiant-alpaca-954|eyJ2MiI6IjEwMTA2NjMwODg3OTQ5N2Y5NTIwN2VmMmYzMGZhOGE3In0="

CONVEX_DEPLOY_KEY="$CONVEX_DEPLOY_KEY" bunx convex deploy
