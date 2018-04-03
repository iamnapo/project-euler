module.exports = () => {
	let result = {};
	let n = 345;
	let found = false;
	const cubes = [];

	while (!found) {
		n += 1;
		const smallestPerm = makeSmallestPerm(n ** 3);
		if (!cubes[smallestPerm]) {
			cubes[smallestPerm] = {N: n, Perms: 0};
		}
		cubes[smallestPerm].Perms += 1;
		if (cubes[smallestPerm].Perms === 5) {
			found = true;
			result = cubes[smallestPerm];
		}
	}
	return console.log(`Problem 62 solution is: ${result.N ** 3}`);
};

function makeSmallestPerm(n) {
	let k = n;
	const digits = new Array(10).fill(0);
	let retVal = 0;

	while (k > 0) {
		digits[k % 10] += 1;
		k = Math.trunc(k / 10);
	}
	for (let i = 9; i > -1; i -= 1) {
		for (let j = 0; j < digits[i]; j += 1) {
			retVal = (retVal * 10) + i;
		}
	}
	return retVal;
}
