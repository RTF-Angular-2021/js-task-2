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
	let total = [], result = [];
	let newStr, num
	const firstVariant = /\+7\d{3}\d{3}\d{2}\d{2}/;
	const secondVariant = /\+7-\d{3}-\d{3}-\d{2}-\d{2}/;
	const email = /[a-z]/;
	const number = /[0-9]/;

	for (let i = 0; i < phoneBook.length; i++) {
		if (firstVariant.test(phoneBook[i].phone) || secondVariant.test(phoneBook[i].phone)) {
			num = phoneBook[i].phone.replace(/-/g, '').split('');
			for (let i = 0; i < num.length; i++) {
				newStr = `+7 (${num.slice(2,5)}) ${num.slice(5,8)}-${num.slice(8,10)}-${num.slice(10,12)}`.replace(/,/g, '');
			}
			if (phoneBook[i].email) {
				total.push([phoneBook[i].name, newStr, phoneBook[i].email]);
			} else total.push([phoneBook[i].name, newStr]);
		}		
		total.sort();
	}

	if (query === '*') {
		for (let j = 0; j < total.length; j++) {
			result.push(total[j].join(' ')); 
		}
		return result;
	} else if (email.test(query) || firstVariant.test(query) || secondVariant.test(query) || number.test(query)) {
		for (let j = 0; j < total.length; j++) {
			result.push(total[j].join(' ')); 
		}
		let some = result.filter(element => element.includes(query));
		return some;
	}
}

module.exports.find = find;
