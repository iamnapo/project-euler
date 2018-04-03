module.exports = () => {
	let result = 10;
	const primeList = [];
	for (let i = 6; i < 1e05; i += 1) {
		if (isPrime(i)) {
			primeList.push(i);
		}
	}
	for (let i = 0; i < primeList.length; i++) {
		if (otherFactor(a(primeList[i]))) {
			result += primeList[i];
		}
	}
	return console.log(`Problem 133 solution is: ${result}`);
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

function a(n) {
	let x = 1;
	let k = 1;
	while (x !== 0) {
		x = ((x * 10) + 1) % n;
		k++;
	}
	return k;
}

function otherFactor(k) {
	const factors = [2, 5];
	let i = 0;
	while (i < factors.length && k > 1) {
		if (k % factors[i] === 0) {
			k = Math.trunc(k / factors[i]);
		} else {
			i++;
		}
	}
	return k > 1;
}
