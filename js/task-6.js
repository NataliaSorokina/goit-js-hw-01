let input;
let total = 0;

while (true) {
    input = prompt(`Введите число`);

    if (input === null) {
        console.log(`Отменено пользователем!`);
        break;
    }
    input = Number(input);
    const notANumber = Number.isNaN(input);
    if (notANumber) {
        console.log(`Введённые данные не являются числом, текущая итерация пропускается`);
        continue;
    }
    total += input;
} 
alert(`Общая сумма чисел равна ${total}`);

