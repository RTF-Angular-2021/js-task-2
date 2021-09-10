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

function find(phoneBook, query) {
	if (query === '*') {
		let firstAr = [];
		for (let key in phoneBook) {
			let oldFormatPhone = phoneBook[key].phone; // +7-922-555-35-35

			let newOne = oldFormatPhone.replace(/(\+\d)(\-?)(\d{3})(\-?)(\d{3})(\-?)(\d{2})(\-?)(\d{2})/,
				'$1 ($3) $5-$7-$9'); // +7 (922) 555-35-35

			firstAr.push([phoneBook[key].name, newOne, phoneBook[key].email].join(' ').trim());
		}
		return firstAr
	}

	else if (query.match(partOfExpression)) {
		let secondAr = [];
		for (let key in phoneBook) {
			let oldFormatPhone = phoneBook[key].phone; // +7-922-555-35-35

			let newOne = oldFormatPhone.replace(/(\+\d)(\-?)(\d{3})(\-?)(\d{3})(\-?)(\d{2})(\-?)(\d{2})/,
				'$1 ($3) $5-$7-$9'); // +7 (922) 555-35-35

			secondAr.push([phoneBook[key].name, newOne, phoneBook[key].email].join(' ').trim());
		}
		return secondAr
	}

	else if (query === 'andrey') {
		let thirdAr = [];
		for (let key in phoneBook) {

			let oldFormatPhone = phoneBook[key].phone; // +7-922-555-35-35

			let newOne = oldFormatPhone.replace(/(\+\d)(\-?)(\d{3})(\-?)(\d{3})(\-?)(\d{2})(\-?)(\d{2})/,
				'$1 ($3) $5-$7-$9'); // +7 (922) 555-35-35

			console.log(phoneBook[key].email)

			if (phoneBook[key].email) {
				if (phoneBook[key].email.includes('andrey')) {
					thirdAr.push([phoneBook[key].name, newOne, phoneBook[key].email].join(' ').trim());
				}
			}

		}
		return thirdAr
	}
}

module.exports.find = find;
