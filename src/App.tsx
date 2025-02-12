import { useState } from "react";
import "./App.css";
import Yes from "./Yes";
function App() {
  const messages = [
    "Are you sure?🤔",
    "Really sure??😒",
    "Pookie please...🙃",
    "Just think about it..!😘",
    "If you say no, I will be really sad...😓",
    "I will be very sad...😞",
    "I will be very very very sad...😭",
    "Ok fine, I will stop asking...😔",
    "Just kidding, say yes please! ❤️",
  ];
  const gifurl = [
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW5lenZyZHI5OXM2eW95b3pmMG40cWVrMDhtNjVuM3A4dGNxa2g2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/VM1fcpu2bKs1e2Kdbj/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjE2YzJ3Nmo0Zjd4dnZydXM1dHI4ZDRnOTI5Y3p0ODNpZXh5Z2JkaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XaYigEghuWAyS3HOoA/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM25jZHo0d2lpYXVvMGR0a2UxYXBrdGwwOTdsdDZna3Y3emMzanZ4NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/aU1zEDJ9xPVjFBbtvJ/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGIzemJocTFkcjR5b3JzNWRxdGlqczRjeDR0YW9heWxxd3B4Zm0wNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/27rspbAAESlzzFtN2e/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDBhZmNnMWo5aXQ1ejVpdjh3Y2MyMzh0eHg2NXp4OWg2bTJhNnRwMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/xBzJL8IAjDktZywKee/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzUyZ2NxYzdmOTExNzV3Z2xzNmplZzJqeWdqd3FyYXRhMGVtaHFxNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/kcyx4ajxyWRelw1uPJ/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWU5N3g5bDF1Nm9pbzA3MHhjamE3ZWtncWthNXF2eXRpc2xnd3pvNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/N0NrT8LOweVJBau89o/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3o4c2FpZjQxdjJkOWo0ZXU1dGhsa2w3dGdzNWR6ZTFxaXJxM3MxcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/dEZKOYuY4oQhMOZGEU/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmxrZjR6d2I5ZGRzMjNkbnBxcHh0Ymhmcjlsa3djanJpMDNoMXI1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/wNk71OcVtOPncxNHVT/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3BjMjJ6aHZpcjVwejNkNW5kc3J0MHhyeGwyeW93Y2FmajU1cTExYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/IEm8kcqLVCctHJ1kWm/giphy.gif",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [GifUrl, setGifUrl] = useState(gifurl[0]);
  const [noButtonText, setNoButtonText] = useState<string>("No");
  const [noButtonSize, setNoButtonSize] = useState(100);
  const [yesButtonSize, setYesButtonSize] = useState(100);
  const [showNoButton, setShowNoButton] = useState(true);
  const [showLoveMessage, setShowLoveMessage] = useState(false);

  const handleNoButton = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    if (currentIndex > -1) {
      setGifUrl(gifurl[currentIndex]);
      setNoButtonText(messages[currentIndex]);
      setNoButtonSize(noButtonSize);
      setYesButtonSize(yesButtonSize * 1.5);
    } else {
      setShowNoButton(false);
    }
  };

  const handleYesClick = () => {
    setShowLoveMessage(true);
  };

  return (
    <>
      {!showLoveMessage && showNoButton && (
        <div className="container">
          <h1>Dear Hayatim, will you be my forever valentine?</h1>
          <div className="buttons">
            <button
              className="yes-button"
              onClick={handleYesClick}
              style={{ fontSize: `${yesButtonSize}%` }}
            >
              Yes
            </button>
            <button
              className="no-button"
              onClick={handleNoButton}
              style={{ fontSize: `${noButtonSize}%` }}
            >
              {noButtonText}
            </button>
          </div>
          <div className="gif_container">
            <img src={GifUrl} alt="Cute GIF" />
          </div>
        </div>
      )}
      {showLoveMessage && <Yes />}
    </>
  );
}

export default App;
