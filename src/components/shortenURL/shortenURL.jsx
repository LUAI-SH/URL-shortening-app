import React, { Component } from "react";
import spinner from "../../assets/images/spinner.svg";

export default class ShortenURL extends Component {

  render() {
    const { typedUrl, isValidUrl, isEmpty, isShortening } = this.props.state;
    return (
      <div className="container center form-wrapper">
        <form className="form" onSubmit={this.props.onSubmit}>
          <div className="width--100">
            <input
              className={`input ${isEmpty | !isValidUrl && "input--error"}`}
              type="text"
              placeholder="Shorten a link here..."
              value={typedUrl}
              onChange={this.props.onChange}
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
