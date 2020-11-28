const numberOfDroids = prompt(`Введите число дроидов, которое желаете приобрести`);
const credits = 23580;
const pricePerDroid = 3000;
const totalPrice = numberOfDroids * pricePerDroid;
const creditsBalance = credits - totalPrice;
let message;
if (numberOfDroids === null) {
    console.log(`Отменено пользователем!`);
} else if (totalPrice > credits) {
    console.log(`Недостаточно средств на счету!`);    
} else {
    alert(`Вы купили ${numberOfDroids} дроидов, на счету осталось ${creditsBalance} кредитов.`);
}
