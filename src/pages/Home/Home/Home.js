import React, { useContext } from 'react';
import { AUTH_CONTEXT } from '../../../context/AuthProvider';
import Tasks from '../Tasks/Tasks';

const Home = () => {
    const value = useContext(AUTH_CONTEXT);
    console.log(value);
    return (
        <div>
          <Tasks /> 
        </div>
    );
};

export default Home;