const problem493 = () => {
	let probNoRed = 1;
	for (let i = 41; i < 61; i += 1) probNoRed *= i;
	for (let i = 51; i < 71; i += 1) probNoRed /= i;
	return `Problem 493 solution is: ${(7 * (1 - probNoRed)).toFixed(9)}`;
};

export default problem493;
