const {isEmpty} = require("../task_1");
const {toFormat} = require("../task_1");

function templatePhone(phone) {
	let parts = [];
	let index = 1;
	for (let partLen of [3,3,2,2]) {
		parts.push(phone.substr(index, partLen));
		index += partLen;
	}
	return `+7 (${parts[0]}) ${parts[1]}-${parts[2]}-${parts[3]}`;
}

function getResult (phoneBook) {
	let result = [];
	phoneBook = phoneBook.sort((a, b) => a.name > b.name ? 1 : -1);
	for (let item of phoneBook) {
		let phone = toFormat(item.phone);
		phone = templatePhone(phone);
		if (typeof item.email === "undefined") result.push(`${item.name} ${phone}`)
		else result.push(`${item.name} ${phone} ${item.email}`);
	}
	return result;
}

function find(phoneBook, query) {
	if (isEmpty(query)) return;
	if (query === "*") return getResult(phoneBook);
	let result = [];
	for (let obj of phoneBook)
		for (let prop in obj)
			if (prop === "phone" && /[0-9]/.test(query)
				&& toFormat(obj[prop]).indexOf(toFormat(query)) !== -1)
				result.push(obj);
			else if (typeof obj[prop] !== "undefined" && obj[prop].indexOf(query) !== -1)
				result.push(obj);
	return getResult(result);
}

module.exports.find = find;