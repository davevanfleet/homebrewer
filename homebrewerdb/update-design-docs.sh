#! /bin/bash

GRAINS_REV=$(curl "http://admin:password@127.0.0.1:5984/grains/_design/grains" | python -c 'import sys, json; print(json.load(sys.stdin)["_rev"])')
python3 ./update_design_doc_rev.py -i ./designs/grains.json -r $GRAINS_REV
curl -X PUT http://admin:password@127.0.0.1:5984/grains/_design/grains --data-binary @designs/grains.json

HOPS_REV=$(curl "http://admin:password@127.0.0.1:5984/hops/_design/hops" | python -c 'import sys, json; print(json.load(sys.stdin)["_rev"])')
python3 ./update_design_doc_rev.py -i ./designs/hops.json -r $HOPS_REV
curl -X PUT http://admin:password@127.0.0.1:5984/hops/_design/hops --data-binary @designs/hops.json

MALTS_REV=$(curl "http://admin:password@127.0.0.1:5984/malts/_design/malts" | python -c 'import sys, json; print(json.load(sys.stdin)["_rev"])')
python3 ./update_design_doc_rev.py -i ./designs/malts.json -r $MALTS_REV
curl -X PUT http://admin:password@127.0.0.1:5984/malts/_design/malts --data-binary @designs/malts.json

YEASTS_REV=$(curl "http://admin:password@127.0.0.1:5984/yeasts/_design/yeasts" | python -c 'import sys, json; print(json.load(sys.stdin)["_rev"])')
python3 ./update_design_doc_rev.py -i ./designs/yeasts.json -r $YEASTS_REV
curl -X PUT http://admin:password@127.0.0.1:5984/yeasts/_design/yeasts --data-binary @designs/yeasts.json

RECIPES_REV=$(curl "http://admin:password@127.0.0.1:5984/recipes/_design/recipes" | python -c 'import sys, json; print(json.load(sys.stdin)["_rev"])')
python3 ./update_design_doc_rev.py -i ./designs/recipes.json -r $RECIPES_REV
curl -X PUT http://admin:password@127.0.0.1:5984/recipes/_design/recipes --data-binary @designs/recipes.json