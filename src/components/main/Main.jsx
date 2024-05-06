import { useContext } from "react";
import { Context } from "../../contextAPI/Context";
import { assets } from "../../assets/assets";

import "./main.css";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user-icon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Teach me the concept of game theory in simple terms.</p>
                <img src={assets.compass_icon} />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: Urban Planning.</p>
                <img src={assets.bulb_icon} />
              </div>
              <div className="card">
                <p>
                  Create an easy to follow outline for a home routine:
                  organizing my closet.
                </p>
                <img src={assets.message_icon} />
              </div>
              <div className="card">
                <p>
                  Come up with an idea for mocktail using club soda, passion
                  fruit, and mint.
                </p>
                <img src={assets.code_icon} />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="user" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="gemini" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="gallery_icon" />
              <img src={assets.mic_icon} alt="mic_icon" />
              {input ? (
                <img
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  alt="send_icon"
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display the innacurate info, including about people, so
            double-check its responsea. Your Privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
