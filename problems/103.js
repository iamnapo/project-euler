export default () => {
	let v = [1];
	for (let i = 0; i < 6; i += 1) {
		v = next(v);
	}
	return `Problem 103 solution is: ${v.map((el) => el.toString()).join("")}`;
};

function next(v) {
	const l = Math.trunc(v.length / 2);
	const d = distance(v);
	const o1 = [];
	const o2 = [];

	o1.push(v[l]);
	for (let i = 0; i < v.length; i += 1) {
		o1.push(v[i] + v[l]);
	}
	if (v.length === 1) {
		return o1;
	}

	d.reverse();

	o2.push(v[l], v[l] + d.reduce((a, b) => a + b, 0));
	for (const [i, element] of d.entries()) {
		o2.push(o2[1 + i] + element);
	}

	return (o1.reduce((a, b) => a + b, 0) <= o2.reduce((a, b) => a + b, 0)) ? o1 : o2;
}

function distance(v) {
	const r = [];
	for (let i = 1; i < v.length; i += 1) {
		r.push(v[i] - v[i - 1]);
	}
	return r;
}
