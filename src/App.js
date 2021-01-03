import { Component } from 'react';
import QuoteBox from './components/quotebox';

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

    window.scrollTo(0, 0);

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
      <div className="App container min-vh-100 d-flex flex-column justify-content-center">
        <QuoteBox quote={quote} author={author} handleclick={this.handleClick} />
      </div>
    );
  }
}

export default App;
