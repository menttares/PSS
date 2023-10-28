

function task1() {
    this.name = "Виталий";
    this.sout = function () {
        alert(this.name)
    }
}

function task2() {
    const myAwesomeArray = [
        { id: 1, name: "Кирилл" },
        { id: 2, name: "Миша" },
        { id: 3, name: "Антон" },
        { id: 4, name: "Саша" },
        { id: 5, name: "Женя" },
        { id: 6, name: "Андрей" },
        { id: 7, name: "Виктория" },
        { id: 8, name: "Валерий" },
        { id: 9, name: "Григорий" },
    ];

    return myAwesomeArray;
}



const namesToCheck = ["Саша", "Артур", "Валерий", "Давид"];

function task3(arr, names) {
    const foundNames = arr.filter((val) => names.includes(val.name));

    names.forEach((name) => {
        if (foundNames.some((val) => val.name === name)) {
            console.log(`Имя "${name}" найдено!`);
        } else {
            console.log(`Имя "${name}" не найдено в массиве.`);
        }
    });
}


let fu = new task1();
fu.sout();

task3(task2(), namesToCheck);