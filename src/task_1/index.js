function add(phoneBook, phone, name, email) {
	let firstPattern = /^\+7-\d\d\d-\d\d\d-\d\d-\d\d$/;
	let secondPattern = /^\+7\d\d\d\d\d\d\d\d\d\d$/;
	let check = false;
	if (firstPattern.test(phone) || secondPattern.test(phone))
	{
		let number = phone.match(/\d/g).join('');
		for (let i = 0; i < phoneBook.length; i++) {
			let currentNumber = phoneBook[i].phone.match(/\d/g).join('');
			if (name === '' || name === undefined || phoneBook[i].name === name || number === currentNumber) 
				check = true;
		}
		if (check) return false;
		let obj = {name : name, phone : phone, email : email };
		phoneBook.push(obj);
		return true;
	}
	return false;
}
module.exports.add = add;