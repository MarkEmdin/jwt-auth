import ReactDOM from "react-dom";
import { createContext } from "react";
import App from "./App";
import Store from "./store/store";

interface State {
  store: Store;
}

const store = new Store();

//1-27-48
export const Context = createContext<State>({
  store,
});

ReactDOM.render(
  <Context.Provider value={{ store }}>
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
