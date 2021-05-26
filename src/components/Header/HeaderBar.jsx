import React from "react";
import logo from "../../assets/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";

function HeaderBar(){
    return(
    <div className="header-bar">
           <img src={logo} alt="Barrilete de aerolab"/>
           <div className="user">
                <h3>Enrique usuariooo</h3>
                <div className="user-coin">
                    <span className="cant-coin">
                        6000
                    </span>
                    <img className="icon-coin" src={coin} alt="Monedas"/>
                </div>
           </div>           
        </div>
    )
}
export default HeaderBar; 