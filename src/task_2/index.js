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
function update(phoneBook, phone, name, email)
{
	let check = false;

	const format =  /^\+7\d{10}$/;
	const formatTire = /^\+7-\d{3}-\d{3}-\d{2}-\d{2}$/;

	if (!(format.test(phone)||formatTire.test(phone)))
	{
		return false;
	}

	for (const number of phoneBook)
	{
		number.phone = number.phone.replace(/\D/g,'');
		phone = phone.replace(/\D/g,'');
    	if(number.phone == phone) 
    	{
        	check = true;
    	}
	}
	if(name && check)
	{
		phoneBook.name = name;
		phoneBook.email = email;
		return true;
    }
	else
	{
		return false;
	}
}

module.exports.update = update;