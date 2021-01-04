module.exports = () => {
	let count = 1;
	const graduallyDecrease = (d, n) => {
		while (n > 10) {
			if (f(n, d) === n) {
				count += n;
				n -= 1;
			} else if (n > f(n, d)) {
				n = f(n, d);
			} else {
				n -= Math.max(1, Math.trunc((f(n, d) - n) / n.toString().length));
			}
		}
	};
	for (let i = 1; i < 10; i += 1) graduallyDecrease(i, 10 ** 11);
	return console.log(`Problem 156 solution is: ${count - 21_295_121_502_550}`);
};

function f(n, d) {
	if (n < 10) return n >= d;
	const nString = n.toString();
	const firstDigit = Number.parseInt(nString[0], 10);
	const otherDigits = Number.parseInt(nString.slice(1), 10);
	const numOfOtherDigits = nString.slice(1).length;
	const tmp = firstDigit * numOfOtherDigits * (10 ** (numOfOtherDigits - 1)) + f(otherDigits, d);
	if (firstDigit < d) return tmp;
	if (firstDigit === d) return tmp + otherDigits + 1;
	return tmp + (10 ** numOfOtherDigits);
}
