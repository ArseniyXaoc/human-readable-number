module.exports = 
function toReadable(number) {
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    numStr = number.toString().split('');
    let humanNum = '';
    let output;
    if(number === 0) return 'zero';

    if (numStr.length == 3) {
        humanNum += `${ones[numStr[0]]} hundred `
        if (number % 100 <= 19) {
            humanNum += ones[number % 100];
            if(ones[number % 100] == 0) humanNum = humanNum.slice(0, -1);
            return humanNum
        } 
        humanNum += tens[numStr[1]];
        if(ones[numStr[2]] !='')humanNum += ' ';
        humanNum += ones[numStr[2]];
    }

    if (number <= 19) {
        return humanNum += ones[number];
    }

    if (numStr.length == 2){
        humanNum += tens[numStr[0]];
        if(ones[numStr[1]] !='')humanNum += ' ';
        humanNum += ones[numStr[1]];
    }

    return humanNum;
}

//console.log(toReadable(200));