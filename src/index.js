var React = require('react');
var ReactDOM = require('react-dom');
require('./styles/main.css');
import Main from './components/main';
import Header from './components/header';
import store from "./store/index";
import { Provider } from "react-redux";

class App extends React.Component {
  render(){
    return (
      <div className="app-container">
       <Header />
       <Main />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
 document.getElementById('app'))
