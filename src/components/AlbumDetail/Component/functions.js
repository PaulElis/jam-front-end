const numberFormat = (num) => {
        // Nine Zeroes for Billions
return Math.abs(Number(num)) >= 1.0e+9
     ? Math.abs(Number(num)) / 1.0e+9 + "B"
        // Six Zeroes for Millions
     : Math.abs(Number(num)) >= 1.0e+6
     ? Math.round(Number(num).toString().slice(0,2)) / 1.0e+1 + "M"
        // Three Zeroes for Thousands
     : Math.abs(Number(num)) >= 1.0e+3
     ? Math.round(Number(num).toString().slice(0,3)) + "K"
     : Math.abs(Number(num));
}

module.exports = {
  numberFormat: numberFormat,
}
