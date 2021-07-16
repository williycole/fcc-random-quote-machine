import { useEffect, useState } from "react";
const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const randomizer = Math.floor(Math.random() * (100 - 1 + 1)) + 1; // props maybe from parent component? need to use with button to generate
    const res = await fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    );

    const json = await res.json();
    setAuthor(json[randomizer].author);
    setQuote(json[randomizer].quote);
  }

  return (
    <div>
      <h1 id="text">{author}</h1>
      <h2 id="author">{quote}</h2>
    </div>
  );
};

export default Quote;
