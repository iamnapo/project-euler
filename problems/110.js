let exponents;

module.exports = () => {
	const primeList = [];
	for (let i = 0; primeList.length < 15; i += 1) {
		if (isPrime(i)) {
			primeList.push(i);
		}
	}
	exponents = new Array(primeList.length).fill(0);
	let result = 1;
	for (const element of primeList) {
		result *= element;
	}

	const limit = (2 * 4000000) - 1;
	let counter = 1;

	for (;;) {
		twos(limit);
		if (exponents[0] < exponents[1]) {
			counter += 1;
		} else {
			const number = getNum(primeList, result);
			if (number < result) {
				result = number;
			}
			counter = 1;
		}
		if (counter >= exponents.length) {
			break;
		}
		exponents[counter] += 1;
		for (let i = 0; i < counter; i += 1) {
			exponents[i] = exponents[counter];
		}
	}
	return console.log(`Problem 110 solution is: ${result}`);
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

function twos(limit) {
	exponents[0] = 0;
	let divisors = 1;
	for (const element of exponents) {
		divisors *= (2 * element) + 1;
	}
	exponents[0] = Math.trunc(((limit / divisors) - 1) / 2);
	while (divisors * ((2 * exponents[0]) + 1) < limit) {
		exponents[0] += 1;
	}
}

function getNum(primeList, result) {
	let number = 1;
	for (const [i, element] of exponents.entries()) {
		if (element === 0) {
			break;
		}
		number *= primeList[i] ** element;
		if (result < number) {
			return result + 1;
		}
	}
	return number;
}
