export default () => {
	const LIMIT = 1e04; // LGTM!
	let D = Number.MAX_SAFE_INTEGER;
	for (let j = 1; j <= LIMIT; j += 1) {
		for (let k = 1; k <= LIMIT; k += 1) {
			const pj = (j * ((3 * j) - 1)) / 2;
			const pk = (k * ((3 * k) - 1)) / 2;
			if (isPentagonal(Math.abs(pj - pk)) && isPentagonal(pj + pk) && Math.abs(pj - pk) < D) {
				D = Math.abs(pj - pk);
			}
		}
	}
	return `Problem 44 solution is: ${D}`;
};

function isPentagonal(num) {
	if (num === 0) {
		return false;
	}
	return ((Math.sqrt(1 + (24 * num)) + 1) / 6) % 1 === 0;
}
