const { Contact } = require('../../src/task_1/index');

/** Задача 2 - Функция update
Требуется написать функцию update, которая
принимает: 
	1) Текущее состояние телефонной книги
	2) Номер телефонa
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
function update(phoneBook, phone, name, email) {
	if(!Contact.isNameValid(name) || !Contact.isPhoneValid(phone)){
		return false;
	}
	let updated = phoneBook.find(contact => contact.phone == Contact.getStrippedPhone(phone));
	if(typeof updated === 'undefined'){
		return false;
	}
	updated.name = name;
	updated.email = email;
	return true;
}

module.exports.update = update;
