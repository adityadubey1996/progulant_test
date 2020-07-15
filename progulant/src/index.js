import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App_Mobile from "./App_Mobile";
import App_Desktop from "./App_Desktop";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducer/index";

function saveToStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromStorage(state) {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState == null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

const persisStorage = loadFromStorage();

const store = createStore(
  allReducers,
  persisStorage,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToStorage(store.getState()));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App_Mobile />
      <App_Desktop />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
