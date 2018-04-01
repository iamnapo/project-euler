module.exports = () => {
	let result = 1;
	let bestRatio = Number.POSITIVE_INFINITY;
	const limit = 1e07;
	const primeList = [];
	for (let i = 2000; primeList.length < 3000; i += 1) {
		if (isPrime(i)) primeList.push(i);
	}

	for (let i = 0; i < primeList.length; i += 1) {
		for (let j = i + 1; j < primeList.length; j += 1) {
			const n = primeList[i] * primeList[j];
			if (n > limit) break;
			const phi = (primeList[i] - 1) * (primeList[j] - 1);
			const ratio = n / phi;

			if (isPerm(n, phi) && bestRatio > ratio) {
				result = n;
				bestRatio = ratio;
			}
		}
	}
	return console.log(`Problem 70 solution is: ${result}`);
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

function isPerm(m, n) {
	const arr = new Array(10).fill(0);

	let temp = n;
	while (temp > 0) {
		arr[temp % 10] += 1;
		temp = Math.trunc(temp / 10);
	}

	temp = m;
	while (temp > 0) {
		arr[temp % 10] -= 1;
		temp = Math.trunc(temp / 10);
	}


	for (let i = 0; i < 10; i += 1) {
		if (arr[i] !== 0) {
			return false;
		}
	}
	return true;
}
