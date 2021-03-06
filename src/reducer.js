import {
  initialState,
  SAVE_EXPRESSION,
  EQUAL_RESULT,
  CLEAR_RESULT
} from "./constants";

export const rootReducer = (state = initialState, action) => {
  const operator = ["+", "-", "*", "/"];
  const regex = /^\d+(\.\d+)?([+\-*]\d+(\.\d+)?)*$/gm;
  let { payload } = action;
  const { expression } = state;
  const indexPayload = operator.indexOf(payload);
  const lastOp = expression.slice(-1);
  const indexlastOp = operator.indexOf(lastOp);
  if (
    payload === "." &&
    lastOp !== "." &&
    (indexlastOp != -1 || expression === "0")
  )
    payload = `0${payload}`;
  const newExpression = expression + payload;
  switch (action.type) {
    case CLEAR_RESULT:
      return initialState;
    case EQUAL_RESULT: {
      let result;
      try {
        const temp = eval(expression);
        result =
          temp === parseInt(temp) ? temp : Math.round(temp * 1000000) / 1000000;
      } catch (e) {
        console.log(`EQUAL_RESULT Exception ${e}`);
      }
      if (!result || typeof +result !== "number") result = 0;
      return {
        ...state,
        expression: "0",
        result
      };
    }
    case SAVE_EXPRESSION:
      if (payload === ".") {
        if (lastOp === ".") return state;
        if (!`${newExpression}0`.match(regex)) return state;
      }
      if (expression === "0" && indexPayload != -1) return state;
      return {
        ...state,
        expression:
          expression === "0"
            ? payload
            : indexPayload != -1 && indexlastOp != -1
            ? expression.substr(0, expression.length - 1) + payload
            : newExpression
      };
    default:
      return state;
  }
};