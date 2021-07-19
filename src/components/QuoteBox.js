import Quote from "./Quote";

const QuoteBox = (props) => {
  return (
    <div id="quote-box">
      <Quote />

      <a id="tweet-quote" href="twitter.com/intent/tweet">
        <p>Tweet Me</p>
      </a>
    </div>
  );
};

export default QuoteBox;
