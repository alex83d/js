//#3 Анализ строки

const path = "/users/download/index.html";

function isHtml() {
    let res = path.slice(-5).includes('.html');
    return res;
}

console.log(isHtml(path));