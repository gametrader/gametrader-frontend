import React from 'react';

const HomePage = () => {
    return (
        <div>
            HomePage<br></br>
            Running instance: {process.env.REACT_APP_ENVIROMENT}
        </div>
    );
};

export default HomePage;
