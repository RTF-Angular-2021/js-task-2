/** Задача 1 - Функция add
Требуется написать функцию add, которая
принимает: 
	1) Текущее состояние телефонной книги
	2) Номер телефон
	3) Имя
	4) Электронную почту,
требуется:
в текущее состояние телефонной книги добавить новый контакт по правилам
	1) Телефоны принимаются только в форматах +7-999-111-22-33 или +79991112233
	2) Не добавляется уже существующая запись
	3) Не добавляется запись без имени
возвращает:
	true - если добавление прошло успешно
	false - если запись не создалась или не добавилась в книгу
@param {Array<{ phone: string, name: string, email?: string }>} phoneBook - Текущее состояние телефонной книги
@param {string} phone Номер телефона
@param {string} name Имя
@param {string} email Электронная почта
@returns {boolean} Результат добавления
 */
function add(phoneBook, phone, name, email) {
	if (name !== '' && name !== undefined && isPhoneCorrect(phone)){
		phone = phone.match(/\d/g).join('');
		let searchEntry = {
			phone: phone,
			name: name,
			email: email
		};

		if (!isInPhoneBook(phoneBook, phone)){
			phoneBook.push(searchEntry);
			return true;
		}
	}
	return false;
}

function isInPhoneBook(phoneBook, searchPhone){
	for (let entry of phoneBook){
		if (entry.phone === searchPhone){
			return true;
		}
	}
	return false;
}

function isPhoneCorrect(phone){
	let regex = /^\+7-\d\d\d-\d\d\d-\d\d-\d\d$/; 
	let regex1 = /^\+7\d\d\d\d\d\d\d\d\d\d$/;
	return regex.test(phone) || regex1.test(phone);
}

module.exports.add = add;
module.exports.isPhoneCorrect = isPhoneCorrect;
