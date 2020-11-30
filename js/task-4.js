const numberOfDroids = prompt(`Введите число дроидов, которое желаете приобрести`);
const credits = 23580;
const pricePerDroid = 3000;

if (numberOfDroids === null) {
    console.log(`Отменено пользователем!`);
} else {
    const totalPrice = numberOfDroids * pricePerDroid;
    if (totalPrice > credits) {
        console.log(`Недостаточно средств на счету!`);
    }
    else {
        const creditsBalance = credits - totalPrice;
        alert(`Вы купили ${numberOfDroids} дроидов, на счету осталось ${creditsBalance} кредитов.`);
    }
}