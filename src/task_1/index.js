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
function add(phoneBook, phone, name, email){
	const correctContact2 = correctContact(phone);
	if (!name || correctContact2 === null){
		return false;
	}

	for (let item of phoneBook){
		if (item.phone === correctContact2 && item !== undefined){
			return false;
		}
	}
	phoneBook.push({ phone: correctContact2, name, email });
	return true;
}
function correctContact(phone){
	if (phone.match(/\+\d{11}/) !== null){
		return phone;
	} 
	else if (phone.match(/\+\d-\d{3}-\d{3}-\d{2}-\d{2}/) !== null){
		return phone.replace(/-/g, '');
	} 
	else{
		return null;
	}
}

module.exports.add = add;
