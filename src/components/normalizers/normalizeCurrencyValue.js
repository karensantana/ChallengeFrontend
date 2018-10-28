const normalizeCurrencyValue = (value) => {
    if (!value) {
        return value
      }
    var normalized = value.replace(/,/g , '');
    return parseFloat(normalized).toFixed(2);

}

export default normalizeCurrencyValue;
