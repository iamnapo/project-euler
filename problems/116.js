let cache;

module.exports = () => {
	let solutions = 0;
	const m = 50;
	const [nmax, nmin] = [4, 2];
	for (let i = nmin; i <= nmax; i += 1) {
		cache = new Array(m + 1).fill(0);
		solutions += G(m, i);
	}
	return console.log(`Problem 116 solution is: ${solutions}`);
};

function G(m, n) {
	let solutions = 0;
	if (n > m) return solutions;
	if (cache[m] !== 0) return cache[m];
	for (let startpos = 0; startpos <= m - n; startpos += 1) {
		solutions += G(m - startpos - n, n) + 1;
	}
	cache[m] = solutions;
	return solutions;
}
