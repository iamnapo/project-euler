const problem009 = () => {
	for (let i = 1; i < 1000; i += 1) {
		for (let j = 1; j < 1000; j += 1) {
			for (let k = 1; k < 1000; k += 1) {
				if ((i ** 2) + (j ** 2) === (k ** 2) && i + j + k === 1000) {
					return `Problem 9 solution is: ${i * j * k}`;
				}
			}
		}
	}

	return null;
};

export default problem009;
