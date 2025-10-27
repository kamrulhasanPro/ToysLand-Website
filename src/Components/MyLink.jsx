import React from 'react';
import { NavLink, useLocation } from 'react-router';

const MyLink = ({to, children}) => {
    const location = useLocation();
  const isCategory = location.pathname.startsWith("/category");
  const checkPath = to.startsWith("/category")
    const defaultStyle = `text-lg text-neutral font-medium ${(isCategory && checkPath) && 'text-primary'}`;
    return (
        <li>
          <NavLink to={to} className={({isActive}) => isActive ? `${defaultStyle} text-primary` : defaultStyle}>{children}</NavLink>  
        </li>
    );
};

export default MyLink;