import { bmiRules } from "./rules";

export const getCateg = (height, weight) => {
	const bmi = Math.round((weight / (height / 100) ** 2) * 10) / 10;
	const resultCtg = bmiRules.find((obj) => obj.min < bmi && bmi <= obj.max);
	return resultCtg ? { ...resultCtg, bmi } : null;
};
