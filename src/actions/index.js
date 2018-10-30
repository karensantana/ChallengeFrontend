import { SHOW_MODAL } from "../constants/action-types";
import { HIDE_MODAL } from "../constants/action-types";

export const showModal = amountToSend => ({
    type: SHOW_MODAL,
    payload: amountToSend
});

export const hideModal = amountToSend => ({
    type: HIDE_MODAL,
    payload: amountToSend
});


