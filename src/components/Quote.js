import { useEffect, useState } from "react";
const Quote = () => {
  const [quote, setQuote] = useState("unloaded");
  const [author, setAuthor] = useState("unloaded");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    return fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  //   console.log(data);
  return (
    <div>
      <h1 id="text">"test"</h1>
      <h2 id="author">"test"</h2>
    </div>
  );
};

export default Quote;
