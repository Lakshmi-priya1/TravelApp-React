import { useState } from "react";
import "../assets/NotFound.css";
import { useNavigate } from "react-router-dom";
function NotFound() {

  const [position, setPosition] = useState({
    top: "50%",
    left: "50%"
  });

  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const movePlane = () => {
    const randomTop = Math.floor(Math.random() * 80);
    const randomLeft = Math.floor(Math.random() * 80);

    setPosition({
      top: randomTop + "%",
      left: randomLeft + "%"
    });

    setScore(prev => prev + 1);
  };

  return (
    <div className="notfound-container">
      <h1 className="error-text">404</h1>
      <p className="p">Oops! Flight not found 😢</p>
      <p className="p">Catch the airplane ✈️</p>

      <h4>Score: {score}</h4>

      {score >= 3 && (
        <div className="win-section">
          <h3 className="win-text">
            🎉 You unlocked your journey!
          </h3>
          <button className="home-btn" onClick={() => navigate("/")} >
            🚀 Fly Back Home
          </button>
        </div>
        )
      }

      {score < 3 && (
         <span className="plane"
          style={{
             top: position.top,
             left: position.left
            }}
            onClick={movePlane}>
               ✈️
               </span>
              )}
    </div>
  );
}

export default NotFound;