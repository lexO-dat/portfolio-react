import React from 'react';
import Navbar from './navbar';
import Landing from './landing';
import About from './about';
import Hobbies from './hobbies';
import Proyects from './proyects';
import Contact from './contact';

const Home = ({ key }) => {
    return (
        <>
            <Navbar />
            <Landing />
            <About />
            <Hobbies />
            <Proyects />
            <Contact />
        </>
    );
}

export default Home;
