export default () => {
	const mdrs = [0];
	const N = 1e6;
	const range = Array.from({ length: 9 }, (_, ind) => ind + 1);
	for (let i = 0; i < Number.parseInt([...(N - 1).toString()].map(() => "1").join(""), 10); i += 1) {
		for (const el of range) mdrs.push(el);
	}

	for (let i = 2; i < Math.trunc(N / 2); i += 1) {
		const x = mdrs[i];
		for (let j = i; j < Math.trunc((N - 1) / i) + 1; j += 1) {
			if (mdrs[i * j] < x + mdrs[j]) mdrs[i * j] = x + mdrs[j];
		}
	}
	return `Problem 159 solution is: ${mdrs.slice(2).reduce((a, b) => a + b, 0)}`;
};
