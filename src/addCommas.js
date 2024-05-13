const addCommas = (num) => {
    // Convert number to string
    let stringNum = num.toString();

    // Split the number into integer and decimal parts
    let [integerPart, decimalPart] = stringNum.split('.');

    // Handle negative numbers
    let sign = '';
    if (integerPart.startsWith('-')) {
        sign = '-';
        integerPart = integerPart.slice(1);
    }

    // Add commas to the integer part
    let result = [];
    for (let i = integerPart.length - 1, count = 0; i >= 0; i--, count++) {
        if (count && count % 3 === 0) {
            result.unshift(',');
        }
        result.unshift(integerPart[i]);
    }

    // Combine integer and decimal parts
    let formattedNum = sign + result.join('');
    if (decimalPart !== undefined) {
        formattedNum += '.' + decimalPart;
    }

    return formattedNum;
};

module.exports = addCommas;
