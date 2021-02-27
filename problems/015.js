
export default () => {
	// https://en.wikipedia.org/wiki/Lattice_path
	const a = Array.from({ length: 20 }, (_, ind) => ind + 21).reduce((i, j) => i * j);
	const b = Array.from({ length: 20 }, (_, ind) => ind + 1).reduce((i, j) => i * j);
	return `Problem 15 solution is: ${a / b}`;
};
