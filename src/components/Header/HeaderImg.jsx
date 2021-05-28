import React, { useContext } from "react";
import headerImg from "../../assets/header-x1.png";
import {ProductContext} from "../../context/ProductContext";
import { UserContext } from "../../context/UserContext";

const HeaderImg = () => {
	
	const {products} = useContext(ProductContext);
	const {user} = useContext(UserContext);

	return(
		<div className="header-img-ctn">
			<h1 className="header-title">{products.toString() === user.redeemHistory.toString() ? `Redeem history` : `Electronics`}</h1>
			<img className="header-img" src={headerImg} alt="electronics-img"/>
		</div>
	)
}

export default HeaderImg;