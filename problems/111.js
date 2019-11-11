module.exports = () => {
	let res = [];
	for (let i = 0; i < 10; i += 1) {
		let l = gen(i, 0, [], 10);
		let k = 0;
		while (l.length === 0) {
			k += 1;
			l = gen(i, k, [], 10);
		}
		res = res.concat(l);
	}
	return console.log(`Problem 111 solution is: ${res.reduce((a, b) => a + b, 0)}`);
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

function lton(l) {
	const s = 10;
	let n = 0;
	l.reverse();
	for (const d of l) {
		n = (n * s) + d;
	}
	return n;
}

function numlen(n, l) {
	return n.toString().length >= l;
}

function gen(d, k, l, n) {
	if (n === 0) {
		const number = lton(l);
		return (isPrime(number) && numlen(number, 10)) ? [number] : [];
	}
	let res = [];
	if (k === 0) {
		res = res.concat(gen(d, k, l.concat(d), n - 1));
	} else {
		for (let i = 0; i < 10; i += 1) {
			res = d === i ? res.concat(gen(d, k, l.concat(d), n - 1)) : res.concat(gen(d, k - 1, l.concat(i), n - 1));
		}
	}
	return res;
}
