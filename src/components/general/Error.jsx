import React from "react";

const Error = () => {
	return(
		<div className="error-ctn">
			<h1 className="error-title">Ooops!</h1>
			<i className="far fa-frown error-icon"></i>
			<h2 className="error-subtitle">We couldn't find products to show...</h2>
		</div>
	)
}

export default Error;