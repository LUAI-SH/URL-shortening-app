import React, { Component } from "react";

// Components
import NavBar from "../NavBar/NavBar.jsx";
import Hero from "../Hero/Hero.jsx";
import ShortenURL from "../ShortenURL/ShortenURL.jsx";
import LinksCard from "../LinksCard/LinksCard.jsx";
import Statistics from "../Statistics/Statistics.jsx";
import CallOut from "../CallOut/CallOut.jsx";
import Footer from "../Footer/Footer.jsx";

import "../../assets/styles/scss/pages/_home.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      typedUrl: "",
      urls: [],
      isValidUrl: true,
      isEmpty: false,
      isShortening: false,
    };

    this.shortenApi = "https://api.shrtco.de/v2/shorten?url=";

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let grabUrls = localStorage.getItem("shortlyUrls");
    if (grabUrls) {
      let { urls } = this.state;
      urls = JSON.parse(grabUrls);
      this.setState({ urls });
    }
  }

  handleChange = (event) => {
    let typedUrl = event.target.value;
    this.setState({ typedUrl, isEmpty: false, isValidUrl: true });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    let { typedUrl, urls } = this.state;
    if (typedUrl === "") {
      this.setState({ isEmpty: true });
      return;
    }
    const isExistedUrl = urls.find((url) => url.typedUrl === typedUrl);
    if (isExistedUrl) {
      alert("this link already shortened");
      return;
    }
    try {
      this.setState({ isShortening: true });
      let response = await (
        await fetch(`${this.shortenApi}${typedUrl}`)
      ).json();
      let { full_short_link: shortenUrl } = response.result;
      let { urls } = this.state;
      urls.push({
        typedUrl,
        shortenUrl,
      });
      const stringifiedUrls = JSON.stringify(urls);
      localStorage.setItem("shortlyUrls", stringifiedUrls);
      this.setState({ urls, typedUrl: "", isShortening: false });
    } catch (error) {
      this.setState({ isValidUrl: false, isShortening: false });
    }
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Hero />
        <ShortenURL
          state={this.state}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <LinksCard links={this.state.urls} />
        <Statistics />
        <CallOut />
        <Footer />
      </div>
    );
  }
}

export default App;
