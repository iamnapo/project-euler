const problem052 = () => {
	for (let i = 1; ; i += 1) {
		if (sameDigits(i.toString(), (2 * i).toString()) && sameDigits(i.toString(), (3 * i).toString()) && sameDigits(i.toString(), (4 * i).toString()) && sameDigits(i.toString(), (5 * i).toString()) && sameDigits(i.toString(), (6 * i).toString())) {
			return `Problem 52 solution is: ${i}`;
		}
	}
};

function sameDigits(a, b) {
	for (const d of a) {
		if (!b.includes(d)) {
			return false;
		}
	}

	for (const d of b) {
		if (!a.includes(d)) {
			return false;
		}
	}

	return a.length === b.length;
}

export default problem052;
