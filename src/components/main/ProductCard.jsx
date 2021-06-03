
import React, { useContext, useState, useEffect } from 'react';
import {UserContext} from "../../context/UserContext";
import buyIcon from "../../assets/icons/buy-blue.svg";
import coin from "../../assets/icons/coin.svg";
import HoverCard from "./HoverCard";
import ProductService from "../../services/ProductService";
import UserService from "../../services/UserService";
import SuccessModal from "./Success";
import {ProductContext} from "../../context/ProductContext";

const ProductCard=(props)=> {

  const {category, cost, img, name, _id} = props;
	const {user, setUser} = useContext(UserContext);
  // setShowHistory
	const {showHistory, setShowHistory} = useContext(ProductContext);
	const [success, setSuccess] = useState(null);
  
  const handleRedeem = async (e) =>{
		const pid = e.target.id;
		const resp = await ProductService.redeemProduct(pid);

		if(resp !== false){
			const newUser = await UserService.getUserInfo();
			setUser(newUser);
		}
		setSuccess(resp);
	}

	useEffect(() => {
		setTimeout(() => {
      setSuccess(null);
    },4000);
		clearTimeout();
	},[success]);

  return(

      <div className="product-card" id={_id}>
          {
             user.points >= cost ?
             <img src={buyIcon} alt="buy-bag" className="buy-bag"/>
             :
            <div className="buy-bag product-more-coins">
              <h3 className="more-coins">{`You need ${cost-user.points}`}</h3>
              <img src={coin} alt="coin" className="coin"/>
            </div>
          }
          <img src={img.hdUrl} alt={`${name}-product`} className="product-img"/>
          <div className="product-info">
            <h4 className="category">{category}</h4>
            <h3 className="product-name">{name}</h3>
          </div>
          {
              user.points >= cost && (success === null) && !showHistory ? 
              <HoverCard cost={cost} _id={_id} handleRedeem={handleRedeem}/>
              :
              null
          }
          {
              success !== null ? <SuccessModal id="success-modal" isSuccess={success} /> : null
          }
      </div>
  )
}

export default ProductCard; 