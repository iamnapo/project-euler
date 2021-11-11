export default () => {
	const pattern = /1.2.3.4.5.6.7.8.9.0/;
	for (let i = 1_010_101_010n; i < 1_389_026_623n; i += 10n) {
		if (pattern.test(i ** 2n)) return `Problem 206 solution is: ${i}`;
	}

	return null;
};
