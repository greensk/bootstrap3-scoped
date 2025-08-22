#!/bin/sh
docker run -ti --rm \
  --network host \
  -v "$(pwd):/usr/src/app" \
  -w /usr/src/app \
  --user $UID:$UID \
	node:20 node index.js "$@"
