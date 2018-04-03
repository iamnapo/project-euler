module.exports = () => {
	let a = [1];
	let b = [1];
	for (let count = 2; ;) {
		[a, b] = [b, add(a, b)];
		count += 1;
		if (b.length === 1000) {
			return console.log(`Problem 25 solution is: ${count}`);
		}
	}
};

function add(a, b) {
	while (a.length < b.length) {
a.unshift(0);
	}
	while (a.length > b.length) {
b.unshift(0);
	}
	let c = 0;
	const sum = [];
	for (let i = a.length - 1; i > -1; i -= 1) {
		let s = a[i] + b[i] + c;
		if (s > 9) {
			s -= 10;
			c = 1;
		} else {
			c = 0;
		}
		sum.unshift(s);
	}
	if (c) {
sum.unshift(c);
	}
	return sum;
}
