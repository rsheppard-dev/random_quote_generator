import Buttons from "./buttons";

const QuoteBox = ({quote, author, handleclick}) => (
    <div id="quote-box" className="card w-75 mx-auto m-5 text-center">
        <i className="fas fa-quote-left"></i>
        <div className="card-body">
            <blockquote className="blockquote mb-0">              
                <p id="text">{quote}</p>
                <footer className="blockquote-footer">
                    <cite id="author">{author}</cite>
                </footer>
            </blockquote>
            <Buttons handleclick={handleclick} quote={quote} author={author} />
        </div>
        <i className="fas fa-quote-right"></i>
    </div>
);

export default QuoteBox;