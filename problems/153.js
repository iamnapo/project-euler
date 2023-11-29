const problem153 = () => {
	const n = 1e8;
	const cache = [];
	const cacheSize = 10 ** 4;
	for (let k = 0; k < cacheSize + 1; k += 1) cache.push(sumOfDivisors(k));
	let res = BigInt(sumOfDivisors(n));
	for (const [a, b] of sternBrocot(isqrt(n))) {
		if (a * a + b * b <= n) {
			const m = Math.trunc(n / (a * a + b * b));
			const r = m <= cacheSize ? cache[m] : sumOfDivisors(m);
			res += BigInt(2 * a * r);
		}
	}

	return `Problem 153 solution is: ${res}`;
};

function isqrt(n) {
	return Math.trunc(Math.sqrt(n + 0.5));
}

function triangular(n) {
	return Math.trunc(((n + 1) * n) / 2);
}

function sumOfDivisors(n) {
	if (n === 0) return 0;
	let res = 0;
	const k0 = isqrt(n);
	for (let k = 1; k < k0 + 1; k += 1) {
		res += k * Math.trunc(n / k);
	}

	const l0 = Math.trunc(n / k0);
	const t0 = triangular(Math.trunc(k0));
	for (let l = 1; l < l0 + 1; l += 1) res += triangular(Math.trunc(n / l)) - t0;
	return res;
}

function* sternBrocot(n) {
	let [a1, b1, a2, b2] = [0, 1, 1, 0];
	const stack = [];
	for (;;) {
		const [a3, b3] = [a1 + a2, b1 + b2];
		if (a3 <= n && b3 <= n) {
			yield [a3, b3];
			stack.push([a2, b2]);
			[a2, b2] = [a3, b3];
		} else if (stack.length > 0) {
			[a1, b1] = [a2, b2];
			[a2, b2] = stack.pop();
		} else {
			return;
		}
	}
}

export default problem153;
