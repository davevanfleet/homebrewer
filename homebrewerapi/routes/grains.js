var express = require('express');
var router = express.Router();
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
    const grain = {
        name: body.name
    }
    grains.insert({...grain})
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
    const allGrains = [];
    grains.list({include_docs: true})
        .then(body => {
            body.rows.forEach(grain => {
                allGrains.push(grain)
            })
            res.json({grains: allGrains});
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: error})
        })
});

router.get('/:grainId', function(req, res, next) {
    const { grainId } = req.params;
    grains.get(grainId)
        .then(body => {
            res.json({grain: body})
        })
})


/*--------*/
/* UPDATE */
/*--------*/


/*---------*/
/* DESTROY */
/*---------*/




module.exports = router;