// Example date formatting utility
function formatDate(date, format = 'YYYY-MM-DD') {
    return require('moment')(date).format(format);
}

module.exports = { formatDate };
