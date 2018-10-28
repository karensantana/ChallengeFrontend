const formatAmount = (input) => {
    if (!input) return;
  
    //Prevent Non-digits
    return input
        .replace(/,/g , '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default formatAmount;