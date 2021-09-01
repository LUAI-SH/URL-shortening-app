import React, { Component } from "react";

export default class ShortenURL extends Component {
  constructor() {
    super();
    this.state = {
      typedUrl: "",
      urls: [],
    };

    this.shortenApi = "https://api.shrtco.de/v2/shorten?url=";

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    let typedUrl = event.target.value;
    this.setState({ typedUrl });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    let { typedUrl, urls } = this.state;
    const existedUrl = urls.filter((url) => url.longUrl === typedUrl).length;
    console.log(existedUrl);
    if (existedUrl) {
      console.log("this URL alredy exist");
      return;
    }
    try {
      let response = await (
        await fetch(`${this.shortenApi}${typedUrl}`)
      ).json();
      let { full_short_link: shortenUrl } = response.result;
      let { urls } = this.state;
      urls.push({
        longUrl: typedUrl,
        shortenUrl,
      });
      this.setState({ urls, typedUrl: "" });
      console.log(this.state.urls);
    } catch (error) {
      console.log("Error while shortening Url");
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="url-input">Enter URL: </label>
          <input
            type="url"
            value={this.state.typedUrl}
            onChange={this.handleChange}
            id="url-input"
          />
          <button type="submit" disabled={!this.state.typedUrl}>
            Shorten it!
          </button>

          {/* <input type="submit" value="Submit" /> */}
        </form>
      </div>
    );
  }
}
