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

const { parsePhoneNumberNoDash } = require('../../src/utils/index');


function update(phoneBook, phone, name, email) {
	phone = parsePhoneNumberNoDash(phone);
	const note = phoneBook.find(note => parsePhoneNumberNoDash(note.phone) === phone);
	
	if (!note) {
		return false;
	}

	if (name) {
		note.name = name;
	}
	else { return false; }

	if (email) { note.email = email; }
	
	return true;
}


module.exports.update = update;
