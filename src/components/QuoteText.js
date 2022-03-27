import './QuoteText.css'

const QuoteText = ({phrase}) => {
    return (
        <div>
            <blockquote className="quote">{phrase}</blockquote>
        </div>
    );
};

export default QuoteText;