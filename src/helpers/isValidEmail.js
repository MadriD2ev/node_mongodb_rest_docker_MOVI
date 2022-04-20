function isValidEmail(email) {
    let re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    return re.test(String(email).toLowerCase());
}

module.exports = isValidEmail;