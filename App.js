import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Screen from "./src/Screen";

import { rootReducer } from "./src/reducer";
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  );
}
