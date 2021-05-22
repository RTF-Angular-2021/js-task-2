function toFormat(phone) {
	return phone.match(/\d/g).join('');
}

function isEmpty(name) {
	if (name !== null && typeof name !== "undefined")
		name = name.trim();
	return !Boolean(name);
}

function contains(objectsArray, property, value) {
	for (let obj of objectsArray)
		if (toFormat(obj[property]) === toFormat(value))
			return true;
	return false;
}

function templateCheck(phone) {
	let firstTemplate = /^\+7-\d\d\d-\d\d\d-\d\d-\d\d$/;
	let secondTemplate = /^\+7\d\d\d\d\d\d\d\d\d\d$/;
	return firstTemplate.test(phone) || secondTemplate.test(phone);
}

function add(phoneBook, phone, name, email) {
	if (isEmpty(name) || contains(phoneBook, "phone", phone) || !templateCheck(phone))
		return false;
	phoneBook.push({
		name : name,
		phone : phone,
		email : email
	})
	return true;
}

module.exports.add = add;
module.exports.toFormat = toFormat;
module.exports.isEmpty = isEmpty;
module.exports.templateCheck = templateCheck;