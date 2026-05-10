import React from "react";

function AboutUs() {
  return (
    <div className="about-us">
      <h2>About Paradise Nursery</h2>
      <p>
        Welcome to <strong>Paradise Nursery</strong> — your premier destination for
        lush, vibrant houseplants. Founded in 2010, we believe that every home
        deserves a touch of nature's beauty.
      </p>
      <p>
        Our expert horticulturists hand-select each plant to ensure you receive
        only the healthiest, most beautiful specimens. From easy-care succulents
        to statement tropical foliage, we have the perfect plant for every space
        and skill level.
      </p>
      <p>
        At Paradise Nursery, we're more than just a plant shop — we're a
        community of plant lovers dedicated to helping you create your own indoor
        paradise. Every purchase comes with care instructions and our 30-day
        happiness guarantee.
      </p>
      <div className="about-values">
        <div className="value-card">
          <span className="value-icon">🌱</span>
          <h3>Sustainably Sourced</h3>
          <p>All plants are ethically grown and eco-friendly packaged.</p>
        </div>
        <div className="value-card">
          <span className="value-icon">💚</span>
          <h3>Expert Care Tips</h3>
          <p>Every plant comes with detailed care instructions.</p>
        </div>
        <div className="value-card">
          <span className="value-icon">🚚</span>
          <h3>Safe Delivery</h3>
          <p>Specially packaged to arrive healthy at your door.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
