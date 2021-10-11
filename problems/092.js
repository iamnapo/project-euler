export default () => {
	let result = 0;
	for (let i = 1; i < 1e07; i += 1) {
		let str = i.toString();
		let j = 0;
		const r = 1;
		while (r === 1) {
			for (let k = 0; k < str.length; k++) j += Number.parseInt(str[k], 10) ** 2;
			if (j === 89) {
				result += 1;
				break;
			}

			if (j === 1) break;
			str = j.toString();
			j = 0;
		}
	}

	return `Problem 92 solution is: ${result}`;
};
