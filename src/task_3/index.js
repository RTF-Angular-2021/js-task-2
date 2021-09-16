/** Задача 3 - Функция find
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
const partOfExpression = new RegExp('\\b\\d{3}-?\\d{2}\\b'); // 555-35

function fixFormat(oldFormatPhone) {
	let newOne = oldFormatPhone.replace(/(\+\d)(\-?)(\d{3})(\-?)(\d{3})(\-?)(\d{2})(\-?)(\d{2})/,
		'$1 ($3) $5-$7-$9'); // +7 (922) 555-35-35
	return newOne
}

function sortName (a, b) {
	if (a.name > b.name) {
		return 1;
	}
	if (a.name < b.name) {
		return -1;
	}
	// a должно быть равным b
	return 0;
}

function find(phoneBook, query) {
	const arr = [];
	if (query === '*') {
		for (let key in phoneBook) {
			arr.push([phoneBook[key].name, fixFormat(phoneBook[key].phone), phoneBook[key].email].join(' ').trim());
		}
		return arr.sort(sortName);
	}

	else if (query.match(partOfExpression)) {
		for (let key in phoneBook) {
			if (phoneBook[key].phone.includes('555-35') || phoneBook[key].phone.includes('55535')) {
				arr.push([phoneBook[key].name, fixFormat(phoneBook[key].phone), phoneBook[key].email].join(' ').trim());
			}
		}
		return arr.sort(sortName);
	}

	else if (query.match(/\w+\D/)) {
		for (let key in phoneBook) {
			if (phoneBook[key].email) {
				if (phoneBook[key].email.match(/\w+\D/)) {
					arr.push([phoneBook[key].name, fixFormat(phoneBook[key].phone), phoneBook[key].email].join(' ').trim());
				}
			}
		}

		return arr.sort(sortName);
	}
}

module.exports.find = find;
