export default () => {
	const N = 200_000;
	const V5N12 = 49_998 - 12;
	const V2N12 = 199_994 - 12;
	const v5 = Array.from({ length: N }, () => 0);
	const v2 = Array.from({ length: N }, () => 0);
	for (let n = 0; n < N; n += 1) {
		let [d2, d5, p2, p5] = [0, 0, 2, 5];
		while (p2 <= n) {
			d2 += Math.trunc(n / p2);
			p2 *= 2;
			if (p5 <= n) {
				d5 += Math.trunc(n / p5);
				p5 *= 5;
			}
		}

		[v2[n], v5[n]] = [d2, d5];
	}

	let count = 0;
	for (let i = 0; i <= 66_664; i += 1) {
		for (let j = i; j <= (N - i) / 2; j += 1) {
			const k = N - i - j;
			if ((V5N12 >= v5[i] + v5[j] + v5[k]) && (V2N12 >= v2[i] + v2[j] + v2[k])) count += (i === j || j === k) ? 3 : 6;
		}
	}

	return `Problem 154 solution is: ${count}`;
};
