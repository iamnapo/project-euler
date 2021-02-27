export default () => `Problem 151 solution is: ${calc().toFixed(6)}`;

function calc(A1 = 1, A2 = 1, A3 = 1, A4 = 1, prob = 1) {
	let numOfTimes = 0;
	const total = A1 + A2 + A3 + A4;
	if (total === 1) {
		if (A1 > 0) {
			return 0;
		}
		numOfTimes += prob;
	}
	if (A4 > 0) {
		numOfTimes += calc(A1 + 1, A2 + 1, A3 + 1, A4 - 1, prob * (A4 / total));
	}
	if (A3 > 0) {
		numOfTimes += calc(A1 + 1, A2 + 1, A3 - 1, A4, prob * (A3 / total));
	}
	if (A2 > 0) {
		numOfTimes += calc(A1 + 1, A2 - 1, A3, A4, prob * (A2 / total));
	}
	if (A1 > 0) {
		numOfTimes += calc(A1 - 1, A2, A3, A4, prob * (A1 / total));
	}
	return numOfTimes;
}
