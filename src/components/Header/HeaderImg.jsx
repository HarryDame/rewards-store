import React from 'react';
import headerImage from "../../assets/header-x1.png";

function HeaderImg () {
    
        return (
            <div className='header-img-ctn'>
                <img src={headerImage} alt="Header all" className="header-img" />
            </div>
        )
    
}

export default HeaderImg;