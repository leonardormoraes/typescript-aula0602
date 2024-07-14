export interface CountList {
	[key: string]: number;
}

export default function countBy(arr: string[] | number[]) {
	return arr.reduce((acc: CountList, item) => {
		acc[item] ? (acc[item] += 1) : (acc[item] = 1);

		return acc;
	}, {});
}
