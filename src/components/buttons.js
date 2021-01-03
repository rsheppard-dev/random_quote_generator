const Buttons = ({handleclick, quote, author}) => (
    <div className="buttons pt-4 d-flex justify-content-around">
        <button id="new-quote" className="btn btn-dark mr-1" onClick={handleclick}><i className="fas fa-comment-dots"></i> New</button>
        <a href={`http://www.twitter.com/intent/tweet?text=${quote} --${author}`} target="_blank" rel="noreferrer" className="btn btn-dark ml-1" id="tweet-quote"><i className="fab fa-twitter-square"></i> Tweet</a>
    </div>
);

export default Buttons;