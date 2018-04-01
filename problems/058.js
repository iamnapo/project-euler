module.exports = () => {
	let noOfPrimes = 3;
	let sl = 2;
	let c = 9;

	while (noOfPrimes / ((2 * sl) + 1) > 0.10) {
		sl += 2;
		for (let i = 0; i < 3; i += 1) {
			c += sl;
			if (isPrime(c)) noOfPrimes += 1;
		}
		c += sl;
	}
	return console.log(`Problem 58 solution is: ${sl + 1}`);
};

function isPrime(n) {
	if (n <= 1) return false;
	if (n === 2) return true;
	if (n % 2 === 0) return false;
	if (n < 9) return true;
	if (n % 3 === 0) return false;
	let counter = 5;
	while ((counter * counter) <= n) {
		if (n % counter === 0) return false;
		if (n % (counter + 2) === 0) return false;
		counter += 6;
	}
	return true;
}
