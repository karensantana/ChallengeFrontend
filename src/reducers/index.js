
import { CHANGE_AMOUNTTOSEND } from "../constants/action-types";
import { CHANGE_AMOUNTTORECEIVE } from "../constants/action-types";
import { CHANGE_CURRENCYTOSEND } from "../constants/action-types";
import { CHANGE_CURRENCYTORECEIVE } from "../constants/action-types";

const initialState = {
    amountSent : 0.00,
    amountToReceive: 0.00,
    currencyToSend: "EUR",
    currencyToReceive: "USD"
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_AMOUNTTOSEND:
            return action.payload;

        case CHANGE_AMOUNTTORECEIVE:
            return action.payload;

        case CHANGE_CURRENCYTOSEND:
            return action.payload;
        
        case CHANGE_CURRENCYTORECEIVE:
            return action.payload;
        
        default:
            return state;
    }
};

export default rootReducer;