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

const { parsePhoneNumberNoDash, parsePhoneNumberDash } = require('../../src/utils/index');


function find(phoneBook, query) {
	if (query == "") {
		return []
	}

	if (query === "*") {
		return phoneBook.map(note => displayNote(note))
	}
	
	const foundNotes = phoneBook.filter(note => 
		parsePhoneNumberDash(note.phone).includes(query) 
		|| parsePhoneNumberNoDash(note.phone).includes(query)
		|| note.name.includes(query) 
		|| (note.email != null && note.email.includes(query)));
	
	foundNotes.sort(function (note1, note2) {
		if (note1.name === note2.name) return 0;
		if (note1.name >= note2.name) return 1;
		if (note1.name <= note2.name) return -1;
	})

	return foundNotes.map(note => displayNote(note))
}

function displayParsedPhoneNumber(phone) {
	return `+7 (${phone.substr(2,3)}) ${phone.substr(5,3)}-${phone.substr(8,2)}-${phone.substr(10,2)}`
}

function displayNote(note) {
	return `${note.name} ${displayParsedPhoneNumber(parsePhoneNumberNoDash(note.phone))}${note.email !== undefined ? " " + note.email : ""}`
}


module.exports.find = find;
