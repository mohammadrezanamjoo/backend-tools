// Example string truncation utility
function truncateString(str, maxLength) {
    return str.length > maxLength ? `${str.substring(0, maxLength)}...` : str;
}

module.exports = { truncateString };
