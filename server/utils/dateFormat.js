// utils/dateFormat.js
const dateFormat = (timestamp) => {
    return new Date(timestamp).toLocaleString();
};

module.exports = dateFormat;