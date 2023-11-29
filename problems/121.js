const problem121 = () => {
	const outcomes = Array.from({ length: 16 }, () => 0);
	outcomes[15] = 1;
	outcomes[14] = 1;

	for (let i = 2; i < 16; i += 1) {
		for (let j = 0; j < 15; j += 1) {
			outcomes[j] = outcomes[j + 1];
		}

		outcomes[15] = 0;
		for (let j = 15; j > 0; j -= 1) {
			outcomes[j] += outcomes[j - 1] * i;
		}
	}

	let positive = 0;
	for (let i = 0; i < 8; i += 1) {
		positive += outcomes[i];
	}

	let total = 1;
	for (let i = 2; i < 17; i += 1) {
		total *= i;
	}

	return `Problem 121 solution is: ${Math.trunc(total / positive)}`;
};

export default problem121;
