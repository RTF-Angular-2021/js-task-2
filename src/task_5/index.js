/** Задача 2 - Функция importFromCsv
Требуется написать функцию importFromCsv, которая
принимает: 
	1) Текущее состояние телефонной книги
	2) Строку в формате csv
требуется:
в текущем состоянии телефонной книги обновить записи или добавить их в зависимости от того, существуют они или нет
возвращает:
	Число обновленных и добавленных записей
@param {Array<{ phone: string, name: string, email?: string }>} phoneBook - Текущее состояние телефонной книги
@param {string} csv Csv строка, описывающая таблицу, формата name;phone;email
@returns {number} Количество добавленных и обновленных записей
 */

const { parsePhoneNumberNoDash } = require('../../src/utils/index');
 
const DASHES_PHONE_REGEX = /^[+]7-\d{3}-\d{3}-\d{2}-\d{2}$/;
const NO_DASHES_PHONE_REGEX = /^[+]7\d{10}$/;


function importFromCsv(phoneBook, csv) {
	let modifiedNotes = 0;
	const notes = getNotesFromCsv(csv);

	for (const note of notes) {
		if (tryUpdateNote(phoneBook, note)) {
			modifiedNotes++;
		} else {
			phoneBook.push(note);
			modifiedNotes++;
		}
	}

	return modifiedNotes;
}

function getNotesFromCsv(csv) {
	return csv.split('\n')
			  .map(line => line.split(";"))
			  .filter(line => isPhoneNumber(line[0]) && line.length > 1)
			  .map(line => ({phone: parsePhoneNumberNoDash(line[0]), name: line[1], email: line[2]}))
}

function isPhoneNumber(phone) {
	return phone.match(DASHES_PHONE_REGEX) !== null || phone.match(NO_DASHES_PHONE_REGEX) !== null
}

function areSamePhoneNumbers(phone1, phone2) {
	return parsePhoneNumberNoDash(phone1) === parsePhoneNumberNoDash(phone2);
}

function tryUpdateNote(phoneBook, note) {
	for (let i = 0; i < phoneBook.length; i++) {
		if (areSamePhoneNumbers(phoneBook[i].phone, note.phone)) {
			phoneBook[i] = note;
		}
	}
	return false;
}


module.exports.importFromCsv = importFromCsv;
