/** Задача 2 - Функция find
Требуется написать функцию find, которая
принимает: 
	1) Текущее состояние телефонной книги
	2) Запрос для поиска
требуется:
в текущем состоянии телефонной книги найти все записи, которые удовлетворяют требованиям
	1) Одно из полей name, email содержит подстроку поиска
	2) Поиск по полю phone проводится по следующим правилам:
		2.1) При запросе +7-800-555-35-35 должны отображаться записи с номерами +7-800-555-35-35 и +78005553535
		2.2) При запросе +78005553535 должны отображаться записи с номерами +78005553535 и +7-800-555-35-35
	2) Пустой запрос не должен ничего находить
	3) Запрос «*» находит все записи
возвращает:
	Отсортированный по полю name массив строк в формате name, phone, email
	Поле phone должно быть отформатировано в виде +7 (999) 111-22-33
@param {Array<{ phone: string, name: string, email?: string }>} phoneBook - Текущее состояние телефонной книги
@param {string} query Строка для поиска
@returns {Array<string>} Результаты поиска
 */
function find(phoneBook, query) {
	if(!query){
	  return
	};
	if(query === "*"){
	  return showAll(phoneBook);
	};
	if(/\d/.test(query)){
	  return showByNumber(phoneBook, query);
	};
	return showBySomething(phoneBook, query);
}

//Функции

let sortNumberPhone = (phone) => {
	phone = phone.match(/\d/g).join('')
	return `+${phone.slice(0, 1)} (${phone.slice(1, 4)}) ${phone.slice(4, 7)}-${phone.slice(7, 9)}-${phone.slice(9, 11)}`
  }
  
  function showAll(phoneBook) {
	let resultArray = [];
	phoneBook.forEach(element => {
		if (!element.email) {
			resultArray.push(`${element.name} ${sortNumberPhone(element.phone)}`);
		};
		if (element.email) {
			resultArray.push(`${element.name} ${sortNumberPhone(element.phone)} ${element.email}`);
		}
	});
	return resultArray;
}
  
function showByNumber(phoneBook, numbers) {
	let regExp = new RegExp(`${numbers.match(/\d/g).join('')}`),
		resultArray = [];
	phoneBook.forEach(element => {
		if (regExp.test(element.phone)) {
			if (!element.email) {
				resultArray.push(`${element.name} ${sortNumberPhone(element.phone)}`);
			};
			if (element.email) {
				resultArray.push(`${element.name} ${sortNumberPhone(element.phone)} ${element.email}`);
			}
		};
	});
	return resultArray;
}
  
function showBySomething(phoneBook, query) {
	let regExp = new RegExp(`${query}`),
		resultArray = [];

	phoneBook.forEach(element => {
		for (let key in element) {
			if (regExp.test(element[key])) {
				if (!element.email) {
					resultArray.push(`${element.name} ${sortNumberPhone(element.phone)}`);
				};

				if (element.email) {
					resultArray.push(`${element.name} ${sortNumberPhone(element.phone)} ${element.email}`);
				}
			};
		};
	});
	return resultArray;
}

module.exports.find = find;
