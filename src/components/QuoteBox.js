import Quote from "./Quote";
import Tweet from "./Tweet";

const QuoteBox = (props) => {
  return (
    <div
      id="quote-box"
      className="flex flex-col items-center justify-center text-center"
    >
      <Quote />
      <Tweet />
    </div>
  );
};

export default QuoteBox;
