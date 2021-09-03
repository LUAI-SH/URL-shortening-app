import React, { Component } from "react";
import ShortenURL from "../ShortenURL/ShortenURL.jsx";
import LinksCard from "../LinksCard/LinksCard.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      typedUrl: "",
      urls: [{typedUrl: 'dsfcdsjkhfdjk', shortenUrl: 'kdjhcnjkdsbnckj'}],
      isValidUrl: true,
      isEmpty: false,
      isShortening: false,
    };

    this.shortenApi = "https://api.shrtco.de/v2/shorten?url=";

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const existedUrl = urls.filter((url) => url.longUrl === typedUrl).length;
    if (existedUrl) {
      alert("this URL already exist");
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
      this.setState({ urls, typedUrl: "", isShortening: false });
      console.log(this.state.urls);
    } catch (error) {
      this.setState({ isValidUrl: false, isShortening: false });
    }
  };

  render() {
    return (
      <div className="App">
        <ShortenURL
          state={this.state}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <LinksCard links={this.state.urls}/>
      </div>
    );
  }
}

export default App;
