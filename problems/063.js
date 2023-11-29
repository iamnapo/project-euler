const problem063 = () => {
	let result = 0;
	let lower = 0;
	let n = 1;
	while (lower < 10) {
		lower = Math.ceil(10 ** ((n - 1) / n));
		result += 10 - lower;
		n += 1;
	}

	return `Problem 63 solution is: ${result}`;
};

export default problem063;
