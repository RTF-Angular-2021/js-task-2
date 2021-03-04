/** Задача 2 - Функция findAndRemove
Требуется написать функцию findAndRemove, которая
принимает: 
	1) Текущее состояние телефонной книги
	2) Запрос для поиска
требуется:
в текущем состоянии телефонной книги найти и удалить все записи, которые удовлетворяют требованиям
	1) См. find из task_3
возвращает:
	Число удаленных записей
@param {Array<{ phone: string, name: string, email?: string }>} phoneBook - Текущее состояние телефонной книги
@param {string} query Строка для поиска
@returns {number} Количество удаленных записей
 */

function findAndRemove(phoneBook, query) {
	let count = phoneBook.length;
  
	if(!query){
		return
	};
	
	  if (query === '*') {
	  phoneBook.splice(0, phoneBook.length);
	  return count - phoneBook.length;
	}
  
	if(/\d/.test(query)){
		return showByNumber(phoneBook, query);
	};
	
	  return showBySomething(phoneBook, query);
  }

  //Функции

function showByNumber(phoneBook, numbers) {
	let regExp = new RegExp(`${numbers.match(/\d/g).join('')}`),
		resultArray = [];

	phoneBook.forEach(element => {
		let index = phoneBook.indexOf(element);
		if (regExp.test(element.phone.match(/\d/g).join(''))) {
			resultArray.push(phoneBook.slice(index, index));
		};
	});
	return resultArray.length;
}
	
  function showBySomething(phoneBook, query) {
	let regExp = new RegExp(`${query}`),
		resultArray = [];

	phoneBook.forEach(element => {
		for (let key in element) {
			if (regExp.test(element[key])) {
				let index = phoneBook.indexOf(element);
				resultArray.push(phoneBook.slice(index, index));
			};
		};
	});
	return resultArray.length;
}

module.exports.findAndRemove = findAndRemove;
