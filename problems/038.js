export default () => {
	let result = 0;
	for (let i = 9387; i > 9233; i -= 1) {
		result = [i, 2 * i].join("");
		if (isPandigital(result)) {
			break;
		}
	}

	return `Problem 38 solution is: ${result}`;
};

function isPandigital(n) {
	const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
	for (const d of digits) {
		if (!n.includes(d)) {
			return false;
		}
	}

	return n.length === 9;
}
