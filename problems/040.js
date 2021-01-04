module.exports = () => {
	let fraction = "";
	for (let i = 0; i < 1_000_001; i += 1) {
		fraction += i;
	}
	const result = Number.parseInt(fraction[1], 10) * Number.parseInt(fraction[10], 10) * Number.parseInt(fraction[100], 10) * Number.parseInt(fraction[1000], 10) * Number.parseInt(fraction[1e04], 10) * Number.parseInt(fraction[1e05], 10) * Number.parseInt(fraction[1e06], 10);
	return console.log(`Problem 39 solution is: ${result}`);
};
