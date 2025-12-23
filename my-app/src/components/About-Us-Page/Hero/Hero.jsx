import { useState, useEffect } from "react";
import "./Hero.css";

function Hero() {
  const slogans = [
    "Get to know the people behind our platform.",
    "Discover our mission and vision.",
    "Meet our team of talented individuals."
  ];

  const [sentence, setSentence] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSentence((sentence) => (sentence + 1) % slogans.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className="hero">
      <div className="layer"></div>
      <div className="hero-text">
        <h1>About Our Team</h1>
        <p key={sentence} className="fade-text">
          {slogans[sentence]}
        </p>
        <button className="hero-btn" onClick={() => document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" })}>Our Mission</button>
      </div>
    </section>

  );
}

export default Hero;
