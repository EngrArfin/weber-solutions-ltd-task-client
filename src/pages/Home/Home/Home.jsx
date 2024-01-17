import React from 'react';
import NavBar from '../../NavBar/NavBar';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-4xl font-bold">WEBYAPAR SOLUTIONS PVT. LTD.
</h1>
                        <p className="py-6">Full Stack Development </p>
                        <button className="btn btn-primary">Get Internship</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;