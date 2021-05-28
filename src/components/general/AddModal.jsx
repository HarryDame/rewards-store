import React from "react";
import UserService from "../../services/UserService";
import {UserContext} from "../../context/UserContext";
// import coin from "../../assets/icons/coin.svg";

//Y el showModal
const AddModal = () =>{

const {setUser} = useContext(UserContext);
const handleAdd = async (amount) => {
		
    const resp = await UserService.addCoins(amount);

    if(resp){
        const newUser = await UserService.getUser();
        setUser(newUser);
        alert(resp.message + ". You've added " + amount + " coins");
    }else{
        alert("Failed to add coins.")
    }

}

    return(
        <div className="modal-ctn">
            <div className="add-modal">
                <h3>add more coins</h3>
            </div>
            //Todavía no l
            <div className="add-btn" name="1000" onClick={() => handleAdd(1000)}>
					{/* <img src="" alt="coin" className="coin"/> */}
					<h3 className="amount">1000</h3>
				</div>
				<div className="add-btn" name="5000" onClick={() => handleAdd(5000)}>
					{/* <img src="" alt="coin" className="coin"/> */}
					<h3 className="amount">5000</h3>
				</div>
				<div className="add-btn" name="7500" onClick={() => handleAdd(7500)}>
					{/* <img src="" alt="coin" className="coin"/> */}
					<h3 className="amount">7500</h3>
				</div>
        </div>
);

}

export default AddModal;