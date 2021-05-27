import React, { useContext } from 'react';
import buyIcon from "../../assets/icons/buy-blue.svg";
import {Context} from "../../context/ContextProvider";
import coinIcon from "../../assets/icons/coin.svg";
import HoverCard from "./HoverCard";

function ProductCard(props) {
const { _id, category, cost, img, name } = props;

const {user:{points}}=useContext(Context);
  return(

    <div className="product-card">
      <HoverCard cost={cost} id={_id}/>
        <h2>your points {points}</h2>
        <img src={buyIcon} alt="buy-icon" className="buy-icon" />
        <img src={img.url} alt=""/>
        <div className="text-box">
            <h4>{category}</h4>
            <h3>{name}</h3>
            <img src={coinIcon} alt="coin" /><h2>{cost}</h2>
        </div>
    </div>
  )
}

export default ProductCard; 