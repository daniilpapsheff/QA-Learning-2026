const testData: number[] = [10, 20, 30];

testData.push(40);
console.log(testData);

const safeData: number[] = [ ...testData ];

safeData.push(50);

console.log(testData);
console.log(safeData);