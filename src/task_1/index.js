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

const regexPhoneNumber = /^\+7[\- ](\d{3}[\- ])(\d{3}[\- ])(\d{2}[\- ])(\d{2})$/im;
const regexp = /^\+7[0-9]{10}$/im;

function add(phoneBook, phone, name, email) {
  let obj = new Object();
  obj.name = name;
  obj.phone = phone;
  if (email) {
    obj.email = email;
  }
  if (regexPhone(phone) && name) {
    let result = phoneBook.find(el => el.phone.replace(/[^\d]/g, '') == phone.replace(/[^\d]/g, ''));
    if (!result) {
      phoneBook.push(obj);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function regexPhone(str) {
  if (str.match(regexp) || str.match(regexPhoneNumber)) {
    return true;
  } else {
    return false;
  }
}

module.exports.add = add;
