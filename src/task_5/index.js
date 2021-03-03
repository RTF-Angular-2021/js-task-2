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
const { add } = require("../task_1");
const { update } = require("../task_2");
const { find } = require("../task_3");
function importFromCsv(phoneBook, csv) 
{
	let counter = 0;
	const csvStr = csv.split('\n');

	for (let csvString of csvStr)
	{
		let Arr = csvString.split(';');
		const phone = Arr[0];
		const name = Arr[1];
		const email = Arr[2];

		if (find(phoneBook, phone).length > 0)
		{
			if (update(phoneBook, phone, name, email))
			{
				counter++;
			}
		}
		if (add(phoneBook, phone, name, email))
		{
			counter++;
		}
	}
	return counter;
}

module.exports.importFromCsv = importFromCsv;

