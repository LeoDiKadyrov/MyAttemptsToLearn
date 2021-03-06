function convertToRoman(num) {
  var romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
 var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 var romanized='';

 for (var i=0;i<decimals.length;i++){ 
while (decimals[i]<=num){ 
  romanized += romanNumerals[i]; 
  num -= decimals[i]; 
}
}
return romanized;
}
console.log(
convertToRoman(3999));