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
	let result = [];
	if (!query) return result;
	if (query == "*") return extractAllContacts(phoneBook);

    query = query.replaceAll("-", "");
	for (let contact of phoneBook){
		for (let property in contact){
			if (contact[property].search(query) != -1
				|| (property == "phone" 
				&& contact[property].replaceAll("-", "").search(query) != -1)){
					result.push(formatContact(contact));
					break;
			}
		}
	}

	return result;
}

function extractAllContacts(phoneBook) {
	let result = [];
	for (let contact of phoneBook){
		result.push(formatContact(contact));
	}

	return result;
}

function formatContact(contact) {
	let phone = contact.phone.replaceAll("-", "");
	let formattedPhone = `${phone.slice(0, 2)} ` +
    `(${phone.slice(2, 5)}) ` +
    `${phone.slice(5, 8)}-${phone.slice(8, 10)}-${phone.slice(10)}`;

	let formattedContact = `${contact.name} ${formattedPhone}`;
	if (contact.email != undefined) formattedContact += ` ${contact.email}`;

	return formattedContact;
}

module.exports.find = find;
