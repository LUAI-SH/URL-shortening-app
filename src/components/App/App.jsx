import React, { useState, useEffect } from "react";

// Components
import NavBar from "../NavBar/NavBar.jsx";
import Hero from "../Hero/Hero.jsx";
import ShortenURL from "../ShortenURL/ShortenURL.jsx";
import LinksCard from "../LinksCard/LinksCard.jsx";
import Statistics from "../Statistics/Statistics.jsx";
import CallOut from "../CallOut/CallOut.jsx";
import Footer from "../Footer/Footer.jsx";

// Styles
import "../../assets/styles/scss/pages/_home.scss";

const shortenApi = "https://api.shrtco.de/v2/shorten?url=";

export default function App() {
  const [urls, setUrls] = useState([]);
  const [isShortening, setIsShortening] = useState(false);
  const [userInput, setUserInput] = useState({
    typedText: "",
    isValidUrl: true,
    isEmpty: false,
  });

  const getUrlsFromLocalStorage = () => {
    let grabUrls = localStorage.getItem("shortlyUrls");
    if (grabUrls) {
      return JSON.parse(grabUrls);
    }
    return null;
  };

  useEffect(() => {
    let urls = getUrlsFromLocalStorage();
    if (urls) setUrls(urls);
  }, []);

  function handleChange(e) {
    let typedText = e.target.value;
    setUserInput({
      ...userInput,
      typedText: typedText,
      isEmpty: false,
      isValidUrl: true,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let { typedText } = userInput;
    if (typedText === "") {
      setUserInput({ ...userInput, isEmpty: true });
      return;
    }
    const isExistedUrl = urls.find((url) => url === typedText);
    if (isExistedUrl) {
      alert("This link was already shortened");
      return;
    }
    try {
      setIsShortening(true);
      let response = await (await fetch(`${shortenApi}${typedText}`)).json();
      let { full_short_link: shortenUrl } = response.result;
      const newUrls = [
        ...urls,
        {
          longUrl: typedText,
          shortenUrl,
        },
      ];
      localStorage.setItem("shortlyUrls", JSON.stringify(newUrls));
      setUrls(newUrls);
      setIsShortening(false);
      setUserInput({ ...userInput, typedText: "" });
    } catch (error) {
      setIsShortening(false);
      setUserInput({ ...userInput, isValidUrl: false });
    }
  }

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <ShortenURL
        userInput={userInput}
        isShortening={isShortening}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <LinksCard links={urls} />
      <Statistics />
      <CallOut />
      <Footer />
    </div>
  );
}
