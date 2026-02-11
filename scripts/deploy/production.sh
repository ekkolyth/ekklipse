#!/bin/bash

# Deploy to Convex production environment

CONVEX_DEPLOY_KEY="prod:clean-iguana-842|eyJ2MiI6IjY4MWNjYjg2ZDg0ODRhZmFhMWRiMmNlZWIxMWUyNDg1In0="

CONVEX_DEPLOY_KEY="$CONVEX_DEPLOY_KEY" bunx convex deploy
