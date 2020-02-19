const p = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

module.exports = () => {
	let result = "";
	for (;;) {
		if (!nextPerm()) {
			break;
		}
		if (checkResult()) {
			const candidate = `${p[0]}${p[1]}${p[2]}${p[3]}${p[2]}${p[4]}${p[5]}${p[4]}${p[6]}${p[7]}${p[6]}${p[8]}${p[9]}${p[8]}${p[1]}`;
			if (candidate > result) {
				result = candidate;
			}
		}
	}
	return console.log(`Problem 68 solution is: ${result}`);
};

function nextPerm() {
	const N = p.length;
	let i = N - 1;
	while (p[i - 1] >= p[i]) {
		i -= 1;
		if (i < 1) {
			return false;
		}
	}
	let j = N;
	while (p[j - 1] <= p[i - 1]) {
		j -= 1;
	}
	[p[i - 1], p[j - 1]] = [p[j - 1], p[i - 1]];
	i += 1;
	j = N;
	while (i < j) {
		[p[i - 1], p[j - 1]] = [p[j - 1], p[i - 1]];
		i += 1;
		j -= 1;
	}
	return true;
}

function checkResult() {
	if ([p[1], p[2], p[4], p[6], p[8]].includes(10)) {
		return false;
	}
	if (p[0] > Math.min(...[p[3], p[5], p[7], p[9]])) {
		return false;
	}
	if (p[0] + p[1] + p[2] !== p[3] + p[2] + p[4]) {
		return false;
	}
	if (p[0] + p[1] + p[2] !== p[5] + p[4] + p[6]) {
		return false;
	}
	if (p[0] + p[1] + p[2] !== p[7] + p[6] + p[8]) {
		return false;
	}
	if (p[0] + p[1] + p[2] !== p[9] + p[8] + p[1]) {
		return false;
	}
	return true;
}
