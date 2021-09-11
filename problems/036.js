export default () => {
	let sum = 0;
	for (let n = 1; n < 1e06; n += 1) {
		if (isPalindrome(n.toString()) && isPalindrome(n.toString(2))) {
			sum += n;
		}
	}
	return `Problem 36 solution is: ${sum}`;
};

function isPalindrome(string) {
	return (string === [...string].reverse().join("")) && string[0] !== "0";
}
