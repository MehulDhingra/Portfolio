// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <div className="home__section" id="home">
        <div className="home__container conatiner grid">
            <div className="home__content grid">
                <Social />

                <div className="home__img"></div>

                <Data />
            </div>

            <ScrollDown />
        </div>
    </div>
  )
}

export default Home