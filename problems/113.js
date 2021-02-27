export default () => {
	const result = choose(110, 10) + choose(109, 9) - 1002;
	return `Problem 113 solution is: ${result}`;
};

function choose(n, kk) {
	const k = Math.min(kk, n - kk);
	let res = 1;
	for (let i = 1; i <= k; i += 1) {
		res *= n - k + i;
		res = Math.trunc(res / i);
	}
	return res;
}
