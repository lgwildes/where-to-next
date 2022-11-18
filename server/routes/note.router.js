const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


router.get('/', (req, res) => {
 
});


router.post('/', (req, res) => {
  
});

router.put('/',rejectUnauthenticated, (req, res) => {
    const sqlText = `UPDATE "favorite"
                    SET "notes" = $1
                    WHERE id = $2;`
    
    const sqlParams = [req.body.note, req.body.favoriteId]

    pool.query(sqlText, sqlParams)
        .then(()=> {
            res.sendStatus(200)
        })
        .catch( error => {
            console.log('error in note.router PUT', error)
            res.sendStatus(500);
        } )
    
    console.log('🤺sqlParams are', sqlParams)
});

module.exports = router;