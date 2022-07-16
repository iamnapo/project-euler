import isPrime from "./common/is-prime.js";

export default () => {
	let res = [];
	for (let i = 0; i < 10; i += 1) {
		let l = gen(i, 0, [], 10);
		let k = 0;
		while (l.length === 0) {
			k += 1;
			l = gen(i, k, [], 10);
		}

		res = [...res, ...l];
	}

	return `Problem 111 solution is: ${res.reduce((a, b) => a + b, 0)}`;
};

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
		res = [...res, ...gen(d, k, [...l, d], n - 1)];
	} else {
		for (let i = 0; i < 10; i += 1) {
			res = d === i ? [...res, ...gen(d, k, [...l, d], n - 1)] : [...res, ...gen(d, k - 1, [...l, i], n - 1)];
		}
	}

	return res;
}
