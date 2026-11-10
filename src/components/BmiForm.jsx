import React from "react";
import { useState } from "react";
import { bmiRules } from "../rules";
import { getCateg } from "../utils";
import BmiResult from "./BmiResult";

const BmiForm = ({ resultCateg, setResultCateg }) => {
	const [height, setHeight] = useState("");
	const [weight, setWeight] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		//ellenőrzés

		const categ = getCateg(+height, +weight);
		setResultCateg(categ);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="number"
					placeholder="Testsúly (kg)"
					value={weight}
					onChange={(e) => setWeight(e.target.value)}
				/>
				<input
					type="number"
					placeholder="Testmagasság (cm)"
					value={height}
					onChange={(e) => setHeight(e.target.value)}
				/>
				<button>Számítás</button>
			</form>
			{resultCateg && <BmiResult resultCateg={resultCateg} />}
		</div>
	);
};

export default BmiForm;
