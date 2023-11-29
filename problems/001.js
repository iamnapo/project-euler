const problem001 = () => {
	let sum = 0;
	for (let i = 1; i < 1000; i += 1) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}

	return `Problem 1 solution is: ${sum}`;
};

export default problem001;
