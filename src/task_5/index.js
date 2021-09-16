/** Задача 2 - Функция importFromCsv
Требуется написать функцию importFromCsv, которая
принимает: 
	1) Текущее состояние телефонной книги
	2) Строку в формате csv
требуется:
в текущем состоянии телефонной книги обновить записи или добавить их в зависимости от того,
 существуют они или нет
возвращает:
	Число обновленных и добавленных записей
@param {Array<{ phone: string, name: string, email?: string }>} phoneBook - Текущее состояние телефонной книги
@param {string} csv Csv строка, описывающая таблицу, формата name;phone;email
@returns {number} Количество добавленных и обновленных записей
 */

const typeOfPhone1 = new RegExp("^\\+7\\-\\d{3}\\-\\d{3}\\-\\d{2}\\-\\d{2}$");
const typeOfPhone2 = new RegExp("^\\+7\\d{10}$");
const typeOfEmail   = new RegExp("^\\w+@\\w+\\.\\w+$");
const typeOfEmail2   = new RegExp("\\w+\\@\\w+\\.\\w+");
const partOfExpression = new RegExp('\\d{3}-?\\d{2}'); // 555-35  55535
const typeOfNumber = new RegExp('\\w+\\@\\w+\\.\\w+\\+\\d\\-?\\d{3}\\-?\\-?\\d{3}\\-?\\d{2}\\-?\\d{2}');
const russianWords = new RegExp('\W+/gm');

function importFromCsv(phoneBook, csv) {
	let finalArr = []
	let arrayCsv = csv.split('\n');

	arrayCsv.forEach(item => {
		let splitAr = item.split(';');

		let objItem = {}
		splitAr.forEach(item => {

			if (typeOfPhone1.test(item) || typeOfPhone2.test(item)) {
				objItem.phone = item;
			}

			if (item.match(/^\W+$/)) {
				objItem.name = item;
			}

			if (typeOfEmail2.test(item)) {
				objItem.email = item;
			}
		})

		finalArr.push(objItem)
	});

	finalArr.forEach(item=> {
		if (item.phone && item.name && item.email) {
			phoneBook.push(item);
		}
		console.log(phoneBook)
	})
	return phoneBook.length
}

module.exports.importFromCsv = importFromCsv;
