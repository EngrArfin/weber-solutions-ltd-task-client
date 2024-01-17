import React from 'react';
import NavBar from '../../NavBar/NavBar';
import UserList from '../Server/UserList/UserList';

const Home = () => {
    return (
        <div>
            
            <NavBar></NavBar>
            <UserList></UserList>
            
        </div>
    );
};

export default Home;