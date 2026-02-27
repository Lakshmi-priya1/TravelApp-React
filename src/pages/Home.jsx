import { useNavigate } from "react-router-dom";
import "../assets/Home.css";
import travel from "../assets/travel1.png";

function Home() {

  const navigate = useNavigate();   

  return (
    <div
      className="home-hero d-flex align-items-center justify-content-center text-center"
      style={{ backgroundImage: `url(${travel})` }}
    >
      <div className="overlay-content">
        <h1 className="display-3 text-white fw-bold">
          Explore The World 🗺️
        </h1>

        <p className="lead text-white mt-3">
          Discover beautiful destinations, plan your dream vacation,
          and create unforgettable memories.
        </p>

        <button 
          className="btn btn-primary btn-lg mt-4"
          onClick={() => navigate("/about")}   
        >
          Start Your Journey
        </button>
      </div>
    </div>
  );
}

export default Home;