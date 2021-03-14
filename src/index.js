module.exports = function toReadable (number) {
    let units = ['', 'one', 'two', 'three', 'four', 'five', 'six',
'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let numberToStr = number.toString();

if (number === 0) return 'zero';
if (number < 20) return units[number];
if (numberToStr.length === 2){
    let tenth = tens[numberToStr[0]] + ' ' + units[numberToStr[1]];
    return tenth.trim();
}
if (numberToStr.length === 3){
    let minusSto = number%100;
    let minusStoToStr =minusSto.toString();
    if (minusSto < 20) return units[numberToStr[0]] + ' hundred ' + units[minusSto];
    if (minusSto >= 20) {
        return (units[numberToStr[0]] + ' hundred ' + tens[numberToStr[1]] + ' ' + units[numberToStr[2]]).trim().trim();
}
}
}
