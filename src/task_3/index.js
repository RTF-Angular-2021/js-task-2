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
	if (query !== "*" && query !== "") {
		let regexpQuery = new RegExp('(' + query.replace(/[\-+]/g, '') + '[\w\n]*)', 'i');
		return findAllMatchedObjectInBook(phoneBook, regexpQuery).map((item) => {
			return createStrFromObj(item);
		})
	} else if (query === "") {
		false;
	} else {
		return phoneBook.map((item) => {
			return createStrFromObj(item);
		})
	}
}

function modifyPhone(phone) {
	phone = phone.replace(/-/g, '')
	let lenPhone = phone.length;
	let tt = phone.split('');
	if (lenPhone == 12) {
		tt.splice(2, "", " (");
		tt.splice(6, "", ") ");
		tt.splice(10, "", "-");
		tt.splice(13, "", "-");
	}
	return tt.join('')
}

const findAllMatchedObjectInBook = (book, reg) => {
	return book.filter(function (item) {
		for (let key in item) {
			let res = item[key].replace(/-/g, '');
			if (reg.test(res)) {
				return item
			}
		}
	})
}

const createStrFromObj = (i) => {
	let str = "";
	for (let key in i) {
		if (key == "phone") {
			str += modifyPhone(i[key]) + ' ';
		} else {
			str += i[key] + ' ';
		}
	}
	return str.replace(/\s+$/, '');
}

module.exports.find = find;
