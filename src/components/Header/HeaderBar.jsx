import React, {useContext} from "react";
import logo from "../../assets/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";
import {Context} from "../../context/ContextProvider";

function HeaderBar(){

    const {user:{name, points}} = useContext(Context);

    return(
    <div className="header-bar">
           <img src={logo} alt="aerolab"/>
           <div className="user">
                <h3>{name}</h3>
                <div className="user-coin">
                    <span className="cant-coin">
                        {points}
                    </span>
                    <img className="icon-coin" src={coin} alt="Monedas"/>
                </div>
           </div>           
        </div>
    )
}
export default HeaderBar; 