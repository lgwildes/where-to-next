const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');
/**
 * GET route template
 */
router.get('/', (req, res) => {
  console.log('GET favorites')
  
    
  

});



// Add destinationt to favorite table 
router.post('/', (req, res) => {
  console.log('req.body is',req.body)

  sqlText = `INSERT INTO "public"."favorite"("user_id", "destination_id") 
            VALUES($1, $2);`
  sqlParams = [req.user.id, req.body.id]

  pool.query(sqlText, sqlParams)
    .then(() => res.sendStatus(201))
    .catch((error ) => {
      console.log('Error in favorites.router adding to favorites', error)
      res.sendStatus(500);
    })

  
});

module.exports = router;