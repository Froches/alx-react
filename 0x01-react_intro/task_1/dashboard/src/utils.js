function getFullYear() {
    date = new Date();
    return date.getFullYear();
}

function getFooterCopy(isIndex) {
    if (isIndex) {
        return "Holberton School";
    }
    else {
        return "Holberton School main dashboard";
    }
}

export {getFullYear, getFooterCopy};