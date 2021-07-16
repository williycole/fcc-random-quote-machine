const QuoteBox = (props) => {
  return (
    <div id="quote-box">
      <h1 id="text">"Taco Tuesday"</h1>
      <h2 id="author">-Taco Felix</h2>
      <a id="tweet-quote" href="twitter.com/intent/tweet">
        <p>Tweet Me</p>
      </a>
      <button id="new-quote">Click Me</button>
    </div>
  );
};

export default QuoteBox;
