export default () => {
	let len = 0;
	let num = 0;
	for (let i = 1000; i > 1; i -= 1) {
		if (len > i - 1) {
			break;
		}
		const remainders = Array.from({ length: i }, () => 0);
		let j = 1;
		let index = 0;
		while (remainders[j] === 0 && j !== 0) {
			remainders[j] = index;
			index += 1;
			j *= 10;
			j %= i;
		}
		if (index - remainders[j] > len) {
			num = i;
			len = index - remainders[j];
		}
	}
	return `Problem 26 solution is: ${num}`;
};
