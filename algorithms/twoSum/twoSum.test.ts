import { describe, expect, test } from "vitest";
import { twoSumNaive, twoSumWithHashtable, twoSumWithSortedInput } from ".";

describe("two sum works fine", () => {
	const target = 10;
	const input = [3, 4, -1, 11, 9, 8, -4];

	test("twosum naive implementation", () => {
		const result = twoSumNaive(input, target);
		expect(result).toEqual([-1, 11]);
	});

	test("twosum with hashtable implementation", () => {
		const result = twoSumWithHashtable(input, target);
		expect(result).toEqual([-1, 11]);
	});

	test("twosum with sorted input", () => {
		const result = twoSumWithSortedInput(input, target);
		expect(result).toEqual([-1, 11]);
	});
});
