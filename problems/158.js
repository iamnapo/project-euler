module.exports = () => {
	let max = 0;
	for (let n = 2; n < 26; n += 1) {
		let s = 0;
		for (let i = 2; i < n + 1; i += 1) s += combinations(26, i) * combinations(26 - i, n - i);
		if (s < max) break;
		max = s;
	}
	return console.log(`Problem 158 solution is: ${max}`);
};

function combinations(n, r) {
	return Math.trunc(factorial(n) / factorial(r) / factorial(n - r));
}

function factorial(n) {
	if (n === 0 || n === 1) return 1;
	return n * factorial(n - 1);
}
