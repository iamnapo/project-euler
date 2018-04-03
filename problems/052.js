module.exports = () => {
	for (let i = 1; ; i += 1) {
		if (sameDigits(i.toString(), (2 * i).toString())) {
			if (sameDigits(i.toString(), (3 * i).toString())) {
				if (sameDigits(i.toString(), (4 * i).toString())) {
					if (sameDigits(i.toString(), (5 * i).toString())) {
						if (sameDigits(i.toString(), (6 * i).toString())) {
							return console.log(`Problem 52 solution is: ${i}`);
						}
					}
				}
			}
		}
	}
};

function sameDigits(a, b) {
	for (const d of a) {
		if (b.indexOf(d) < 0) {
			return false;
		}
	}
	for (const d of b) {
		if (a.indexOf(d) < 0) {
			return false;
		}
	}
	return a.length === b.length;
}
