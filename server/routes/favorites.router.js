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
  // GET route code here
    
  //TODO multiple queries? GET photo by destination id, 
  //GET destination_features by id

});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;