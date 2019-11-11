module.exports = () => {
	const n1 = 3;
	const d1 = 7;
	let nbest = 0;
	let dbest = 1;
	const limit = 1000000;
	let lowerbound = 2;
	let d2 = limit;

	while (d2 >= lowerbound) {
		const n2 = Math.trunc(((n1 * d2) - 1) / d1);
		if (n2 * dbest > nbest * d2) {
			dbest = d2;
			nbest = n2;
			lowerbound = dbest / ((n1 * dbest) - (d1 * nbest));
		}
		d2 -= 1;
	}

	const factor = gcd(nbest, dbest);
	nbest = Math.trunc(nbest / factor);
	dbest = Math.trunc(dbest / factor);

	return console.log(`Problem 71 solution is: ${nbest}`);
};

function gcd(a, b) {
	let x;
	let y;
	[x, y] = a > b ? [a, b] : [b, a];
	while (x % y !== 0) {
		[x, y] = [y, x % y];
	}
	return y;
}
