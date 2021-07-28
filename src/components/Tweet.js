const Tweet = () => {
  return (
    <div>
      <a
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
        <p className="customFont uppercase">Tweet Me</p>
      </a>
      {/* <a
        id="tweet-quote"
        href="twitter.com/intent/tweet"
        className="text-pinkPurple hover:text-brightGreen"
      >
        <p className="customFont uppercase">Tweet Me</p>
      </a> */}
    </div>
  );
};

export default Tweet;
