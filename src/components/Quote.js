import { VscChromeMinimize } from "react-icons/vsc";
import { useEffect, useState } from "react";
import TerminalPath from "./TerminalPath";

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
      <h1>Random Tech Quote Generator</h1>

      <div className="flex flex-row justify-evenly items-center text-center">
        <div
          className="flex flex-col
                        justify-start

                        w-96
                        h-96
                        px-1
                        pt-4
                        bg-darkPurple
                        text-brightGreen
                        border-brightGreen
                        border-2
                        leading-9
                        font-mono
                        text-sm
                        font-medium
                        rounded-md"
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
      <button id="new-quote" onClick={fetchData} className="text-center">
        Get New Quote
      </button>
    </div>
  );
};

export default Quote;
