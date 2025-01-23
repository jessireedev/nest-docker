#!/bin/sh

echo "Running migrations..."
npm run migration:run
exec "$@"
