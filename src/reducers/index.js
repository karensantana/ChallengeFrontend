import {combineReducers} from 'redux';
import { reducer as formReducer} from 'redux-form';
import { CHANGE_AMOUNTTOSEND } from "../constants/action-types";
import modal from "./reducer_modal"

const reducers = {
    modal,
    form: formReducer.plugin({
      StepOne: (state, action) => {  
        switch(action.type) {
          case CHANGE_AMOUNTTOSEND:
            return {
              ...state,
              values: {
                ...state.values,
                amountToSend: "27.00"
              },
            }
          default:
            return state
        }
      }
    })
  }
  const rootReducer = combineReducers(reducers)


export default rootReducer;