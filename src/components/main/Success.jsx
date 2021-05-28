import React from "react";


const SuccessModal = ({isSuccess}) => {

	return(

		<div className={`success-ctn ${isSuccess ? "success" : "fail"}`} id="success-modal">

			<h3 className="success-title">{isSuccess ? "Successfully redeemed!" : "Failed to redeem"}</h3>
			<i className={`fas ${isSuccess ? "fa-check-circle" : "fa-times"} success-icon`}></i>
            
		</div>
	)
}

export default SuccessModal;