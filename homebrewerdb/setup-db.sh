#! /bin/bash

curl -X PUT http://admin:password@127.0.0.1:5984/_users
curl -X PUT http://admin:password@127.0.0.1:5984/_replicator

curl -X PUT http://admin:password@127.0.0.1:5984/grains
curl -X PUT http://admin:password@127.0.0.1:5984/grains/_design/grains --data-binary @designs/grains.json

curl -X PUT http://admin:password@127.0.0.1:5984/hops
curl -X PUT http://admin:password@127.0.0.1:5984/hops/_design/hops --data-binary @designs/hops.json

curl -X PUT http://admin:password@127.0.0.1:5984/malts
curl -X PUT http://admin:password@127.0.0.1:5984/malts/_design/malts --data-binary @designs/malts.json

curl -X PUT http://admin:password@127.0.0.1:5984/recipes
curl -X PUT http://admin:password@127.0.0.1:5984/recipes/_design/recipes --data-binary @designs/recipes.json

curl -X PUT http://admin:password@127.0.0.1:5984/yeasts
curl -X PUT http://admin:password@127.0.0.1:5984/yeasts/_design/yeasts --data-binary @designs/yeasts.json
