import { VscChromeMinimize } from "react-icons/vsc";
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
    <div className="flex flex-col justify-evenly items-center text-center">
      <h1>Random Tech Quote Generator</h1>

      {/*


      Maybe use overflow and fixed sizes like you would in a terminal
      Maybe use overflow and fixed sizes like you would in a terminal
      Maybe use overflow and fixed sizes like you would in a terminal
      Maybe use overflow and fixed sizes like you would in a terminal
      Maybe use overflow and fixed sizes like you would in a terminal




      */}

      <div className="flex flex-col justify-center items-start w-10/12 px-1 pt-4 pb-60 bg-darkPurple text-brightGreen border-brightGreen border-2 leading-9 font-mono text-sm font-medium rounded-md">
        <p className="text-left w-full">
          <span className="text-redPink">
            quoteBot
            <span role="img" aria-label="robot face">
              🤖
            </span>
            <span role="img" aria-label="fire">
              🔥
            </span>
            <span role="img" aria-label="sign of the horns">
              🤘
            </span>
          </span>
          <span className="text-offYellow">~/quoteProject</span>
        </p>
        <div className="flex flex-row justify-start">
          <div id="quote-container" className="inline  w-full text-left">
            <p className="inline">$</p>
            <VscChromeMinimize className="inline text-3xl md:text-5xl mt-4 md:mt-6 animate-pulse-fast" />
            <h1 id="text" className="inline px-1">
              {author}:
            </h1>
            <h2 id="author" className="inline">
              {quote}
            </h2>
          </div>
        </div>
      </div>
      <button id="new-quote" onClick={fetchData} className="text-center">
        Get New Quote
      </button>
    </div>
  );
};

export default Quote;
