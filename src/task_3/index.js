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

String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

function find(phoneBook, query) {
	const all = '*';
	if (query === all)
	{
		let result = [];
		phoneBook.forEach(element => {
			let parsed = element.phone.split("-").join("");
			parsed = parsed.splice(2,0,"(").splice(6,0,")");
			parsed = parsed.splice(2,0," ").splice(8,0," ");
			parsed = parsed.splice(12,0,"-").splice(15,0,"-");
			
			let info = `${element.name} ${parsed}`;
			if (typeof element.email != 'undefined') info += ` ${element.email}`;
			result.push(info);
		});
		return result.sort();
	}

	let result = [];
	phoneBook.forEach(element => {
		let parsed = element.phone.split("-").join("");
			parsed = parsed.splice(2,0,"(");
			parsed = parsed.splice(6,0,")");
			parsed = parsed.splice(2,0," ");
			parsed = parsed.splice(8,0," ");
			parsed = parsed.splice(12,0,"-");
			parsed = parsed.splice(15,0,"-");
			
			let info = `${element.name} ${parsed}`;
			if (element.email) info += ` ${element.email}`;
		if (info.includes(query))
			result.push(info);
	});
	return result.sort();
}

module.exports.find = find;
