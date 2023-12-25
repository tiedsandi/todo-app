import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import NewMeetup from './routes/NewMeetup.jsx';
import Favorites from './routes/Favorites.jsx';
import AllMeetups from './routes/AllMeetups.jsx';
import RootLayout from './routes/root layout/RootLayout.jsx';
import { FavoritesContextProvider } from './store/favorites-contex.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <AllMeetups /> },
      { path: '/new-meetup', element: <NewMeetup /> },
      { path: '/favorites', element: <Favorites /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <RouterProvider router={router} />
    </FavoritesContextProvider>
  </React.StrictMode>
);
