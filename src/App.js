import logo from './logo.svg';
import './App.css';
import React from 'react';
import AgendaClass from './pages/AgendaClass';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.userName = "Ando";
    this.state = {
      myName: "",
      myAge: 0
    }
  }

  // akan dipanggil ketika sebuah component dirender sama browser
  componentDidMount() {
    // cara benar untuk update state dari sebuah class component
    this.setState({
      myName: "Ryan"
    });

    // ubah umur setelah 5 detik
    setTimeout(() => {
      this.setState({
        myAge: 21,
        myName: "Boi"
      });
    }, 5000)
  }

  render() {
    return (
      <div className="App">
        <AgendaClass></AgendaClass>
      </div>
    )
  }
}

// Functional Component
function AppFunction() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
