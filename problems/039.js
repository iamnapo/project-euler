export default () => {
	const p = Array.from({ length: 1001 }, () => 0);
	for (let i = 1; i < 999; i += 1) {
		for (let j = 1; i + j < 1000; j += 1) {
			for (let k = 1; i + j + k < 1001; k += 1) {
				if ((i ** 2) + (j ** 2) === k ** 2) {
					p[i + j + k] += 1;
				}
			}
		}
	}

	return `Problem 39 solution is: ${p.indexOf(Math.max(...p))}`;
};
