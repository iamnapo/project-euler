const problem125 = () => {
	const limit = 1e8;
	const sqrtLimit = Math.sqrt(limit);
	let sum = 0;
	const list = [];
	for (let i = 1; i <= sqrtLimit; i += 1) {
		let number = i ** 2;
		for (let j = i + 1; j <= sqrtLimit; j += 1) {
			number += j ** 2;
			if (number > limit) {
				break;
			}

			if (isPalindrome(number.toString()) && !list.includes(number)) {
				sum += number;
				list.push(number);
			}
		}
	}

	return `Problem 125 solution is: ${sum}`;
};

function isPalindrome(string) {
	return (string === [...string].reverse().join("")) && string[0] !== "0";
}

export default problem125;
