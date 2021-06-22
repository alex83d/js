//#1 Фильтрация строки

const string = "Привет! Как дела?";

function getVowels(string) {
    let leters = (/[аиеёоуыэюя]/gi);
    let result = string.match(leters);
     return (result.join(""));
    
}

console.log(getVowels(string));