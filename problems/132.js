module.exports = () => {
	let result = 0;
	let count = 0;
	const primeList = [];
	for (let i = 0; primeList.length < 5e04; i += 1) {
		if (isPrime(i)) primeList.push(i);
	}
	const k = 1e09;
	let i = 0;

	while (count < 40) {
		if (expmod(10, k, 9 * primeList[i]) === 1) {
			count += 1;
			result += primeList[i];
		}
		i += 1;
	}
	return console.log(`Problem 132 solution is: ${result}`);
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

function expmod(base, exp, mod) {
	if (exp === 0) return 1;
	if (exp % 2 === 0) {
		return (expmod(base, (exp / 2), mod) ** 2) % mod;
	}
	return (base * expmod(base, (exp - 1), mod)) % mod;
}
