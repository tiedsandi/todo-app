import React, { useContext } from 'react';
import FavoritesContext from '../store/favorites-contex';
import MeetupList from '../components/meetups/MeetupList';

const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  content =
    favoritesCtx.totalFavorites === 0 ? (
      <p>You got no favorites yet. Start adding some?</p>
    ) : (
      <MeetupList meetups={favoritesCtx.favorites} />
    );

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default Favorites;
