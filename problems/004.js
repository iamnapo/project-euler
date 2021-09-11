export default () => {
	let max = 1;
	for (let i = 100; i < 1000; i += 1) {
		for (let j = 100; j < 1000; j += 1) {
			const product = i * j;
			if (product > max && isPalindrome(product.toString())) {
				max = product;
			}
		}
	}
	return `Problem 4 solution is: ${max}`;
};

function isPalindrome(string) {
	return string === [...string].reverse().join("");
}
