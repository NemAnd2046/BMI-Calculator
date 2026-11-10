import React from "react";
import BmiForm from "./components/BmiForm";
import BmiCardList from "./components/BmiCardList";
import { useState } from "react";
import "./App.css";

function App() {
	const [resultCateg, setResultCateg] = useState(null);

	return (
		<div>
			<h1>Te hová tartozol?</h1>
			<BmiForm resultCateg={resultCateg} setResultCateg={setResultCateg} />
			<BmiCardList resultCateg={resultCateg} />
		</div>
	);
}

export default App;
