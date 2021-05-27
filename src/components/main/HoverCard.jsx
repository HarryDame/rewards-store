import React, {useContext, useState} from "react";
import {UserContext} from "../../context/UserContext";
import buyWithe from "../../assets/icons/buy-white.svg";
import iconCoin from "../../assets/icons/coin.svg";

function HoverCard (props){

    const {
        cost,
        _id
    } = props;

    const {user} = useContext(UserContext) 

    return (
        <div className="hover-card">
            <img src={buyWithe} alt="comprar"/>
            <div className="cost">
                <span className="cant-coin">{cost}</span>
                <img className="" src={iconCoin} alt="coin"/>
            </div>
            <button className="redeem-btn">Redeem now</button>
        </div>
    )
};

export default HoverCard; 