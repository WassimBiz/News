import React from 'react';
import Main from '@/components/Main';
import Header from '@/components/Header';
const style = {
  backgroundColor: 'rgb(192, 192, 192)'}
const Home = () => {
  return (
    <div style={style}>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
