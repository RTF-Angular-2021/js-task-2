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

	if (query !== "*" && query !== "") {
	  let regex = new RegExp('(' + query.replace(/[\-+]/g, '') + '[\w\n]*)', 'i');
	  let newArr = findAllMatchedItemsInBook(phoneBook, regex).map((item) => {
		return phoneBook.forEach((element, i) => {
		  if (element == item) {
			phoneBook.splice(i, 1);
		  }
		});
	  });

	  return newArr.length;

	} else if (query == "*") {
	  let lengthPhoneBook = phoneBook.length;
	  phoneBook.splice(0, phoneBook.length);

	  return lengthPhoneBook;
	}
  }
  
  const findAllMatchedItemsInBook = (book, reg) => {
	return book.filter(function (item) {
	  for (let key in item) {
		let res = item[key].replace(/-/g, '');
		if (reg.test(res)) {
		  return item;
		}
	  }
	});
  }

module.exports.findAndRemove = findAndRemove;
