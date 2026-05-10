import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartCount } from "../store/CartSlice";
import AboutUs from "./AboutUs";

// ── Plant Data: 3 categories × 6 plants ──────────────────────────────────────

const plantData = [
  {
    category: "🌵 Succulents & Cacti",
    plants: [
      {
        id: "s1",
        name: "Echeveria",
        price: 8.99,
        description: "Rosette-shaped beauty with powdery blue-green leaves.",
        image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400&q=80",
      },
      {
        id: "s2",
        name: "Aloe Vera",
        price: 12.99,
        description: "Soothing gel-filled leaves, perfect for sunny windowsills.",
        image: "https://images.unsplash.com/photo-1596547609652-9cf5d8c76ea9?w=400&q=80",
      },
      {
        id: "s3",
        name: "Jade Plant",
        price: 14.99,
        description: "Lucky money tree with thick, shiny oval leaves.",
        image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=400&q=80",
      },
      {
        id: "s4",
        name: "Barrel Cactus",
        price: 10.99,
        description: "Structural ribbed cactus, virtually indestructible.",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&q=80",
      },
      {
        id: "s5",
        name: "Haworthia",
        price: 9.99,
        description: "Compact zebra-striped succulent, thrives in low light.",
        image: "https://images.unsplash.com/photo-1616500137522-a63e8f800a13?w=400&q=80",
      },
      {
        id: "s6",
        name: "String of Pearls",
        price: 16.99,
        description: "Cascading vines of perfect pearl-shaped leaves.",
        image: "https://images.unsplash.com/photo-1583912267550-d974963b749c?w=400&q=80",
      },
    ],
  },
  {
    category: "🌿 Tropical Foliage",
    plants: [
      {
        id: "t1",
        name: "Monstera Deliciosa",
        price: 34.99,
        description: "Iconic split leaves bring jungle drama to any room.",
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80",
      },
      {
        id: "t2",
        name: "Pothos",
        price: 11.99,
        description: "Nearly unkillable trailing vine in golden variegated green.",
        image: "https://images.unsplash.com/photo-1607672001872-3be4b0b87614?w=400&q=80",
      },
      {
        id: "t3",
        name: "Bird of Paradise",
        price: 49.99,
        description: "Dramatic paddle-shaped leaves; a living sculpture.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
      },
      {
        id: "t4",
        name: "Peace Lily",
        price: 18.99,
        description: "White blooms and glossy leaves — a classic air purifier.",
        image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=400&q=80",
      },
      {
        id: "t5",
        name: "Rubber Plant",
        price: 24.99,
        description: "Deep burgundy-green leaves on a stately upright stem.",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=80",
      },
      {
        id: "t6",
        name: "ZZ Plant",
        price: 22.99,
        description: "Glossy arching stems, tolerates neglect beautifully.",
        image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&q=80",
      },
    ],
  },
  {
    category: "🌸 Flowering Plants",
    plants: [
      {
        id: "f1",
        name: "Orchid",
        price: 29.99,
        description: "Exotic blooms that last for months with minimal care.",
        image: "https://images.unsplash.com/photo-1524598171347-2e58cb4c03e5?w=400&q=80",
      },
      {
        id: "f2",
        name: "African Violet",
        price: 13.99,
        description: "Compact rosettes with velvet leaves and vibrant purple flowers.",
        image: "https://images.unsplash.com/photo-1444930694458-01babf71ab07?w=400&q=80",
      },
      {
        id: "f3",
        name: "Anthurium",
        price: 27.99,
        description: "Glossy heart-shaped blooms in brilliant waxy red.",
        image: "https://images.unsplash.com/photo-1589974733025-0e22c2e7ad1e?w=400&q=80",
      },
      {
        id: "f4",
        name: "Bromeliad",
        price: 21.99,
        description: "Tropical star bursts of colour, low maintenance delight.",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&q=80",
      },
      {
        id: "f5",
        name: "Kalanchoe",
        price: 11.99,
        description: "Clusters of tiny flowers in red, orange, yellow, or pink.",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?w=400&q=80",
      },
      {
        id: "f6",
        name: "Begonia",
        price: 15.99,
        description: "Ruffled blooms and decorative foliage for shaded spots.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
      },
    ],
  },
];

// ── Navbar ────────────────────────────────────────────────────────────────────

function Navbar({ cartCount, onNavigate, page }) {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-brand" onClick={() => onNavigate("landing")}>
        🌿 Paradise Nursery
      </a>
      <ul className="navbar-links">
        <li>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("landing"); }}>
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("products"); }}>
            Plants
          </a>
        </li>
        <li>
          <a
            href="#"
            className="cart-link"
            onClick={(e) => { e.preventDefault(); onNavigate("cart"); }}
          >
            🛒 Cart <span className="cart-badge">{cartCount}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

// ── Main ProductList Component ────────────────────────────────────────────────

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const cartItems = useSelector((state) => state.cart.items);
  const [added, setAdded] = useState({});

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAdded((prev) => ({ ...prev, [plant.id]: true }));
  };

  return (
    <div className="product-page">
      <Navbar cartCount={cartCount} onNavigate={onNavigate} page="products" />

      <div className="product-hero">
        <h2>Our Plant Collection</h2>
        <p>Handpicked plants to bring life and colour to your home</p>
      </div>

      <div className="product-categories">
        <AboutUs />

        {plantData.map((cat) => (
          <section className="category-section" key={cat.category}>
            <h3 className="category-title">{cat.category}</h3>
            <div className="plant-grid">
              {cat.plants.map((plant) => (
                <div className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <div className="plant-card-body">
                    <p className="plant-name">{plant.name}</p>
                    <p className="plant-desc">{plant.description}</p>
                    <p className="plant-price">${plant.price.toFixed(2)}</p>
                  </div>
                  <button
                    className="btn-add"
                    onClick={() => handleAdd(plant)}
                    disabled={isInCart(plant.id) || added[plant.id]}
                  >
                    {isInCart(plant.id) || added[plant.id] ? "✓ Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
