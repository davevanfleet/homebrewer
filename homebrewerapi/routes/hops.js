var express = require('express');
var router = express.Router();
const db = require('nano')('http://admin:password@couch:5984');
const hops  = db.use("hops");


/*--------------*/
/* CRUD ACTIONS */
/*--------------*/

/*--------*/
/* CREATE */
/*--------*/

router.post('/', function(req, res, next) {
    const body = req.body
    const hop = {
        name: body.name
    }
    hops.insert(hop)
        .then(body => {
            res.json({hop: body, message: "success"})
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
    hops.list({include_docs: true})
        .then(body => {
            res.json({hops: body});
        })
        .catch(error => {
            res.status(500).json({message: error});
        });
});

router.get('/:hopId', function(req, res, next) {
    const { hopId } = req.params;
    hops.get(hopId)
        .then(body => {
            res.json({hop: body});
        });
});


/*--------*/
/* UPDATE */
/*--------*/

router.put('/:hopId', function(req, res, next) {
    const { hopId } = req.params;
    let rev;
    hops.get(hopId)
        .then(body => {
            rev = body._rev;
            updatehop()
        });
    
    function updatehop(){
        const hop = {
            _id: hopId,
            name: req.body.name,
            _rev: rev
        };
        hops.insert(hop)
            .then(body => {
                res.json({hop: body, message: "success"})
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

router.delete('/:hopId', function(req, res, next) {
    let rev;
    hops.get(req.params.hopId)
        .then(body => {
            rev = body._rev;
            destroyhop()
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        });
    function destroyhop(){
        hops.destroy(req.params.hopId, rev)
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

module.exports = router;