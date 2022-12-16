#!/bin/bash

# Start the first process
cd proxy
npm run start &

cd ..
  
# # Start the second process
cd ui
npm run start &

# Wait for any process to exit
wait -n
  
# Exit with status of process that exited first
exit $?