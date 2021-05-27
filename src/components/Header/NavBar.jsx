import React, {useContext, useState, useEffect} from "react";
import logo from "../../assets/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";
import {UserContext} from "../../context/UserContext";
import UserService from "../../services/UserService";

const NavBar = ({showModal})=>{

    const {user} = useContext(UserContext);
	// const {products, setProducts} = useContext(ProductContext);
	// const {showHistory, setHistoryFlag} = useContext(ProductContext);
	// const [auxProds, setAuxProds] = useState([]);


    // const redeemHistoryFunction = async () =>{

    //     const redeemHistoryFromFetch = await UserService.getRedeemHistory();

    //     if(products !== redeemHistoryFromFetch){
    //         setAuxProducts(products);
    //     }
    //     setProducts((showHistory ? redeemHistoryFromFetch : auxProducts));
    //     setOnHistory(showHistory);
    // }
    // const handleFlag = () => {
    //     setFlag (!flag);
    // };

    // const handleHistory = () =>{
    //     setHistoryFlag(!showHistory);
    // };

    // useEffect(() => {

    //     if (showHistory != null){
    //         redeemHistoryFunction();
    //     }

    // },[showHistory]);

    return(
        <nav>
        <div className="header-bar">
           <img src={logo} alt="Barrilete de aerolab"/>
           <div className="user">
            <h3>{user.name}</h3>
            {/* <button className="header-button" onClick={handleHistory} title={`see ${name} history`}>{!showHistory ? <FontAwesomeIcon icon={faHistory} /> : <FontAwesomeIcon icon={faHome} /> }</button>                 */}
                {/* <div className="user-coin" title="Add more coins" onClick={handleFlag}> */}
                    <span className="cant-coin">
                        {user.points}
                    </span>
                    <img className="icon-coin" src={coin} alt="Monedas"/>
                {/* </div> */}
           </div>
        </div>
    {/* {flag && <AddCoins/>}  */}
    </nav>
    )
};
export default NavBar; 