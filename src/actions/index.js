import { CHANGE_AMOUNTTOSEND } from "../constants/action-types";
import { CHANGE_AMOUNTTORECEIVE } from "../constants/action-types";
import { CHANGE_CURRENCYTOSEND } from "../constants/action-types";
import { CHANGE_CURRENCYTORECEIVE } from "../constants/action-types";

export const ChangeAmountToSend = amountToSend => ({
    type: CHANGE_AMOUNTTOSEND,
    payload: 0.00
});

export const ChangeAmountToReceive = amountToSend => ({
    type: CHANGE_AMOUNTTORECEIVE,
    payload: 0.00
});

export const ChangeCurrencyToSend = amountToSend => ({
    type: CHANGE_CURRENCYTOSEND,
    payload: 0.00
});

export const ChangeCurrencyToReceive = amountToSend => ({
    type: CHANGE_CURRENCYTORECEIVE,
    payload: 0.00
});