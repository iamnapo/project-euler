let cache;

module.exports = () => {
	const m = 50;
	const n = 3;
	cache = new Array(m + 1).fill(0);
	return console.log(`Problem 114 solution is: ${f(m, n)}`);
};

function f(m, n) {
	let solutions = 1;
	if (n > m) {
		return solutions;
	}
	if (cache[m] !== 0) {
		return cache[m];
	}
	for (let startpos = 0; startpos <= m - n; startpos += 1) {
		for (let blocklength = n; blocklength <= m - startpos; blocklength += 1) {
			solutions += f(m - startpos - blocklength - 1, n);
		}
	}
	cache[m] = solutions;
	return solutions;
}
