let cache;

export default () => {
	const m = 50;
	const [nmax, nmin] = [4, 2];
	cache = Array.from({ length: m + 1 }, () => 0);
	return `Problem 117 solution is: ${f(m, nmin, nmax)}`;
};

function f(m, nmin, nmax) {
	let solutions = 1;
	if (nmin > m) {
		return solutions;
	}
	if (cache[m] !== 0) {
		return cache[m];
	}
	for (let bs = nmin; bs <= nmax; bs += 1) {
		for (let startpos = 0; startpos <= m - bs; startpos += 1) {
			solutions += f(m - startpos - bs, nmin, nmax);
		}
	}
	cache[m] = solutions;
	return solutions;
}
