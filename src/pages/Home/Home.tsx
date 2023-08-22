import './Home.scss';
import { UserContext } from '@components/Contexts/UserContext';
import Footer from '@components/Footer/Footer';
import React, { type FC, useContext } from 'react';
import Renders from '@components/Renders/Renders';

export const Home: FC = () => {
  const context = useContext(UserContext);
  return (
    <div className="">
      <p>Id: {context?.id}</p>
      <p>UserName: {context?.name}</p>
      <p>Token: {context?.token}</p>
    </div>
  );
};

export default Home;
