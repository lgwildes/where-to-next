const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');



router.get('/', rejectUnauthenticated, (req, res) => {
  let preferences = req.query
  console.log('submit.router GET preferences', preferences)

  
    // loop through preferences.features to find number of parameters.
    // set variable placeholders $1, $2, etc. to the number of features
   function countPlaceholders() {
        
        let placeholders = ``
        for (let i = 0; i < preferences.features.length; i++) {
           
            // for each id EXCEPT the last, add a comma after 
            if(i < preferences.features.length-1){
                placeholders += ` $${i+1},`
            }
            else {
                placeholders += ` $${i+1}`
            }
        }
        return placeholders
    }

    let variablePlaceholders = countPlaceholders();
    // console.log('🥳variablePlaceholders to insert into query', variablePlaceholders)


    // sqlText to insert into query with variable placeholders for feature ids
    let sqlText = 'hello';
    
   console.log('my preferences req.query is ', preferences)
   console.log('preferences. features is', preferences.features)
        // search for INTERNATIONAL and DOMESTIC
        if (preferences.domestic == 'true' && preferences.international == 'true') {
            sqlText =  `SELECT "destination"."id", destination."name", "international", 
            json_agg(feature_id) AS features, json_agg(feature.name) AS feature_names,
            COUNT (feature_id) as "counted_features", "description", "url", "alt_text"  
            FROM "destination" 
            JOIN destination_feature ON destination_id = destination.id
            JOIN feature ON destination_feature.feature_id = feature.id
            WHERE feature_id IN(${variablePlaceholders})
            GROUP BY "destination"."id"
            ORDER BY "counted_features" DESC
            LIMIT 5  
            ;`
            // console.log('Whole world 🌐')
        } 
            // search for ONLY INTERNATIONAL
            if (preferences.domestic == 'false'){
                sqlText = `SELECT "destination"."id", destination."name", "international", 
                json_agg(feature_id) AS features, json_agg(feature.name) AS feature_names,
                COUNT (feature_id) as "counted_features", "description", "url", "alt_text"  
                FROM "destination" 
                JOIN destination_feature ON destination_id = destination.id
                JOIN feature ON destination_feature.feature_id = feature.id
                WHERE feature_id IN(${variablePlaceholders}) AND "international" = TRUE
                GROUP BY "destination"."id"
                ORDER BY "counted_features" DESC
                LIMIT 5        
                ;`
                // console.log('only international 🏴󠁧󠁢󠁥󠁮󠁧󠁿')
            }   
                // search for ONLY DOMESTIX
                else if (preferences.international == 'false') {
                    sqlText = `SELECT "destination"."id", destination."name", "international", 
                    json_agg(feature_id) AS features, json_agg(feature.name) AS feature_names,
                    COUNT (feature_id) as "counted_features", "description", "url", "alt_text"  
                    FROM "destination" 
                    JOIN destination_feature ON destination_id = destination.id
                    JOIN feature ON destination_feature.feature_id = feature.id
                    WHERE feature_id IN(${variablePlaceholders}) AND "international" = FALSE
                    GROUP BY "destination"."id"
                    ORDER BY "counted_features" DESC
                    LIMIT 5
                    ;`
                    // console.log('AMERICA 🗽')
                }
    
    console.log('My sqlText is...', sqlText);
    
    let sqlParams = preferences.features

    console.log('SQL PARAMS ARE', sqlParams)

    pool.query(sqlText, sqlParams)
        .then( dbResult => {
            res.send(dbResult.rows);
            // console.log('😱response from database is', dbResult.rows)
        })
        .catch( error => {
            console.log('error in submit.router GET', error)
            res.sendStatus(500);
        })

     
});


module.exports = router;