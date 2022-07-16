import isPrime from "./common/is-prime.js";

export default () => {
	const fiveDigitPattern = get5digitPatterns();
	const sixDigitPattern = get6digitPatterns();
	let result = Number.MAX_SAFE_INTEGER;

	for (let i = 11; i < 1000; i += 2) {
		if (i % 5 !== 0) {
			const patterns = (i < 100) ? fiveDigitPattern : sixDigitPattern;

			for (const element of patterns) {
				for (let k = 0; k < 3; k += 1) {
					if (!(element[0] === 0 && k === 0)) {
						const pattern = fillPattern(element, i);
						const candidate = generateNumber(k, pattern);
						if (candidate < result && isPrime(candidate)) {
							if (familySize(k, pattern) === 8) {
								result = candidate;
							}

							break;
						}
					}
				}
			}
		}
	}

	return `Problem 51 solution is: ${result}`;
};

function get5digitPatterns() {
	const retVal = Array.from({ length: 4 });
	retVal[0] = [1, 0, 0, 0, 1];
	retVal[1] = [0, 1, 0, 0, 1];
	retVal[2] = [0, 0, 1, 0, 1];
	retVal[3] = [0, 0, 0, 1, 1];
	return retVal;
}

function get6digitPatterns() {
	const retVal = Array.from({ length: 10 });
	retVal[0] = [1, 1, 0, 0, 0, 1];
	retVal[1] = [1, 0, 1, 0, 0, 1];
	retVal[2] = [1, 0, 0, 1, 0, 1];
	retVal[3] = [1, 0, 0, 0, 1, 1];
	retVal[4] = [0, 1, 1, 0, 0, 1];
	retVal[5] = [0, 1, 0, 1, 0, 1];
	retVal[6] = [0, 1, 0, 0, 1, 1];
	retVal[7] = [0, 0, 1, 1, 0, 1];
	retVal[8] = [0, 0, 1, 0, 1, 1];
	retVal[9] = [0, 0, 0, 1, 1, 1];
	return retVal;
}

function familySize(repeatingNumber, pattern) {
	let fSize = 1;
	for (let i = repeatingNumber + 1; i < 10; i += 1) {
		if (isPrime(generateNumber(i, pattern))) {
			fSize += 1;
		}
	}

	return fSize;
}

function generateNumber(repNumber, filledPattern) {
	let temp = 0;
	for (const element of filledPattern) {
		temp *= 10;
		temp += (element === -1) ? repNumber : element;
	}

	return temp;
}

function fillPattern(pattern, number) {
	const filledPattern = Array.from({ length: pattern.length });
	let temp = number;
	for (let i = filledPattern.length - 1; i > -1; i -= 1) {
		if (pattern[i] === 1) {
			filledPattern[i] = temp % 10;
			temp = Math.trunc(temp / 10);
		} else {
			filledPattern[i] = -1;
		}
	}

	return filledPattern;
}
