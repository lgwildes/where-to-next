import React from 'react';
// import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useState } from 'react';

// import MUI elements

//import components
import International from '../International/International';
import Features from '../Features/Features';

function SearchPage() {


  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>welcome, {user.username}</h2>
      <h3>let's dream!</h3>
      {/* <p>Your ID is: {user.id}</p> */}
      {/* <LogOutButton className="btn" /> */}

      <div>
        <h5>selected feature chips will appear here</h5>
        {/* Display chips by rendering an array of chips */}
      </div>
      <div>
        <International />
      </div>
      <div>
        <Features />
      </div>
    

    </div>
  );
}

// this allows us to use <App /> in index.js
export default SearchPage;
