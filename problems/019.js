const problem019 = () => {
	let count = 0;
	for (let i = 0; ; i += 1) {
		const temp = new Date(1901, i, 2);
		if (temp.getFullYear() === 2001) {
			break;
		}

		if (temp.getDay() === 1) {
			count += 1;
		}
	}

	return `Problem 19 solution is: ${count}`;
};

export default problem019;
