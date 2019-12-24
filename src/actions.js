import { SAVE_EXPRESSION, EQUAL_RESULT, CLEAR_RESULT } from "./constants";

export const save = payload => ({ type: SAVE_EXPRESSION, payload });
export const equalResult = () => ({ type: EQUAL_RESULT });
export const clearResult = () => ({ type: CLEAR_RESULT });
