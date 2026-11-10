import React from "react";

const BmiCard = ({ image, min, max, category, message }) => {
	return (
		<div>
			<img src={image} alt={category} />
			<div>{category}</div>
			<div>
				BMI: {min} - {max}
			</div>
			<div>{message}</div>
		</div>
	);
};

export default BmiCard;
