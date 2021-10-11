export default () => {
	const limit = 120_000;
	const limitSQ = 347;
	const pairs = [];
	for (let u = 1; u < limitSQ; u += 1) {
		for (let v = 1; v < u; v += 1) {
			if (gcd(u, v) === 1 && (u - v) % 3 !== 0) {
				const a = (2 * u * v) + (v * v);
				const b = (u * u) - (v * v);

				if (a + b > limit) break;
				for (let k = 1; k * (a + b) < limit; k += 1) pairs.push([k * a, k * b], [k * b, k * a]);
			}
		}
	}

	pairs.sort((a, b) => a[0] - b[0]);
	const index = Array.from({ length: limit }, () => -1);

	for (const [i, element] of pairs.entries()) {
		if (index[element[0]] === -1) {
			index[element[0]] = i;
		}
	}

	const sums = Array.from({ length: limit }, () => false);
	for (let i = 0; i < pairs.length; i += 1) {
		const [a, b] = pairs[i];
		const va = [];
		const vb = [];

		for (let j = index[a]; j < pairs.length; j += 1) {
			const next = pairs[j];
			if (next[0] !== a) {
				break;
			}

			va.push(next[1]);
		}

		for (let j = index[b]; j < pairs.length; j += 1) {
			const next = pairs[j];
			if (next[0] !== b) {
				break;
			}

			vb.push(next[1]);
		}

		for (const element of va) {
			if (vb.includes(element) && a + b + element < limit) {
				sums[a + b + element] = true;
			}
		}
	}

	let result = 0;
	for (let i = 0; i < limit; i += 1) {
		if (sums[i]) {
			result += i;
		}
	}

	return `Problem 143 solution is: ${result}`;
};

function gcd(a, b) {
	let [x, y] = a > b ? [a, b] : [b, a];
	while (x % y !== 0) {
		[x, y] = [y, x % y];
	}

	return y;
}
