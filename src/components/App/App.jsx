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
  const [state, setState] = useState({
    typedUrl: "",
    urls: [],
    isValidUrl: true,
    isEmpty: false,
    isShortening: false,
  });

  useEffect(() => {
    let grabUrls = localStorage.getItem("shortlyUrls");
    if (grabUrls) {
      grabUrls = JSON.parse(grabUrls);
      setState({ ...state,  urls: grabUrls });
    }
  }, []);

  function handleChange(e) {
    let typedUrl = e.target.value;
    setState({ ...state, typedUrl, isEmpty: false, isValidUrl: true });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let { typedUrl, urls } = state;
    if (typedUrl === "") {
      setState({ ...state, isEmpty: true });
      return;
    }
    const isExistedUrl = urls.find((url) => url.typedUrl === typedUrl);
    if (isExistedUrl) {
      alert("this link already shortened");
      return;
    }
    try {
      setState({ ...state, isShortening: true });
      let response = await (await fetch(`${shortenApi}${typedUrl}`)).json();
      let { full_short_link: shortenUrl } = response.result;
      let { urls } = state;
      urls.push({
        typedUrl,
        shortenUrl,
      });
      const stringifiedUrls = JSON.stringify(urls);
      localStorage.setItem("shortlyUrls", stringifiedUrls);
      setState({ ...state, urls, typedUrl: "", isShortening: false });
    } catch (error) {
      setState({ ...state, isValidUrl: false, isShortening: false });
    }
  }

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <ShortenURL
        state={state}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <LinksCard links={state.urls} />
      <Statistics />
      <CallOut />
      <Footer />
    </div>
  );
}
