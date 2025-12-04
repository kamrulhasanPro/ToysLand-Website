import React from 'react';

const Spinner = ({className}) => {
    return (
        <div className={`${className}`}>
            {/* <span className="loading loading-spinner loading-xl"></span> */}
            <img src="/logo.svg" alt="logo" className='animate-spin duration-200'/>
        </div>
    );
};

export default Spinner;