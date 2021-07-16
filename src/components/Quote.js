const [quote, setQuote] = useState("");
const [quoteText, setQuoteText] = useState("");
const [quoteAuthor, setQuoteAuthor] = useState("");

const Quote = () => {
  useEffect(() => {
    requestQuote();
  });

  async function requestQuote() {
    const res = await fetch(
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"
    );
    const json = await res.json;
    console.log(json);
  }
};

export default Quote;
