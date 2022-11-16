export function cleanRepeat<T>(array: T[]): T[] {
	const dataStringify = array.map(item => JSON.stringify(item));
	const dataSet = new Set(dataStringify);
	const newData = [...dataSet].map(item => JSON.parse(item));
	return [...newData];
}
