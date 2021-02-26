/** Задача 2 - Функция update
Требуется написать функцию update, которая
принимает: 
	1) Текущее состояние телефонной книги
	2) Номер телефон
	3) Имя
	4) Электронную почту,
требуется:
в текущем состояние телефонной книги обновить контакт по номеру телефона
	1) Электронную почту можно стереть, а имя нет
	2) Правила валидации полей такое же, как и при добавлении
возвращает:
	true - если обновление прошло успешно
	false - если запись не обновилась
@param {Array<{ phone: string, name: string, email?: string }>} phoneBook - Текущее состояние телефонной книги
@param {string} phone Номер телефона
@param {string} name Имя
@param {string} email Электронная почта
@returns {boolean} Результат обновления
 */

const getCorrectPhone = phone => 
	!phone.match(/\+7\-\d{3}\-\d{3}\-\d{2}-\d{2}/g) && !phone.match(/\+7\d{10}/g) || phone.match(/[a-z]/gi) 
		? null
		: phone.replace(/\D/g,'');

function update(phoneBook, phone, name, email) {
	let correctPhone = getCorrectPhone(phone);
	if(!correctPhone || !name || phoneBook.filter(value => value.phone === correctPhone).length === 0) return false;
	phoneBook.forEach(value => {
		if(value.phone === correctPhone){
			value.name = name;
			value.email = email;
		}
	});
	return true;
}

module.exports.update = update;
