export const twoSumNaive = (
	input: Array<number>,
	target: number,
): [number, number] => {
	let result: [number, number] = [0, 0];
	for (let i = 0; i < input.length; i++) {
		for (let j = i; j < input.length; j++) {
			if (input[i] + input[j] === target) {
				result = [input[i], input[j]];
			}
		}
	}
	return result;
};

export const twoSumWithHashtable = (
	input: Array<number>,
	target: number,
): [number, number] => {
	let result: [number, number] = [0, 0];
	const hashtable: Record<string, boolean> = {};

	for (let i = 0; i < input.length; i++) {
		let current = input[i];
		if (target - current in hashtable) result = [target - current, current];
		else hashtable[current] = true;
	}

	return result;
};

export const twoSumWithSortedInput = (
	input: Array<number>,
	target: number,
): [number, number] => {
	let result: [number, number] = [0, 0];
	const sorted = [...input].sort((a, b) => a - b);

	let L = 0;
	let R = sorted.length - 1;

	while (L < R) {
		const curr = sorted[L] + sorted[R];
		if (curr === target) {
			result = [sorted[L], sorted[R]];
			break;
		}
		if (curr < target) L += 1;
		if (curr > target) R -= 1;
	}

	return result;
};
