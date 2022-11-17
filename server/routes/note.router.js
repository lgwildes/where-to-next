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
    
    const sqlParams = [req.query.note, req.query.id]
    console.log('😢req.query is', req.query)
    // console.log('🤺sqlParams are', sqlParams)
});

module.exports = router;