import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store/index";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

// ── Landing Page ──────────────────────────────────────────────────────────────

function LandingPage({ onGetStarted }) {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="landing-leaf">🌿</div>
        <h1>
          Welcome to <span>Paradise Nursery</span>
        </h1>
        <p className="landing-tagline">
          Bring nature indoors. Discover handpicked houseplants that breathe
          life, colour, and calm into every corner of your home.
        </p>
        <button className="btn-get-started" onClick={onGetStarted}>
          Get Started 🌱
        </button>
      </div>
    </div>
  );
}

// ── App Root ──────────────────────────────────────────────────────────────────

function AppContent() {
  const [page, setPage] = useState("landing"); // "landing" | "products" | "cart"

  const navigate = (target) => setPage(target);

  return (
    <>
      {page === "landing" && (
        <LandingPage onGetStarted={() => navigate("products")} />
      )}
      {page === "products" && (
        <ProductList onNavigate={navigate} />
      )}
      {page === "cart" && (
        <CartItem onNavigate={navigate} />
      )}
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
