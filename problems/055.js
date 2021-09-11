export default () => {
	let count = 0;
	for (let i = 10; i < 10_000; i += 1) {
		if (isLychrel(i)) {
			count += 1;
		}
	}
	return `Problem 55 solution is: ${count}`;
};

function isLychrel(num) {
	let tmp = num;
	for (let i = 0; i < 50; i += 1) {
		tmp += Number.parseInt([...tmp.toString()].reverse().join(""), 10);
		if (isPalindrome(tmp.toString())) {
			return false;
		}
	}
	return true;
}

function isPalindrome(string) {
	return (string === [...string].reverse().join("")) && string[0] !== "0";
}
