import React from 'react';
import rightArrow from "../../assets/icons/arrow-right.svg";
import leftArrow from "../../assets/icons/arrow-left.svg";

function Filter (){
// Cambiarlo para facilitarlo con Callbacks
    return (
        <div className="filter">
            {/* AddModals */}
            <span className="prod-quant">16 of 32 products</span>
            <div className="sort">

                <span className="sort-by">Sort by:</span>
                <button className="filter-btn">Most recent</button>
                <button className="filter-btn">Lowes price</button>
                <button className="filter-btn">Highest price</button>
                
            </div>
            {/* useEffet tambien */}
            <div className="move-btn">

                <button className="arrow-btn"><img src={leftArrow} alt="Flecha a izquierda"/></button>

                <button className="arrow-btn"><img src={rightArrow} alt="Flecha a derecha"/></button>

            </div>     
        </div>
    )
};

export default Filter; 