import { CHANGE_AMOUNTTOSEND } from "../constants/action-types";
import { CHANGE_AMOUNTTORECEIVE } from "../constants/action-types";
import { CHANGE_CURRENCYTOSEND } from "../constants/action-types";
import { CHANGE_CURRENCYTORECEIVE } from "../constants/action-types";

export const changeAmountToSend = amountToSend => ({
    type: CHANGE_AMOUNTTOSEND,
    payload: amountToSend
});

export const changeAmountToReceive = amountToReceive => ({
    type: CHANGE_AMOUNTTORECEIVE,
    payload: amountToReceive
});

export const changeCurrencyToSend = senderCurrency => ({
    type: CHANGE_CURRENCYTOSEND,
    payload: senderCurrency
});

export const changeCurrencyToReceive = receiverCurrency => ({
    type: CHANGE_CURRENCYTORECEIVE,
    payload: receiverCurrency
});

