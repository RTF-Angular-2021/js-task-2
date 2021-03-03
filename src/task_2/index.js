/** Задача 2 - Функция update
Требуется написать функцию update, которая
принимает: 
	1) Текущее состояние телефонной книги
	2) Номер телефон
	3) Имя
	4) Электронную почту,
требуется:
в текущем состояние телефонной книги обновить контакт по номеру телефона
	1) Электронную почту можно стереть, а имя нет
	2) Правила валидации полей такое же, как и при добавлении
возвращает:
	true - если обновление прошло успешно
	false - если запись не обновилась
@param {Array<{ phone: string, name: string, email?: string }>} phoneBook - Текущее состояние телефонной книги
@param {string} phone Номер телефона
@param {string} name Имя
@param {string} email Электронная почта
@returns {boolean} Результат обновления
 */

const {isCorrectData} = require('../../src/task_1/index')

function update(phoneBook, phone, name, email) {
	if (isCorrectData(phone,name,email)) {
	    newPhone = phone.replace(/-/g,"");
		for (let obj in phoneBook) {
			if (phoneBook[obj].phone === newPhone) {
				phoneBook[obj].name = name;
				phoneBook[obj].email = email;
				return true;
			}
		}
	}
	return false;
}


module.exports.update = update;
