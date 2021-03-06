var express = require('express');
var router = express.Router();
var Grain = require('../models/grain.js');
const db = require('nano')('http://admin:password@couch:5984');
const grains  = db.use("grains");

/*--------------*/
/* CRUD ACTIONS */
/*--------------*/

/*--------*/
/* CREATE */
/*--------*/

router.post('/', function(req, res, next) {
    const body = req.body
    const grain = new Grain({
        name: body.name
    })
    grains.insert(grain)
        .then(body => {
            res.json({grain: body, message: "success"})
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
    grains.list({include_docs: true})
        .then(body => {
            res.json({grains: body})
        })
        .catch(error => {
            res.status(500).json({message: error});
        });
});

router.get('/:grainId', function(req, res, next) {
    const { grainId } = req.params;
    grains.get(grainId)
        .then(body => {
            res.json({grain: body});
        });
});


/*--------*/
/* UPDATE */
/*--------*/

router.put('/:grainId', function(req, res, next) {
    const { grainId } = req.params;
    let rev;
    grains.get(grainId)
        .then(body => {
            rev = body._rev;
            updateGrain()
        });
    
    function updateGrain(){
        const grain = new Grain({
            _id: grainId,
            name: req.body.name,
            _rev: rev
        });
        grains.insert(grain)
            .then(body => {
                res.json({grain: body, message: "success"})
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

router.delete('/:grainId', function(req, res, next) {
    let rev;
    grains.get(req.params.grainId)
        .then(body => {
            rev = body._rev;
            destroyGrain()
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        });
    function destroyGrain(){
        grains.destroy(req.params.grainId, rev)
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