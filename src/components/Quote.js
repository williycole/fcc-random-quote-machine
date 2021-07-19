import { useEffect, useState } from "react";
const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    // Backup incase other api has trouble in the future
    // const randomizer = Math.floor(Math.random() * (100 - 1 + 1)) + 1; // props maybe from parent component? need to use with button to generate

    const res = await fetch(
      //Backup incase other api has trouble in the future
      // "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
      "http://quotes.stormconsultancy.co.uk/random.json"
    );

    const json = await res.json();
    console.log(json);
    // Backup incase other api has trouble in the future
    // setAuthor(json[randomizer].author);
    // setQuote(json[randomizer].quote);

    setAuthor(json.author);
    setQuote(json.quote);
  }

  return (
    <div>
      <h1 id="text">{author}</h1>
      <h2 id="author">{quote}</h2>
      <button id="new-quote" onClick={fetchData}>
        Get New Quote
      </button>
    </div>
  );
};

export default Quote;
