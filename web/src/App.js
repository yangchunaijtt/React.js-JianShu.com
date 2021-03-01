import React, { Component } from 'react';
import Headers from "./components/headers"
import { Provider } from 'react-redux';
import store from "./store";
import GlobStyle from './style.js';
import Iconfont from "./static/iconfont";
import Router from "./router"



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Headers />
        <Router/>
        <GlobStyle />
        <Iconfont />
      </Provider>
    )
  }
}

export default App;
