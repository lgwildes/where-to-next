const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated,(req, res) => {
  console.log('GET favorites for user', req.query) //req.query = {id: , username: }

  sqlText = `SELECT "favorite".id AS favorite_id, destination.id as destination_id, "name", "description", "notes","url", "alt_text"  FROM "favorite"
              JOIN "destination" ON "destination".id = "favorite".destination_id
            WHERE "user_id" = $1
            ORDER BY "name" ASC;
  `
    
  sqlParams = [req.query.id]

  pool.query(sqlText, sqlParams)
    .then((dbResult) => {
      res.send(dbResult.rows)
    })
    .catch((error) => {
      console.log('❌Error getting favorites', error)
    })

});



// Add destination to favorite table 
router.post('/',rejectUnauthenticated, (req, res) => {
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

router.delete('/:id', rejectUnauthenticated, (req,res) => {
  const id = req.params.id
  console.log('DELETE id is', id)

  sqlText = `
    DELETE FROM "favorite"
    WHERE "id" = $1;`

  sqlParams = [id]

  pool.query(sqlText, sqlParams)
    .then(() => res.sendStatus(200))
    .catch((error) => {
      console.log('Error in favorites.router deleting favorite', error)
      res.sendStatus(500);
    })
})

module.exports = router;