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
function update(phoneBook, phone, name, email) {
	let result;

	if(!(/\+7-\d{3}-\d{3}-\d{2}-\d{2}/).test(phone) && !(/\+7\d{10}/).test(phone) || (/[a-z]/).test(phone)){
		return false;
	}

	if(!name) {
		return false;
	}

	phoneBook.forEach(element =>{
		if(element.phone.match(/\d/g).join('') === phone.match(/\d/g).join('')){
			console.log(element.phone);		
			element.name = name;
			element.email = email;
			result = true;
		}
		else{
			result = false;
		}
	});
	return result;
}

module.exports.update = update;
