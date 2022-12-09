import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


function AboutPage() {
  return (
    <div id="about-page" className="container">
      <div id="about-header">
        <h1>about <span id="title-cursive">where to next ✈️</span></h1>
      </div>
      <Grid2 id="about-grid" container spacing={2} m={2} justifyContent="space-evenly">
        <Card id="technology-card">
          <CardContent>
            <Typography>
              <h3 className="h3-cursive">technologies used</h3>
              <ul id="about-list">
                <li>
                 ✈️ Material UI
                </li>
                <li>
                ✈️ HTML/CSS
                </li>
                <li>
                ✈️ React.js
                </li>
                <li>
                ✈️ Redux.js
                </li>
                <li>
                ✈️ Javascript
                </li>
                <li>
                ✈️ Node.js
                </li>
                <li>
                ✈️ Express
                </li>
                <li>
                ✈️ PostgreSQL
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Card>

        <Card id="challenge-card">
          <CardContent>
            <Typography>
              <h3 className="h3-cursive">challenge</h3>
              <p className='quicksand'>creating SQL queries for unknown numbers of parameters determined by the user's selected preferences</p>
              <h3 className="h3-cursive">future growth</h3>
              <p className='quicksand'>build out the app to support more detailed itinerary planning for a desired destination</p>
            </Typography>
          </CardContent>
        </Card>

        <Card id="info-card">
          <CardContent>
            <div id="info-center">
            <Typography>
              <h3 className='quicksand'>Lydia Wildes Schnurpel</h3>
              </Typography>
              <CardMedia
                component="img"
                image={require("./Headshot-sm-resolution.jpeg")}
              />
            </div>
            <div id="social-icons">
              <CardMedia
                id="linkedin-icon"
                component="img"
                image={require("./A37EB04E-8BED-4E63-AF1E-50D7847FC6F7_4_5005_c.jpeg")}
              />
              <CardMedia
                id="linkedin-icon"
                component="img"
                image={require("./AboutPage/GitHub icon.png")}
              />
            </div>
            <div id='social-handles'>
              <p>Lydia Wildes Schnurpel</p>
              <p>@lgwildes</p>
            </div>
          </CardContent>
        </Card>
        
      </Grid2>
    </div>
  );
}

export default AboutPage;
