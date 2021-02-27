let cache;

export default () => {
	let solutions = 0;
	const m = 50;
	const [nmax, nmin] = [4, 2];
	for (let i = nmin; i <= nmax; i += 1) {
		cache = Array.from({ length: m + 1 }, () => 0);
		solutions += g(m, i);
	}
	return `Problem 116 solution is: ${solutions}`;
};

function g(m, n) {
	let solutions = 0;
	if (n > m) {
		return solutions;
	}
	if (cache[m] !== 0) {
		return cache[m];
	}
	for (let startpos = 0; startpos <= m - n; startpos += 1) {
		solutions += g(m - startpos - n, n) + 1;
	}
	cache[m] = solutions;
	return solutions;
}
