import React from 'react';

const MyContainer = ({children, className}) => {
    return (
        <div className={`w-11/12 mx-auto ${className}`}>
            {children}
        </div>
    );
};

export default MyContainer;