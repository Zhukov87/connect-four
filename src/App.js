import React, { Component } from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
