const problem120 = () => {
	let r = 0;
	for (let a = 3; a < 1001; a += 1) {
		r += 2 * a * Math.trunc((a - 1) / 2);
	}

	return `Problem 120 solution is: ${r}`;
};

export default problem120;
