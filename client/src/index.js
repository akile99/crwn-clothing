import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

import "./index.css";
import App from "./App";
import Loading from "./components/loading/loading.component";

import { store, persistor } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
