import {combineReducers} from 'redux';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
    amountToSend: '0.00',
    amountToReceive: '0.00',
    currencyToSend: 'USD',
    currencyToReceive: 'USD'

});

export default rootReducer;