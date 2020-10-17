module.exports = () => {
	const limit = 1e11;
	const limit2 = Math.trunc(limit / ((5 ** 3) * (13 ** 2)));
	const limit3 = Math.trunc(limit2 / 17 + 1);
	const s = new Array(limit3).fill(0);
	for (let p = 0; p < limit3; p += 1) s[p] = p;
	for (let p = 5; p < limit3; p += 4) {
		let q = p;
		if (isPrime(q)) {
			while (q < limit3) {
				s[q] = 0;
				q += p;
			}
		}
	}
	for (let p = 0, sum = 0; p < limit3; p += 1) {
		sum += s[p];
		s[p] = sum;
	}
	let sum = 0n;
	for (let p = 5; (5 ** 3) * (p ** 3) < limit; p += 4) {
		const a = p ** 3;
		if (isPrime(p)) {
			for (let q = 5; 5 * (a * q * q) < limit; q += 4) {
				const b = a * q * q;
				if (isPrime(q) && (q !== p)) {
					for (let r = 5; (b * r) < limit; r += 4) {
						const c = b * r;
						if (isPrime(r) && (r !== p) && (r !== q)) sum += BigInt(c * s[Math.trunc(limit / c)]);
					}
				}
			}
		}
	}
	for (let p = 5; (5 ** 3) * (p ** 7) < limit; p += 4) {
		const a = p ** 7;
		if (isPrime(p)) {
			for (let q = 5; (q * q * q) < limit; q += 4) {
				const b = a * q * q * q;
				if (isPrime(q) && (q !== p)) sum += BigInt(b * s[Math.trunc(limit / b)]);
			}
		}
	}
	for (let p = 5; (5 ** 2) * (p ** 10) < limit; p += 4) {
		const a = p ** 10;
		if (isPrime(p)) {
			for (let q = 5; (a * q * q) < limit; q += 4) {
				const b = a * q * q;
				if (isPrime(q) && (q !== p)) sum += BigInt(b * s[Math.trunc(limit / b)]);
			}
		}
	}
	return console.log(`Problem 233 solution is: ${sum}`);
};

function isPrime(n) {
	if (n <= 1) return false;
	if (n === 2) return true;
	if (n % 2 === 0) return false;
	if (n < 9) return true;
	if (n % 3 === 0) return false;
	let counter = 5;
	while (counter ** 2 <= n) {
		if (n % counter === 0 || n % (counter + 2) === 0) return false;
		counter += 6;
	}
	return true;
}
