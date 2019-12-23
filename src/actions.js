import { SAVE_EXPRESSION, CALCULATE_RESULT, CLEAR_RESULT } from "./constants";

export const save = payload => ({ type: SAVE_EXPRESSION, payload });
export const equalResult = () => ({ type: CALCULATE_RESULT });
export const clearResult = () => ({ type: CLEAR_RESULT });
