var React = require('react');
var ReactDOM = require('react-dom');
require('./styles/main.css');
import Main from './components/main';
import Header from './components/header'

class App extends React.Component {
  render(){
    return (
      <div>
       <Header />
       <Main />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
