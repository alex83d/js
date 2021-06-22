//#2 Выборка объекта

const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500},
    {"name":"Eva","salary":3500},
    {"name":"Piter","salary":1000},
    {"name":"Michael","salary":3000}];

    function getWorthyWorkers(arr) {
       
       let salary = arr.filter(item => item.salary >= 1000 && item.salary <= 3000);
       let res = salary.map(item => item.name);
       return res
    }
  console.log(getWorthyWorkers(workers));