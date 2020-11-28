const adminInput = prompt(`Введите пароль`);
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
 
if (adminInput === null) {
    message = `Отменено пользователем!`;    
} else if (adminInput === ADMIN_PASSWORD) {
    message = `Добро пожаловать!`;
} else {
    message = `Доступ запрещен, неверный пароль!`;
}
alert(message);