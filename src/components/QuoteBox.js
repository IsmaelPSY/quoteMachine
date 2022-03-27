import { useState } from 'react';
import './QuoteBox.css';

import Quotes from './quotes.json';
import Styles from './styles.json'; 

import QuoteText from './QuoteText';
import QuoteAuthor from './QuoteAuthor';

function QuoteBox() {

  const randomQuote = function() {
    return Math.floor(Math.random() * (Quotes.quotes.length));
  } 

  const randomStyle = function() {
    return Math.floor(Math.random() * 5);
  }

  const [quote,setQuote] = useState(Quotes.quotes[randomQuote()]);
  const [style,setStyle] = useState(Styles.style[randomStyle()]);


  function setStates(){
    setQuote(Quotes.quotes[randomQuote()]);
    setStyle(Styles.style[randomStyle()])
  }
  
    return (
      <div className={`container ${style.color1}`}>
        <div className='quoteContainer'>
        <div className={`quoteBox ${style.color2}`}>
          <QuoteText phrase = {quote.quote}/>
          <QuoteAuthor author = {quote.author}/>
          <button className='button' onClick={()=>setStates()}></button>
        </div>
        </div>
      </div>
    );
  }
  
  export default QuoteBox;