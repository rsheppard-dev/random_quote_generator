const Buttons = ({handleclick, quote, author}) => (
    <div className="buttons pt-4 d-flex justify-content-around">
        <button className="btn btn-dark" onClick={handleclick}><i className="fas fa-comment-dots"></i> New Quote</button>
        <a href={`http://www.twitter.com/intent/tweet?text=${quote} --${author}`} target="_blank" className="btn btn-dark"><i className="fab fa-twitter-square"></i> Tweet</a>
    </div>
);

export default Buttons;