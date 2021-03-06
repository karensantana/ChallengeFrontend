const normalizeCurrencyValue = (value) => {
    if (!value) {
        return value
      }
    
    return parseFloat(value).toFixed(2);

}

export default normalizeCurrencyValue;
