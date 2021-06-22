//#1 Фильтрация массива

const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];
const isEven = num => {
    return num % 2 == 0
};

function filterArray() {
    return mixedArray.filter(isEven)
};

console.log(filterArray(mixedArray, isEven));