module.exports = () => {
	let result = 0;
	const n = 12;
	for (let i = 2; i <= n / 2; i += 1) {
		result += (choose(n, i) * choose(n - i, i)) / 2;
		result -= choose(n, 2 * i) * catalanNumber(i);
	}
	return console.log(`Problem 106 solution is: ${result}`);
};

function catalanNumber(n) {
	return choose(2 * n, n) / (n + 1);
}

function choose(n, kk) {
	const k = Math.min(kk, n - kk);
	let res = 1;
	for (let i = 1; i <= k; i += 1) {
		res *= n - k + i;
		res /= i;
	}
	return res;
}
