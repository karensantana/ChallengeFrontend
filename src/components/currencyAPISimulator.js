const currencyAPISimulator = (currency) => {
    var cValue = "";
   switch(currency) {
    case 'USD':
        cValue = 1;
        break;
    case 'CAD':
        cValue = 1.31;
        break;
    case 'EUR':
        cValue = 0.88;
        break;
    case 'GBP':
        cValue = 0.78;
        break;
    default:
        cValue = 0;
}
    return cValue;
}

export default currencyAPISimulator;