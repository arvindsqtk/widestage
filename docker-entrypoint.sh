#!/bin/bash
echo "Starting docker entry point script mounted..."
exec `node --inspect=0.0.0.0:9229 server.js`