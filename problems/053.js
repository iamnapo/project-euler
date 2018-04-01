module.exports = () => {
	let count = 0;
	for (let n = 1; n < 101; n += 1) {
		for (let r = 0; r <= n; r += 1) {
			const ncr = factorial(n) / (factorial(r) * factorial(n - r));
			if (ncr > 1e6) count += 1;
		}
	}
	return console.log(`Problem 53 solution is: ${count}`);
};

function factorial(n) {
	if (n === 0 || n === 1) return 1;
	return n * factorial(n - 1);
}
