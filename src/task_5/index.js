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
const { add } = require('../../src/task_1/index');
const { isPhoneCorrect } = require('../../src/task_1/index');
const { update } = require('../../src/task_2/index');

function importFromCsv(phoneBook, csv) {
	let completeCmdNum = 0;
	let cmdArray = csv.split('\n');
	for (const cmd of cmdArray){
		const args = cmd.split(';');
		if (args.length < 4 && args.length > 1 && isPhoneCorrect(args[0])){
			const phone = args[0];
			const name = args[1];
			const email = args.length === 3? args[2] : '';
			if (add(phoneBook, phone, name, email) || update(phoneBook, phone, name, email)){
				completeCmdNum++;
			}
		}
	}
	return completeCmdNum;
}

module.exports.importFromCsv = importFromCsv;
