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
const regexPhoneNumber = /^\+7[\- ](\d{3}[\- ])(\d{3}[\- ])(\d{2}[\- ])(\d{2})$/im;
const regexp = /^\+7[0-9]{10}$/im;

function update(phoneBook, phone, name, email) {
  if (regexPhone(phone) && name) {
    let result = phoneBook.find(item => item.phone.replace(/[^\d]/g, '') == phone.replace(/[^\d]/g, ''));
    if (result) {
      if (result.email !== email || result.name !== name) {
        result.email = email;
        result.name = name;
        return true;
      }
    } else if (result == undefined) {
      return false
    }
  } else {
    return false;
  }
}

function regexPhone(str) {
  if (str.match(regexp) || str.match(regexPhoneNumber)) {
    return true;
  }
}

module.exports.update = update;
