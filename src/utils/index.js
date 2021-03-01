function parsePhoneNumberDash(phone) {
	return !phone.includes("-") ? `+7-${phone.substr(2,3)}-${phone.substr(5,3)}-${phone.substr(8,2)}-${phone.substr(10,2)}` : phone;
}

function parsePhoneNumberNoDash(phone) {
	const parts = phone.split("-");
	return parts.length === 1 ? phone : parts[0] + parts[1] + parts[2] + parts[3] + parts[4];
}

module.exports.parsePhoneNumberNoDash = parsePhoneNumberNoDash;
module.exports.parsePhoneNumberDash = parsePhoneNumberDash;
