var express = require('express');
var router = express.Router();
const db = require('nano')('http://admin:password@couch:5984');
const malts  = db.use("malts");

/*--------------*/
/* CRUD ACTIONS */
/*--------------*/

/*--------*/
/* CREATE */
/*--------*/

router.post('/', function(req, res, next) {
    const body = req.body
    const malt = {
        name: body.name
    }
    malts.insert(malt)
        .then(body => {
            res.json({malt: body, message: "success"})
        })
        .catch(error => {
            console.log(error)
            res.statusCode(500).json({message: error})
        })
});

/*------*/
/* READ */
/*------*/

router.get('/', function(req, res, next) {
    malts.list({include_docs: true})
        .then(body => {
            res.json({malts: body})
        })
        .catch(error => {
            res.status(500).json({message: error});
        });
});

router.get('/:maltId', function(req, res, next) {
    const { maltId } = req.params;
    malts.get(maltId)
        .then(body => {
            res.json({malt: body});
        });
});


/*--------*/
/* UPDATE */
/*--------*/

router.put('/:maltId', function(req, res, next) {
    const { maltId } = req.params;
    let rev;
    malts.get(maltId)
        .then(body => {
            rev = body._rev;
            updatemalt()
        });
    
    function updatemalt(){
        const malt = {
            _id: maltId,
            name: req.body.name,
            _rev: rev
        };
        malts.insert(malt)
            .then(body => {
                res.json({malt: body, message: "success"})
            })
            .catch(error => {
                console.log(error)
                res.statusCode(500).json({message: error})
            })
    }
});


/*---------*/
/* DESTROY */
/*---------*/

router.delete('/:maltId', function(req, res, next) {
    let rev;
    malts.get(req.params.maltId)
        .then(body => {
            rev = body._rev;
            destroymalt()
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        });
    function destroymalt(){
        malts.destroy(req.params.maltId, rev)
            .then(body => {
                res.json(body);
            })
            .catch(error => {
                console.log(error)
                res.json(error)
            });
    }
});


module.exports = router;