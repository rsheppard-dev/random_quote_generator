import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        quoteList: [],
        quote: '',
        author: ''
    }
  }

  handleClick = () => {
    const newQuote = this.generateQuote();

    this.setState({
      quote: newQuote.quote,
      author: newQuote.author
    });

  }

  generateQuote = () => {
    const randomNumber = Math.floor(
        Math.random() * this.state.quoteList.length
    );

    return this.state.quoteList[randomNumber];
}

componentDidMount() {
  const api = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

  fetch(api)
      .then(res => res.json())
      .then(data => {
        this.setState({
          quoteList: data.quotes
        });
        this.handleClick();
      })
      .catch(err => console.log('Error: ', err))
  
}

  render() {
    const { quote, author } = this.state;
    
    return (
      <div className="App container justify-content-center">
        <div id="quote-box" className="justify-content-center align-self-center p-4 border shadow bg-light">
          
          <div className="row justify-content-center">
              <h1 className="display-5 text-center text-primary">Random Quote Generator</h1>
              
              <div className="show-quote col-6 p-5">
                <p id="text">{quote}</p>
                <cite id="author" className="text-right">--{author}</cite>
              </div>

          </div>

          <div className="row justify-content-evenly">
            <div className="col-4 text-center">
              <button id="new-quote" className="btn btn-outline-primary btn-lg" onClick={this.handleClick}><i className="fas fa-quote-left"></i> Generate Quote</button>
            </div>
            <div className="col-4 text-center">
              <a href={`http://www.twitter.com/intent/tweet?text=${quote} --${author}`} target="_blank" rel="noreferrer" id="tweet-quote" className="btn btn-outline-primary btn-lg"><i className="fab fa-twitter-square"></i> Tweet Quote</a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
