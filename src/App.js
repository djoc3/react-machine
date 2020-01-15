import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>The Quote Machine</h2>
        </div>
        <p className="App-intro">
          Click "New Quote" to Refresh
        </p>
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
        <div id="author">{data.author}</div>
        <button id="new-quote" onClick={this.fetchApi.bind(this)}>New Quote</button>
        <a href="https://twitter.com/intent/tweet" id="tweet-quote">Tweet It</a>
      </div>
    );
  }

  componentDidMount() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => this.setState({data}));
  };
}

  
export default App;
