class Contact {
	constructor(phone, name, email = '') {
		this.phone = Contact.getStrippedPhone(phone);
		this.name = name;
		this.email = email;
	}

	static phoneValidators = [/^\+\d-(\d{3}-){2}(\d{2})-(\d{2})$/, /^\+\d{11}$/];

	/** Возвращает true, если номер телефона валиден
		*@param {string} phone Номер телефона
		*@returns {RegExp}
		*/
	static isPhoneValid(phone) {
		for (const validator of Contact.phoneValidators) {
			if (validator.test(phone)) {
				return true;
			}
		}
		return false;
	}

	/**
	 * @param {string} name
	 * @returns {boolean}
	 */
	static isNameValid(name) {
		if (typeof name != 'string') {
			return false;
		}
		if (name.length == 0) {
			return false;
		}
		return true;
	}

	/**
	 * удаляет все символы, кроме [0-9]
	 * @param {string} phone 
	 * @returns 
	 */
	static getStrippedPhone(phone){
		return phone.replace(/\D/g, '');
	}

}

Contact.prototype.toString =  function	contactToString(){
	//name +7 (999) 111-22-33 email
	return `${this.name} +${this.phone.slice(0,1)}` +
	` (${this.phone.slice(1, 4)}) ${this.phone.slice(4, 7)}` +
	`-${this.phone.slice(7, 9)}-${this.phone.slice(9, 11)}` +
	`${this.email.length > 0 ? ' ' + this.email : ''}`;
}


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

	if (!Contact.isNameValid(name) || !Contact.isPhoneValid(phone)) {
		return false;
	}
	let strippedPhone = Contact.getStrippedPhone(phone);
	for (const cont of phoneBook) {
		if (cont.phone == strippedPhone) {
			return false;
		}
	}

	phoneBook.push(new Contact(strippedPhone, name, email));
	return true;
}

module.exports.add = add;
module.exports.Contact = Contact;
