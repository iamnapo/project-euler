

module.exports = () => {
	// https://en.wikipedia.org/wiki/Lattice_path
	const a = (n => [...Array(n).keys()])(41).slice(21).reduce((i, j) => i * j);
	const b = (n => [...Array(n).keys()])(21).slice(1).reduce((i, j) => i * j);
	return console.log(`Problem 15 solution is: ${a / b}`);
};
