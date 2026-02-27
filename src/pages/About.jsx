import { useState } from "react";
import "../assets/About.css";

function About() {
  const [booked, setBooked] = useState(false);
  return (
    <div className="about-section py-5">

      <div className="container text-center mb-5">
        <h1 className="fw-bold text-white">About Travel World ✈️</h1>
        <p className="text-light mt-3">
          We help you explore the world with comfort, safety, and unforgettable experiences.
        </p>
      </div>

      <div className="container mb-5">
        <div className="row align-items-center">

          <div className="col-md-6">
            <h3 className="fw-semibold text-white">Who We Are</h3>
            <p className="text-light mt-3">
              TravelWorld is a modern travel platform that offers curated travel
              packages for dream destinations around the globe.
              We believe travel is not just about places, but about experiences.
            </p>
          </div>

          <div className="col-md-6">
            <div className="about-card p-4 text-center bg-white shadow rounded">
              <h2 className="fw-bold text-primary">10K+</h2>
              <p className="text-muted">Happy Travelers</p>

              <h2 className="fw-bold text-primary mt-3">25+</h2>
              <p className="text-muted">Destinations</p>

              <h2 className="fw-bold text-primary mt-3">8+</h2>
              <p className="text-muted">Years Experience</p>

              <button className={booked ? "btn btn-info mt-3" : "btn btn-outline-primary mt-3"}
                onClick={() => setBooked(!booked)}
              >
                {booked ? "✈️ Enjoy your trip!" : "🌍 Book Now "}
               
               
                </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default About;