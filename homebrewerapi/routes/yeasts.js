var express = require('express');
var router = express.Router();
const db = require('nano')('http://admin:password@couch:5984');
const yeasts  = db.use("yeasts");

/*--------------*/
/* CRUD ACTIONS */
/*--------------*/

/*--------*/
/* CREATE */
/*--------*/

router.post('/', function(req, res, next) {
    const body = req.body
    const yeast = {
        name: body.name
    }
    yeasts.insert(yeast)
        .then(body => {
            res.json({yeast: body, message: "success"})
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
    yeasts.list({include_docs: true})
        .then(body => {
            res.json({yeasts: body})
        })
        .catch(error => {
            res.status(500).json({message: error});
        });
});

router.get('/:yeastId', function(req, res, next) {
    const { yeastId } = req.params;
    yeasts.get(yeastId)
        .then(body => {
            res.json({yeast: body});
        });
});


/*--------*/
/* UPDATE */
/*--------*/

router.put('/:yeastId', function(req, res, next) {
    const { yeastId } = req.params;
    let rev;
    yeasts.get(yeastId)
        .then(body => {
            rev = body._rev;
            updateyeast()
        });
    
    function updateyeast(){
        const yeast = {
            _id: yeastId,
            name: req.body.name,
            _rev: rev
        };
        yeasts.insert(yeast)
            .then(body => {
                res.json({yeast: body, message: "success"})
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

router.delete('/:yeastId', function(req, res, next) {
    let rev;
    yeasts.get(req.params.yeastId)
        .then(body => {
            rev = body._rev;
            destroyyeast()
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        });
    function destroyyeast(){
        yeasts.destroy(req.params.yeastId, rev)
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