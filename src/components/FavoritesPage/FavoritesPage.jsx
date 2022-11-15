import React, { useEffect } from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function FavoritesPage() {

  //TODO useEffect saga to get favorites

  return (
    <div className="container">
      <h1>my favorites</h1>
    </div>
  );
}

export default FavoritesPage;
