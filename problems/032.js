const problem032 = () => {
	const products = new Set();
	for (let a = 1; a < 9876; a += 1) {
		for (let b = 1; b < 9876; b += 1) {
			const tmp = a * b;
			if (isPandigital(`${a}${b}${tmp}`)) {
				products.add(tmp);
			}
		}
	}

	return `Problem 32 solution is: ${[...products].reduce((a, b) => Number.parseInt(a, 10) + Number.parseInt(b, 10))}`;
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

export default problem032;
