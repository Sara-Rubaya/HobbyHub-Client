import React from 'react';
import Banner from './Banner';
import WhyJoin from './WhyJoin/WhyJoin';

const Home = () => {
    return (
        <div className='mx-auto p-10 '>
            <Banner></Banner>
            <WhyJoin></WhyJoin>
        </div>
    );
};

export default Home;