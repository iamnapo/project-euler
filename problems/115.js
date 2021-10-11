let cache;

export default () => {
	let solutions = 0;
	const n = 50;
	let m = n - 1;
	while (solutions < 1e06) {
		m += 1;
		cache = Array.from({ length: m + 1 }, () => 0);
		solutions = f(m, n);
	}

	return `Problem 115 solution is: ${m}`;
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
