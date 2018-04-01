module.exports = () => {
	let n = 28433;
	for (let i = 0; i < 7830457; i += 1) n = (n * 2) % 1e10;
	return console.log(`Problem 97 solution is: ${n + 1}`);
};
