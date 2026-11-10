import React from "react";

const BmiResult = ({ resultCateg }) => {
	return (
		<div>
			<div>BMI értéke: {resultCateg.bmi}</div>
			<div>{resultCateg.category}</div>
			<div>{resultCateg.message}</div>
		</div>
	);
};

export default BmiResult;
