const problem119 = () => {
	const potentialNumbers = [];
	for (let b = 2; b < 100; b += 1) {
		for (let e = 2; e < 10; e += 1) potentialNumbers.push([b ** e, b]);
	}

	potentialNumbers.sort((a, b) => a[0] - b[0]);
	let n = 1;
	for (const [a, b] of potentialNumbers) {
		if (digitSum(a) === b) {
			if (n === 30) return `Problem 119 solution is: ${a}`;
			n += 1;
		}
	}

	return null;
};

function digitSum(number) {
	const tmp = [...number.toString()].map((a) => Number.parseInt(a, 10));
	return tmp.reduce((a, b) => a + b);
}

export default problem119;
