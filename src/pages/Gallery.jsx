import { useState } from "react";

import "../assets/Gallery.css";
import dubai from "../assets/dubai.jpg";
import italy from "../assets/italy.jpg";
import maldives from "../assets/maldives.jpg";
import paris from "../assets/paris.jpg";
import singapore from "../assets/singapore.jpg";
import thailand from "../assets/thailand.jpg";
import london from "../assets/london.jpg";
import san from "../assets/san.jpg";
import australia from "../assets/australia.jpg";

function Gallery() {
  const [likedPlaces, setLikedPlaces] = useState([]);
  const toggleLike = (place) => {
  if (likedPlaces.includes(place)) {
    setLikedPlaces(likedPlaces.filter((item) => item !== place));
  } else {
    setLikedPlaces([...likedPlaces, place]);
  }
};
  return (
    <div className="gallery-section py-5">
      <div className="container">
        <h1 className="text-center mb-5 fw-bold text-white">Travel Gallery 🌍</h1>

        <div className="row text-center">

          <div className="col-md-4 mb-4">
            <div className="image-card">
              <img src={dubai} alt="Dubai" className="img-fluid" />
               <span className="heart-icon"onClick={() => toggleLike("Dubai")}>
                {likedPlaces.includes("Dubai") ? "❤️" : "🤍"}
                </span>
            </div>
            <h5 className="fw-semibold mb-4 text-white">Dubai</h5>
          </div>

          <div className="col-md-4 mb-4">
            <div className="image-card">
              <img src={italy} alt="Italy" className="img-fluid" />
              <span className="heart-icon"onClick={() => toggleLike("Italy")}>
                {likedPlaces.includes("Italy") ? "❤️" : "🤍"}
                </span>
            </div>
            <h5 className="fw-semibold mb-4 text-white">Italy</h5>
          </div>

          <div className="col-md-4 mb-4">
            <div className="image-card">
              <img src={maldives} alt="Maldives" className="img-fluid" />
              <span className="heart-icon" onClick={() => toggleLike("Maldives")}>
                 {likedPlaces.includes("Maldives") ? "❤️" : "🤍"}
                 </span>
            </div>
            <h5 className="fw-semibold mb-4 text-white">Maldives</h5>
          </div>

          <div className="col-md-4 mb-4">
            <div className="image-card">
              <img src={paris} alt="Paris" className="img-fluid" />
              <span className="heart-icon"
                onClick={() => toggleLike("Paris")}>
                  {likedPlaces.includes("Paris") ? "❤️" : "🤍"}
                  </span>
            </div>
            <h5 className="fw-semibold mb-4 text-white">Paris</h5>
          </div>

          <div className="col-md-4 mb-4">
            <div className="image-card">
              <img src={singapore} alt="Singapore" className="img-fluid" />
              <span className="heart-icon" onClick={() => toggleLike("Singapore")}>
                 {likedPlaces.includes("Singapore") ? "❤️" : "🤍"}
                 </span>
            </div>
            <h5 className="fw-semibold mb-4 text-white">Singapore</h5>
          </div>

          <div className="col-md-4 mb-4">
            <div className="image-card">
              <img src={thailand} alt="Thailand" className="img-fluid" />
              <span className="heart-icon" onClick={() => toggleLike("Thailand")}>
                 {likedPlaces.includes("Thailand") ? "❤️" : "🤍"}
                 </span>
            </div>
            <h5 className="fw-semibold mb-4 text-white">Thailand</h5>
          </div>

          <div className="col-md-4 mb-4">
            <div className="image-card">
              <img src={london} alt="London" className="img-fluid" />
              <span className="heart-icon"onClick={() => toggleLike("London")}>
                {likedPlaces.includes("London") ? "❤️" : "🤍"}
                </span>
            </div>
            <h5 className="fw-semibold mb-4 text-white">London</h5>
          </div>

          <div className="col-md-4 mb-4">
            <div className="image-card">
              <img src={san} alt="San Francisco" className="img-fluid" />
              <span className="heart-icon" onClick={() => toggleLike("San Francisco")}>
                 {likedPlaces.includes("San Francisco") ? "❤️" : "🤍"}
                 </span>
            </div>
            <h5 className="fw-semibold mb-4 text-white">San Francisco</h5>
          </div>

          <div className="col-md-4 mb-4">
            <div className="image-card">
              <img src={australia} alt="Australia" className="img-fluid" />
              <span className="heart-icon" onClick={() => toggleLike("Australia")}>
                 {likedPlaces.includes("Australia")  ? "❤️" : "🤍"}
                 </span>
            </div>
            <h5 className="fw-semibold mb-4 text-white">Australia</h5>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Gallery;