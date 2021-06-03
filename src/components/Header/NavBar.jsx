import React, {useContext, useEffect, useState} from "react";
import logo from "../../assets/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";
import { UserContext } from "../../context/UserContext";
import { ProductContext } from "../../context/ProductContext";
import UserService from "../../services/UserService";

const NavBar = ({showModal}) => {
	
	const {user} = useContext(UserContext);
	const {products, setProducts} = useContext(ProductContext);
	const {showHistory, setHistoryFlag} = useContext(ProductContext);
	const [auxProds, setAuxProds] = useState([]);

	const handleHistory = async () => {
		setHistoryFlag(!showHistory);
	}

	const getHistory = async () => {
		const history = await UserService.getRedeemHistory();

		if(products.toString() !== history.toString()){
			setAuxProds(products);
		}
		
		setProducts((showHistory ? history : auxProds));
	}

	useEffect(() => {
		if(showHistory !== null){
			getHistory();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[showHistory]);

	return(

		<div className="nav-bar">
			<img className="header-logo" src={logo} alt="logo"/>
			<nav className="header-user">
				<span className="header-username">{user && user.name}</span>
				<div className="header-coins" onClick={showModal}>
					<span className="header-coin-count">{user && user.points}</span>
					<img src={coin} alt="coin" className="coin"/>
				</div>
				<button className={`header-username header-btn`} onClick={handleHistory}>{showHistory ? <i className="fas fa-home"></i> : <i className="fas fa-history"></i>}</button>
				<button className={`header-username header-btn`} onClick={showModal}><i className="fas fa-plus"></i></button>
			</nav>
		</div>
	)

}

export default NavBar
