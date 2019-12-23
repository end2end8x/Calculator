import {
  initialState,
  SAVE_EXPRESSION,
  CALCULATE_RESULT,
  CLEAR_RESULT
} from "./constants";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_RESULT:
      return initialState;
    case CALCULATE_RESULT: {
      let result;
      try {
        const temp = eval(state.expression);
        result =
          temp === parseInt(temp)
            ? temp
            : Math.round(temp * 100000000) / 100000000;
      } catch (e) {
      } finally {
        if (!result || typeof +result !== "number") result = 0;
        const newState = {
          ...state,
          expression: "0",
          result
        };
        return newState;
      }
    }
    case SAVE_EXPRESSION:
      const operator = ["+", "-", "*", "/"];
      const indexPayload = operator.indexOf(action.payload);
      const indexOperator = operator.indexOf(
        state.expression[state.expression.length - 1]
      );
      if (state.expression === "0" && indexPayload != -1) return state;
      const newState = {
        ...state,
        expression:
          state.expression === "0"
            ? action.payload
            : indexPayload != -1 && indexOperator != -1
            ? state.expression.substr(0, state.expression.length - 1) +
              action.payload
            : state.expression + action.payload
      };
      return newState;
    default:
      return state;
  }
};

export default rootReducer;
