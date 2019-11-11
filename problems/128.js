module.exports = () => {
	let count = 1;
	const limit = 2000;
	let n = 0;
	let number = 0;

	while (count < limit) {
		n += 1;
		if (isPrime((6 * n) - 1) && isPrime((6 * n) + 1) && isPrime((12 * n) + 5)) {
			count += 1;
			number = (((3 * n) * n) - (3 * n) + 2);
			if (count >= limit) {
				break;
			}
		}
		if (isPrime((6 * n) + 5) && isPrime((6 * n) - 1) && isPrime((12 * n) - 7) && n !== 1) {
			count += 1;
			number = (((3 * n) * n) + (3 * n) + 1);
		}
	}
	return console.log(`Problem 128 solution is: ${number}`);
};

function isPrime(n) {
	if (n <= 1) {
		return false;
	}
	if (n === 2) {
		return true;
	}
	if (n % 2 === 0) {
		return false;
	}
	if (n < 9) {
		return true;
	}
	if (n % 3 === 0) {
		return false;
	}
	let counter = 5;
	while ((counter * counter) <= n) {
		if (n % counter === 0) {
			return false;
		}
		if (n % (counter + 2) === 0) {
			return false;
		}
		counter += 6;
	}
	return true;
}
