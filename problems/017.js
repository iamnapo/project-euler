const problem017 = () => {
	const singleDigit = [
		0, // Zero
		3, // One
		3, // Two
		5, // Three
		4, // Four
		4, // Five
		3, // Six
		5, // Seven
		5, // Eight
		4, // Nine
	];
	const tens = [
		3, // Ten
		6, // Eleven
		6, // Twelve
		8, // Thirteen
		8, // Fourteen
		7, // Fifteen
		7, // Sixteen
		9, // Seventeen
		8, // Eighteen
		8, // Nineteen
	];
	const doubleDigit = [
		0, // Zero
		0, // Tens
		6, // Twenty
		6, // Thirty
		5, // Forty
		5, // Fifty
		5, // Sixty
		7, // Seventy
		6, // Eighty
		6, // Ninety
	];
	let sum = 11; // "one thousand"
	for (let i = 0; i < 1000; i += 1) {
		const third = Math.floor(i / 100);
		const second = Math.floor((i % 100) / 10);
		const first = i % 10;
		if (third > 0) {
			sum += singleDigit[third] + 7;
		} // "hundred"

		const temp = second === 1 ? tens[first] : doubleDigit[second] + singleDigit[first];
		if (temp > 0) {
			sum += temp + (third > 0 ? 3 : 0);
		} // "and"
	}

	return `Problem 17 solution is: ${sum}`;
};

export default problem017;
