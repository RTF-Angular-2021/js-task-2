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
const regexPhoneNumber = /^\+7[\- ](\d{3}[\- ])(\d{3}[\- ])(\d{2}[\- ])(\d{2})$/im;
const regexp = /^\+7[0-9]{10}$/im;

function importFromCsv(phoneBook, csv) {

	let counter = 0;
	let arr = csv.split("\n");
	let csvArray = strToArrays(arr).map(el => {
		if (el.length <= 3) {
			return {
				name: el[1],
				phone: el[0],
				email: el[2]
			}
		}
	});

	const repeatArray = csvArray.filter(item1 => phoneBook.some(item2 => item1.phone.replace(/-/g, '') === item2.phone.replace(/-/g, '')));

	const uniqArray = csvArray.filter(e => phoneBook.findIndex(i => i.phone.replace(/-/g, '') == e.phone.replace(/-/g, '')) === -1);

	uniqArray.forEach(item => {
		if (regexPhone(item.phone) && item.name != undefined) {
			if (item.email == undefined) {
				delete item.email;
				phoneBook.push(item);
				counter++;
			} else {
				phoneBook.push(item);
				counter++;
			}
		}
	});

	repeatArray.forEach(item1 => {
		let obj = phoneBook.find(item2 => item2.phone.replace(/-/g, '') == item1.phone.replace(/-/g, ''))
		obj.email = item1.email;
		obj.name = item1.name;
		counter++;
	});

	return counter;

}

const strToArrays = (arr) => {
	return arr.map(item => item.replace(/;/g, ' ').split(" "));
}

function regexPhone(str) {
	if (str.match(regexp) || str.match(regexPhoneNumber)) {
		return true;
	}
}

module.exports.importFromCsv = importFromCsv;
