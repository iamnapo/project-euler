export default () => {
	const limit = 25;
	let found = 0;
	let n = 1;
	let result = 0;
	while (found < limit) {
		n += 1;
		if (!isPrime(n)) {
			const a = aa(n);

			if (a !== 0 && ((n - 1) % a === 0)) {
				result += n;
				found += 1;
			}
		}
	}

	return `Problem 130 solution is: ${result}`;
};

function aa(n) {
	if (gcd(n, 10) !== 1) {
		return 0;
	}
	let x = 1;
	let k = 1;
	while (x !== 0) {
		x = ((x * 10) + 1) % n;
		k += 1;
	}
	return k;
}

function gcd(a, b) {
	let [x, y] = a > b ? [a, b] : [b, a];
	while (x % y !== 0) {
		[x, y] = [y, x % y];
	}
	return y;
}

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
