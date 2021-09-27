const { Contact } = require('../../src/task_1/index');
/** Задача 2 - Функция find
Требуется написать функцию find, которая
принимает: 
	1) Текущее состояние телефонной книги
	2) Запрос для поиска
требуется:
в текущем состоянии телефонной книги найти все записи, которые удовлетворяют требованиям
	1) Одно из полей name, email содержит подстроку поиска
	2) Поиск по полю phone проводится по следующим правилам:
		2.1) При запросе +7-800-555-35-35 должны отображаться записи с номерами +7-800-555-35-35 и +78005553535
		2.2) При запросе +78005553535 должны отображаться записи с номерами +78005553535 и +7-800-555-35-35
	2) Пустой запрос не должен ничего находить
	3) Запрос «*» находит все записи
возвращает:
	Отсортированный по полю name массив строк в формате name, phone, email
	Поле phone должно быть отформатировано в виде +7 (999) 111-22-33
@param {Array<{ phone: string, name: string, email?: string }>} phoneBook - Текущее состояние телефонной книги
@param {string} query Строка для поиска
@returns {Array<string>} Результаты поиска
 */
function find(phoneBook, query) {

	if (typeof query != 'string' || query.length == 0) {
		return [];
	}

	let result = [];
	if (query == '*') {
		for (const contact of phoneBook) {
			result.push(contact.toString());
		}
	}
	else {
		for (const contact of phoneBook) {
			if (contact.name.includes(query) ||
				contact.email.includes(query)  ||
				 	(
					 	(tmp = Contact.getStrippedPhone(query)).length > 0 &&
					  	contact.phone.includes(tmp)
						)
					){
				result.push(contact.toString());
			}
		}
	}

	result.sort((a, b) => {
		let nameA = a.split(' ')[0];
		let nameB = b.split(' ')[0];
		if (nameA == nameB) {
			return 0;
		}
		return nameA > nameB ? 1 : -1;
	});

	return result;
}

module.exports.find = find;
