export default () => {
	const maxK = 12_000;
	const maxNumber = 2 * maxK;
	const numFactors = Math.trunc(Math.log10(maxNumber) / Math.log10(2));
	const factors = Array.from({ length: numFactors }, () => 0);
	const k = Array.from({ length: maxK + 1 }, (_, ind) => 2 * ind);
	k[1] = 0;
	factors[0] = 1;
	let curMaxFactor = 1;
	let j = 0;

	for (; ;) {
		if (j === 0) {
			if (curMaxFactor === numFactors) {
				break;
			}

			if (factors[0] < factors[1]) {
				factors[0] += 1;
			} else {
				curMaxFactor += 1;
				factors[curMaxFactor - 1] = Number.MAX_SAFE_INTEGER;
				factors[0] = 2;
			}

			j += 1;
			factors[1] = factors[0] - 1;
		} else if (j === curMaxFactor - 1) {
			factors[j] += 1;
			let sum = 0;
			let prod = 1;
			for (let i = 0; i < curMaxFactor; i += 1) {
				prod *= factors[i];
				sum += factors[i];
			}

			if (prod > maxNumber) {
				j -= 1;
			} else {
				const pk = (prod - sum) + curMaxFactor;
				if (pk <= maxK && prod < k[pk]) {
					k[pk] = prod;
				}
			}
		} else if (factors[j] < factors[j + 1]) {
			factors[j] += 1;
			factors[j + 1] = factors[j] - 1;
			j += 1;
		} else if (factors[j] >= factors[j + 1]) {
			j -= 1;
		}
	}

	return `Problem 88 solution is: ${[...new Set(k)].reduce((a, b) => a + b)}`;
};
