// @flow
import React from "react";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import configureStore from "../store/hackerViewStore";
import HackerViewContainer from "../containers/HackerViewContainer";

const HackerViewApp = (props) => {
  const store = configureStore(props);
  const history = createHistory({ basename: "/hackers" });

  return (<Provider store={store}>
    <HackerViewContainer history={history} />
  </Provider>);
};

export default HackerViewApp;
