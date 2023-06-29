module.exports = function toReadable(number) {

    let arrSimple = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrTen = [' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let str = '';

    if (number >= 100) {
        if (number % 100 < 20) {
            str = arrSimple[Math.floor(number / 100)] + ' hundred ' + arrSimple[number % 100];
        }
        else {
            str = arrSimple[Math.floor(number / 100)] + ' hundred ' + arrTen[(Math.floor(number / 10)) % 10 - 1] + ' ' + arrSimple[number % 10];
        }
    }
    else if (number < 100 && number >= 20) {
        str = arrTen[Math.floor(number / 10) - 1] + ' ' + arrSimple[number % 10];
    }
    else if (number === 0) {
        str = 'zero';
    }
    else {
        str = arrSimple[number];
    }

    str = str.trim();
    return str;
}
