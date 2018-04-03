module.exports = () => {
	const primeList = [];
	for (let i = 1; primeList.length < 200; i += 1) {
		if (isPrime(i)) {
primeList.push(i);
		}
	}
	let result = 1;
	let i = 0;
	while (result * primeList[i] < 1e06) {
		result *= primeList[i];
		i += 1;
	}
	return console.log(`Problem 69 solution is: ${result}`);
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
