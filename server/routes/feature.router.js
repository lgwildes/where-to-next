const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, async (req, res) => {
  try{
    const sqlText = `SELECT * FROM "feature";`;
    let dbResult = await pool.query(sqlText)
    res.send(dbResult.rows);
  }
  catch(err)  {
    console.error('feature.router GET error', err.message);
    res.sendStatus(500);
  }
  
});


module.exports = router;