export default () => {
	const limit = 100;
	let result = 0;
	const scores = [];

	for (let i = 1; i < 21; i += 1) {
		scores.push(i, 2 * i, 3 * i);
	}
	scores.push(25, 50);

	const doubles = [];
	for (let i = 1; i < 21; i += 1) {
		doubles.push(2 * i);
	}
	doubles.push(25 * 2);

	for (const third of doubles) {
		if (third < limit) {
			result += 1;
		}
	}
	for (const element of scores) {
		for (const third of doubles) {
			if (element + third < limit) {
				result += 1;
			}
		}
	}
	for (let i = 0; i < scores.length; i += 1) {
		for (let j = i; j < scores.length; j += 1) {
			for (const third of doubles) {
				if (scores[i] + scores[j] + third < limit) {
					result += 1;
				}
			}
		}
	}
	return `Problem 109 solution is: ${result}`;
};
