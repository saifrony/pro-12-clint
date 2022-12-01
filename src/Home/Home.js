import React from 'react';
import Cards from './Cards/Cards/Cards';
import Slider from './Slider/Slider';
import Source from './Source/Source';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Cards></Cards>
            <Source></Source>
        </div>
    );
};

export default Home;