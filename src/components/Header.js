import React from 'react';
import title  from '../images/title.png';

const Header = () => {
    return (
        <div className="header">
            <img src={title} className="titleLogo" alt=""/>
        </div>
    );
};

export default Header;