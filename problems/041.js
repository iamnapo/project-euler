module.exports = () => {
	// 8 and 9 digit pandigitals are always divisable by 3
	for (let i = 7654321; ; i -= 1) {
		if (isPandigital(i.toString()) && isPrime(i)) {
			return console.log(`Problem 41 solution is: ${i}`);
		}
	}
};

function isPandigital(n) {
	let digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
	digits = digits.slice(0, n.length);
	for (const [i, d] of digits.entries()) {
		if (n.indexOf(d) < 0) {
			return false;
		}
		digits[i] = "-";
	}
	return true;
}

function isPrime(number) {
	for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
		if (number % i === 0) {
			return false;
		}
	}
	return number > 1;
}
