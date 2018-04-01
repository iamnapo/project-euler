let cache;

module.exports = () => {
	const m = 50;
	const [nmax, nmin] = [4, 2];
	cache = new Array(m + 1).fill(0);
	return console.log(`Problem 117 solution is: ${F(m, nmin, nmax)}`);
};

function F(m, nmin, nmax) {
	let solutions = 1;
	if (nmin > m) return solutions;
	if (cache[m] !== 0) return cache[m];
	for (let bs = nmin; bs <= nmax; bs += 1) {
		for (let startpos = 0; startpos <= m - bs; startpos += 1) {
			solutions += F(m - startpos - bs, nmin, nmax);
		}
	}
	cache[m] = solutions;
	return solutions;
}
