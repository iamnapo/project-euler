const problem500 = () => {
	const N = 8_000_000;
	const primeList = Array.from({ length: N }, () => true);
	const factors = [];
	for (let i = 2; i < N; i += 1) {
		if (primeList[i]) {
			for (let m = i; m < N; m += i) primeList[m] = false;
			let ii = i;
			while (ii < N) {
				factors.push(ii);
				ii *= ii;
			}
		}
	}

	factors.sort((a, b) => a - b);
	return `Problem 500 solution is: ${factors.slice(0, 500_500).reduce((a, b) => (a * b) % 500_500_507, 1)}`;
};

export default problem500;
