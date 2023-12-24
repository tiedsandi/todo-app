import React from 'react';
import { Outlet } from 'react-router-dom';

import MainNavigation from '../../components/main navigation/MainNavigation';
import classes from './RootLayout.module.css';

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
