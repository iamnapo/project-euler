export default () => {
	const primeList = [];
	for (let i = 0; primeList.length < 5000; i += 1) {
		if (isPrime(i)) {
			primeList.push(i);
		}
	}
	const powers = Array.from({ length: 3 }, () => []);
	const target = 5e07;
	const tmpList = primeList.slice();
	for (let j = 0; j < 3; j += 1) {
		for (const [i, element] of primeList.entries()) {
			tmpList[i] *= element;
		}
		powers[j] = tmpList.slice();
	}
	const numbers = new Set();
	for (let i = 0; i < primeList.length; i += 1) {
		for (let j = 0; j < primeList.length; j += 1) {
			for (let k = 0; k < primeList.length; k += 1) {
				if (powers[0][i] > target) {
					break;
				}
				if (powers[1][j] > target) {
					break;
				}
				if (powers[2][k] > target) {
					break;
				}
				const number = powers[0][i] + powers[1][j] + powers[2][k];
				if (number > target) {
					break;
				}
				numbers.add(number);
			}
		}
	}
	return `Problem 87 solution is: ${numbers.size}`;
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
