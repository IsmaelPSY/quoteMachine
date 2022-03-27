import { useState } from 'react';
import './QuoteBox.css';

import Quotes from './quotes.json';

import QuoteText from './QuoteText';
import QuoteAuthor from './QuoteAuthor';

function QuoteBox() {

  const randomInt = function() {
    return Math.floor(Math.random() * (Quotes.quotes.length));
  } 

  const [quote,setQuote] = useState(Quotes.quotes[randomInt()]);

  function setStates(){
    setQuote(Quotes.quotes[randomInt()]);
  }

    return (
      <div className='container'>
        <div className="quoteBox">
          <QuoteText phrase = {quote.quote}/>
          <QuoteAuthor author = {quote.author}/>
          <button className='button' onClick={()=>setStates()}></button>
        </div>
      </div>
    );
  }
  
  export default QuoteBox;