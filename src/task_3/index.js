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
	for (let entry of phoneBook){
		let email = entry.email? ' ' + entry.email : '';
		if (query === '*'){
			let phone = formatNumber(entry.phone, '*');
			result.push(`${entry.name} ${phone}${email}`);
		} else {
			let phonePair = formatNumber(entry.phone, 'f');
			let strEntryF1 = `${entry.name} ${phonePair[0]}${email}`;
			let strEntryF2 = `${entry.name} ${phonePair[1]}${email}`;
			if (strEntryF1.includes(query) || strEntryF2.includes(query)){
				let phone = formatNumber(entry.phone, '*');
				result.push(`${entry.name} ${phone}${email}`);
			}
		}
	}
	return result.sort();
}

function formatNumber(phone, key){
	let arr = phone.split('');
	if (key === "*"){
		let result = `+${arr[0]} (${arr[1] + arr[2] + arr[3]})`; 
		result += ` ${arr[4] + arr[5] + arr[6]}-${arr[7] + arr[8]}-${arr[9] + arr[10]}`;
		return result;
	} else {
		let phoneF1 = `+${arr[0]}-${arr[1] + arr[2] + arr[3]}-`;
		phoneF1 += `${arr[4] + arr[5] + arr[6]}-${arr[7] + arr[8]}-${arr[9] + arr[10]}`;
		let phoneF2 = `+${phone}`;
		return [phoneF1, phoneF2];
	}
}

module.exports.find = find;
module.exports.formatNumber = formatNumber;
