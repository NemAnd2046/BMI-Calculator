import React from "react";
import { bmiRules } from "../rules";
import { useState } from "react";
import BmiCard from "./BmiCard";

const BmiCardList = ({ resultCateg }) => {
	const [bmiCategories] = useState(bmiRules);

	return (
		<div>
			<h2>BMI-kategóriák</h2>
			<div className="cardlist">
				{bmiCategories.map((obj) => (
					<div
						key={obj.id}
						className={`card ${resultCateg && obj.id == resultCateg.id ? "borderSelected" : ""}`}
					>
						<BmiCard {...obj} />
					</div>
				))}
			</div>
		</div>
	);
};

export default BmiCardList;
