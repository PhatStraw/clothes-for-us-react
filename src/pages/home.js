import React from "react";
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to='/sender'>
        Give Back To Those In Need
      </Link>
      <br />
      <Link to='/receiver'>
        Gain Access To Gently Used and Brand New Clothes For Free
      </Link>
    </>
  );
};

export default Home;
