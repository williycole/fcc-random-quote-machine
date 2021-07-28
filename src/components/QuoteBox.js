import Quote from "./Quote";

const QuoteBox = (props) => {
  return (
    <div
      id="quote-box"
      className="flex flex-col items-center justify-center text-center"
    >
      <Quote />
    </div>
  );
};

export default QuoteBox;
