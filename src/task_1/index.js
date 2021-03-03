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
	if (phone.search(/^\+\d-\d{3}-\d{3}-\d{2}-\d{2}$|^\+\d{11}$/) == -1
		|| !name) return false;
	
	for (let contact of phoneBook){
        if (contact.phone.replaceAll("-", "") == phone.replaceAll("-", "")){
			return false;
		}
	}

	if (email != undefined){
		phoneBook.push({phone: phone, name: name, email: email});
	} else{
		phoneBook.push({phone: phone, name: name});
	}
    
	return true;
}

module.exports.add = add;
