import React from "react";
import spinner from "../../assets/images/spinner.svg";

export default function ShortenURL(props) {
  const {userInput, isShortening} = props;
  
  return (
    <div className="container center pad-horizontal move-up ">
      <div className="form-wrapper">
        <form className="form" onSubmit={props.onSubmit}>
          <div className="width--100">
            <input
              className={`input ${
                userInput.isEmpty | !userInput.isValidUrl
                  ? "input--error animate__animated animate__shakeX"
                  : ""
              }`}
              type="text"
              placeholder="Shorten a link here..."
              value={userInput.typedText}
              onChange={props.onChange}
            />
            {!userInput.isValidUrl && (
              <span className="warning">
                Not valid link or slow connection
                <span className="emoji">🤭</span>, please check and try again.
              </span>
            )}
            {userInput.isEmpty && (
              <span className="warning">
                Please add a link <span className="emoji">😘</span>
              </span>
            )}
          </div>
          {isShortening ? (
            <span className="spinner center">
              <img className="loading--small" src={spinner} alt="Loading indicator"/>
            </span>
          ) : (
            <button className="btn btn--cyan form__btn" type="submit">
              Shorten it!
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
