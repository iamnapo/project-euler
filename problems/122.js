const limit = 200;
let cost;
let path;

export default () => {
	cost = Array.from({ length: limit + 1 }, () => Number.MAX_SAFE_INTEGER);
	path = Array.from({ length: limit + 1 }, () => 0);
	let result = 0;

	backtrack(1, 0);

	for (let i = 1; i <= limit; i += 1) {
		result += cost[i];
	}

	return `Problem 122 solution is: ${result}`;
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
