import './QuoteAuthor.css'

const QuoteAuthor = ({author}) => {
    return (
        <div>
            <p className="author">--{author}--</p>
        </div>
    );
};

export default QuoteAuthor;