const {templateCheck} = require("../task_1");
const {toFormat} = require("../task_1");
const {isEmpty} = require("../task_1");

function find(objectsArray, property, value) {
	for (let obj of objectsArray)
		if (toFormat(obj[property]) === toFormat(value))
			return obj;
	return null;
}

function update(phoneBook, phone, name, email) {
	let item = find(phoneBook, "phone", phone)
	if (isEmpty(name) || item === null || typeof item === "undefined" || !templateCheck(phone))
		return false;
	item.name = name;
	item.email = email;
	return true;
}

module.exports.update = update;