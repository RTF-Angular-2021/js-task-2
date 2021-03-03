const {add} = require("../task_1/index");
const {update} = require("../task_2/index");
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
function importFromCsv(phoneBook, csv) {
	let addedContactsNumber = 0;
	csv = csv.split("\n");
	
	for (let csvString of csv){
		let properties = csvString.split(";");
		let phone = properties[0];
		let name = properties[1];
		let email = properties[2];
		
		if (phone == undefined) break;

		if (add(phoneBook, phone, name, email)){
			addedContactsNumber++;
			continue;
		}
		if (update(phoneBook, phone, name, email)){
			addedContactsNumber++;
		}
	}
	
	return addedContactsNumber;
}

module.exports.importFromCsv = importFromCsv;
