import Quote from "./Quote";

const QuoteBox = (props) => {
  return (
    <div id="quote-box">
      <Quote />
      <a id="tweet-quote" href="twitter.com/intent/tweet">
        <p>Tweet Me</p>
      </a>
      <button id="new-quote">Click Me</button>
    </div>
  );
};

export default QuoteBox;
