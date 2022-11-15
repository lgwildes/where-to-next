const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const sqlText = `SELECT * FROM "feature";`;
  pool.query(sqlText)
    .then( dbResult => {
        res.send(dbResult.rows);
    })
    .catch( error => {
        console.log('error in feature.router GET', error)
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;