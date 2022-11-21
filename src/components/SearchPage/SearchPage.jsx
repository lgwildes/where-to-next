import React from 'react';
// import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
//import components
import Features from '../Features/Features';




function SearchPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type:'CLEAR_FEATURES'
    })
  
  },[]) 

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
        <Features />
      </div>
    

    </div>
  );
}

// this allows us to use <App /> in index.js
export default SearchPage;
