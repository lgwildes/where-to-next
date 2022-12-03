
# Where to Next?

Where to Next is an app for users to search for travel destinations that match their vacation preferences. 

## Technologies

* Material UI
* HTML/CSS
* React/Redux
* Javascript
* Node.js
* Express
* PostgreSQL

## Screenshots

One of the challenges of creating this app was to create SQL queries with an unknown number of SQL parameters. Users may select as many or as few preferences as they like and are also able to select domestic, international, or both, so I had to account for all these possibilities in my queries. 


The function used to count number of preferences and set the number of SQL parameters:
<img
  src="/Users/lydiawildes/Documents/Prime/prime-tier3/where-to-next/countPlaceholders function.png"
  alt="a screenshot of the countPlaceholders function"
  style="display: inline-block; width: 700px">

The query when international and domestic are both true:
  <img
  src="/Users/lydiawildes/Documents/Prime/prime-tier3/where-to-next/SQL Query for international and domestic destinations.png"
  alt="a screenshot of the countPlaceholders function"
  style="display: inline-block; width: 700px">

I customized MUI elements and created a cohesive theme while styling my search page:
  <img
  src="/Users/lydiawildes/Documents/Prime/prime-tier3/where-to-next/search view.png"
  alt="a screenshot of the countPlaceholders function"
  style="display: inline-block; width: 700px">

## Acknowledgements

Thank you to Prime Digital Academy and my instructors Edan Schwartz and Kris Szfranski for their guidance. 


## Contact

Please send questions and comments to Lydia Wildes Schnurpel at lydiawildes1@gmail.com
* LinkedIn: Lydia Wildes Schnurpel
* Github: @lgwildes

<!-- ## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2 -->
