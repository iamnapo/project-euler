module.exports = () => {
	const end = 2e4 + 1;
	const mod = 1000000007n;
	const pf = [new Map(), new Map()];
	for (let i = 2; i < end; i += 1) {
		pf[i] = new Map();
		primeFactors(i).forEach((factor) => pf[i].set(factor, (pf[i].get(factor) || 0) + 1));
	}
	const inv = new Map([[0, 0n], [1, 1n]]);
	const D = (N) => {
		const res = new Map();
		for (let k = 0; k < N - 1; k += 1) {
			for (const p of pf[N - k].keys()) res.set(p, (res.get(p) || 0) + pf[N - k].get(p) * (N - 1 - 2 * k));
		}
		let ans = 1n;
		for (const k of res.keys()) {
			let invK = inv.get(k - 1);
			if (invK === undefined) {
				invK = BigInt(inverseMod2(k - 1, 1000000007));
				inv.set(k - 1, invK);
			}
			ans = (ans * (powMod(BigInt(k), res.get(k) + 1, mod) - 1n) * invK) % mod;
		}
		return ans % mod;
	};
	let sum = 0n;
	for (let k = 1; k < end; k += 1) sum += D(k);
	return console.log(`Problem 650 solution is: ${sum % mod}`);
};

function inverseMod2(p, q) {
	return ((inverseMod(p, q, 1, 0, 0, 1) % q) + q) % q;
}

function inverseMod(p, q, lastS, lastT, s, t) {
	if (q === 0) return lastS;
	return inverseMod(q, p % q, s, t, lastS - (s * ~~(p / q)), lastT - (t * ~~(p / q)));
}

function powMod(base, exp, mod) {
	if (exp === 1) return base % mod;
	if (exp % 2 === 0) return (powMod(base, (exp / 2), mod) ** 2n) % mod;
	return (base * powMod(base, (exp - 1), mod)) % mod;
}

function primeFactors(n) {
	const fac = [];
	while (n % 2 === 0) { fac.push(2); n /= 2; }
	const sqrt = Math.sqrt(n) + 1;
	for (let i = 3; i < sqrt; i += 2) {
		while (n % i === 0) { fac.push(i); n /= i; }
	}
	if (n > 2) fac.push(n);
	return fac;
}
