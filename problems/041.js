import isPrime from "./common/is-prime.js";

const problem041 = () => {
	// 8 and 9 digit pandigitals are always divisable by 3
	for (let i = 7_654_321; ; i -= 1) {
		if (isPandigital(i.toString()) && isPrime(i)) {
			return `Problem 41 solution is: ${i}`;
		}
	}
};

function isPandigital(n) {
	let digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
	digits = digits.slice(0, n.length);
	for (const [i, d] of digits.entries()) {
		if (!n.includes(d)) {
			return false;
		}

		digits[i] = "-";
	}

	return true;
}

export default problem041;
