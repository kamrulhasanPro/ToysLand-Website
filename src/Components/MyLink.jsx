import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({to, children}) => {
    const defaultStyle = 'text-lg text-neutral font-medium';
    return (
        <li>
          <NavLink to={to} className={({isActive}) => isActive ? `${defaultStyle} text-primary` : defaultStyle}>{children}</NavLink>  
        </li>
    );
};

export default MyLink;