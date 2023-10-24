const fs = require("fs");

let Res = {
    "Имя": "Рак Виталий",
    "Возраст": "19",
    "Предметы": {
        "C#": [8, 8, 8, 8],
        "JS": [9, 9, 9, 9]
    }
}

let ConvertJson = JSON.stringify(Res);

fs.writeFile("Task1.json", ConvertJson, function (error) {

    if (error) throw error; // если возникла ошибка
    console.log("Асинхронная запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync("Task1.json", "utf8");
    console.log(data);  // выводим считанные данные
});


const student1 = { name: "Иван", age: 20, major: "Информатика" };
const student2 = { name: "Мария", age: 22, major: "Экономика" };
const student3 = { name: "Петр", age: 21, major: "История" };

console.log("Студент 1:", student1);
console.log("Студент 2:", student2);
console.log("Студент 3:", student3);




const users = [
    { name: "Иван", age: 25 },
    { name: "Мария", age: 18 },
    { name: "Петр", age: 30 },
    { name: "Анна", age: 16 },
];

function filterUsersByAge(users, age) {
    return users.filter(user => user.age > age);
}

const adults = filterUsersByAge(users, 18);

console.log("Пользователи старше 18 лет:", adults);




const book = {
    title: "Пример книги",
    author: "Иван Иванов",
    edition: {
        year: 2023,
        publisher: "Издательство ABC",
    },
};

const author = book.author;
console.log("Автор книги:", author);





const person = {
    name: "Иван",
    age: 30,
    city: "Москва",
};


const jsonString = JSON.stringify(person);

console.log("JSON строка:", jsonString);


const parsedPerson = JSON.parse(jsonString);

console.log("JavaScript объект после десериализации:", parsedPerson);

