import React, { Component } from "react";
import spinner from "../../assets/images/spinner.svg";

export default class ShortenURL extends Component {
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
        longUrl: typedUrl,
        shortenUrl,
      });
      this.setState({ urls, typedUrl: "", isShortening: false });
      console.log(this.state.urls);
    } catch (error) {
      this.setState({ isValidUrl: false, isShortening: false });
    }
  };

  render() {
    const { typedUrl, isValidUrl, isEmpty, isShortening } = this.state;
    return (
      <div className="container center form-wrapper">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="width--100">
            <input
              className={`input ${isEmpty | !isValidUrl && "input--error"}`}
              type="text"
              placeholder="Shorten a link here..."
              value={typedUrl}
              onChange={this.handleChange}
            />
            {!isValidUrl && <span className="warning">Not valid link or slow connection<span className="emoji">🤭</span>, please check and try again.</span>}
            {isEmpty && <span className="warning">Please add a link <span className="emoji">😘</span></span>}
          </div>
          {isShortening ? (
            <span className="spinner center">
              <img className="loading--small" src={spinner} />
            </span>
          ) : (
            <button className="btn btn--cyan form__btn" type="submit">
              Shorten it!
            </button>
          )}
        </form>
      </div>
    );
  }
}
