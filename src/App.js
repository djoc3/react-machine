import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://cdn.glitch.com/40d7aaba-2e87-493e-88ed-181ff8a6e04a%2Fquote-machine.png?v=1579112814007" />
        </div>
        <QuoteBox />
      </div>
    );
  }
}

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.fetchApi = this.fetchApi.bind(this);
    this.state = {
      data: [],
    }
  };
  fetchApi() {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => this.setState({data}));
  }
  render() {
    const {data} = this.state;
    return (
      <div className="QuoteBox" id="quote-box">
        <div id="text">{data.content}</div>
        <div id="author">— {data.author}</div>
        <button id="new-quote" onClick={this.fetchApi.bind(this)}>New Quote</button>
      </div>
    );
  }
  componentDidMount() {
    this.fetchApi();
  };
}
  
export default App;
