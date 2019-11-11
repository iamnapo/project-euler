const limit = 200;
let cost;
let path;

module.exports = () => {
	cost = new Array(limit + 1).fill(Number.MAX_SAFE_INTEGER);
	path = new Array(limit + 1).fill(0);
	let result = 0;

	backtrack(1, 0);

	for (let i = 1; i <= limit; i += 1) {
		result += cost[i];
	}

	return console.log(`Problem 122 solution is: ${result}`);
};

function backtrack(power, depth) {
	if (power > limit || depth > cost[power]) {
		return;
	}
	cost[power] = depth;
	path[depth] = power;
	for (let i = depth; i >= 0; i -= 1) {
		backtrack(power + path[i], depth + 1);
	}
}
