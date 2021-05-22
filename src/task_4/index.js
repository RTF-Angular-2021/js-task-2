const {isEmpty} = require("../task_1");
const {toFormat} = require("../task_1");

function remove(arr, indexes) {
	let count = 0;
	indexes = indexes.sort((a, b) => a < b ? 1 : -1);
	for (let index of indexes) {
		arr.splice(index, 1);
		count++;
	}
	return count;
}

function contains(item1, item2) {
	let result = false;
	if (/[0-9]/.test(item1) && /[0-9]/.test(item2))
		if (toFormat(item1).indexOf(toFormat(item2)) !== -1)
			result = true;
	return result || item1.indexOf(item2) !== -1;
}

function findAndRemove(phoneBook, query) {
	let indexes = [];
	if (isEmpty(query)) return 0;
	if (query === "*") {
		let count = phoneBook.length;
		phoneBook = [];
		return count;
	};
	for (let i = 0; i < phoneBook.length; i++)
		for (let prop in phoneBook[i])
			if (typeof phoneBook[i][prop] !== "undefined" && contains(phoneBook[i][prop], query)) {
				indexes.push(i);
				break;
			}
	return remove(phoneBook, indexes);
}

module.exports.findAndRemove = findAndRemove;