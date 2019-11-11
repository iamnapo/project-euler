module.exports = () => {
	let sum = 0;
	const limit = 15e07;
	const step = 2 * 3 * 5 * 7 * 11 * 13 * 17 * 19;
	const offsets = [];
	for (let a = 0; a < step; a += 1) {
		if (
			a % 10 === 0
      && a % 3 !== 0
      && [3, 4].includes(a % 7)
      && ![2, 3, 8, 9].includes(a % 11)
      && [1, 3, 4, 9, 10, 12].includes(a % 13)
      && ![2, 4, 5, 12, 13, 15].includes(a % 17)
      && ![4, 5, 7, 12, 14, 15].includes(a % 19)
		) {
			offsets.push(a);
		}
	}
	for (let k = 0; k < limit; k += step) {
		for (const ko of offsets) {
			const n = BigInt(k) + BigInt(ko);
			const n2 = n ** 2n;
			let passed = true;
			for (const o of [1, 3, 7, 9, 13, 27]) {
				if (!hopefullyPrime(n2 + BigInt(o))) {
					passed = false;
					break;
				}
			}
			if (passed) {
				for (const o of [5, 11, 15, 17, 21, 23, 25]) {
					if (hopefullyPrime(n2 + BigInt(o))) {
						passed = false;
						break;
					}
				}
			}
			if (passed) {
				sum += Number(n);
			}
		}
	}
	return console.log(`Problem 146 solution is: ${sum}`);
};

function powMod(a, p, m) {
	if (p === 1n) {
		return a % m;
	}
	let r = powMod(a, p / BigInt(2), m);
	r = (r ** 2n) % m;
	if (p & 1n) {
		r *= a % m;
	}
	return r % m;
}

function hopefullyPrime(p) {
	return powMod(2n, p - 1n, p) === 1n;
}
