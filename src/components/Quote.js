import { VscChromeMinimize } from "react-icons/vsc";
import { useEffect, useState } from "react";
import TerminalPath from "./TerminalPath";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const res = fetch("http://quotes.stormconsultancy.co.uk/random.json");

    const json = res.json();
    console.log(json);
    (function () {
      setAuthor(json.author);
      setQuote(json.quote);
    })();
  }

  return (
    <div className="p-2">
      <h1 className="customFont font-semibold uppercase  p-2 m-4  text-sm sm:text-base md:text-2xl lg:text-3xl text-brightGreen">
        <span
          role="img"
          aria-label="robot face"
          className="text-lg sm:text-4xl md:text-4xl lg:text-6xl"
        >
          ⭐
        </span>
        Techy Random Quote Generator
      </h1>

      <div className="flex flex-row justify-evenly items-center text-center">
        <div
          className="flex flex-col justify-start w-64 h-64 md:w-96 lg:h-96 px-1 pt-4
          bg-darkPurple text-brightGreen border-brightGreen border-2 text-xs md:text-sm
          overflow-y-scroll sm:overflow-hidden leading-9 font-mono font-medium rounded-md
          shadow-2xl"
        >
          <TerminalPath />
          <div className="flex flex-row justify-start">
            <div id="quote-container" className="inline  w-full text-left">
              <p className="inline md:text-1xl">$</p>
              <VscChromeMinimize className="inline text-3xl md:text-xl mt-4 md:mt-6 animate-pulse-fast" />
              <h1 id="text" className="inline px-1">
                {author}:
              </h1>
              <h2 id="author" className="inline">
                {quote}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <button
        id="new-quote"
        onClick={fetchData}
        className="text-center text-xs customFont uppercase p-3 md:p-4 md:text-base m-10 animate-bounce-slow
        rounded-md shadow-2xl text-darkPurple bg-redPink hover:bg-darkPurple hover:text-redPink"
      >
        Get New Quote
      </button>
      <div>
        <a
          className="text-pinkPurple hover:text-brightGreen"
          href={encodeURI(
            "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
              quote +
              " " +
              author
          )}
          target="_blank"
          rel="noopener noreferrer"
          id="tweet-quote"
        >
          <p className="customFont uppercase m-5">Tweet Me</p>
        </a>
      </div>
    </div>
  );
};

export default Quote;
