import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  selectCartItems,
  selectCartTotal,
  selectCartCount,
} from "../store/CartSlice";

// ── Navbar (shared) ───────────────────────────────────────────────────────────

function Navbar({ cartCount, onNavigate }) {
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

// ── CartItem Component ────────────────────────────────────────────────────────

function CartItem({ onNavigate }) {
  const dispatch = useDispatch();
  const items    = useSelector(selectCartItems);
  const total    = useSelector(selectCartTotal);
  const cartCount = useSelector(selectCartCount);

  const handleCheckout = () => {
    alert("🌿 Coming Soon! Thank you for shopping at Paradise Nursery.");
  };

  return (
    <div>
      <Navbar cartCount={cartCount} onNavigate={onNavigate} />

      <div className="cart-page">
        <h2>🛒 Your Shopping Cart</h2>

        {items.length === 0 ? (
          <div className="cart-empty">
            <div className="empty-icon">🪴</div>
            <h3>Your cart is empty</h3>
            <p>Browse our collection and add some plants!</p>
            <button
              className="btn-checkout"
              style={{ marginTop: "1rem" }}
              onClick={() => onNavigate("products")}
            >
              Shop Plants
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div className="cart-item" key={item.id}>
                  {/* Thumbnail */}
                  <img src={item.image} alt={item.name} />

                  {/* Info */}
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p className="cart-item-unit">Unit price: ${item.price.toFixed(2)}</p>
                    <p className="cart-item-total">
                      Subtotal: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="qty-controls">
                    <button
                      className="qty-btn"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  {/* Delete */}
                  <button
                    className="btn-delete"
                    onClick={() => dispatch(removeItem(item.id))}
                    aria-label={`Remove ${item.name}`}
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="cart-summary">
              <p className="cart-total">
                Total: <strong>${total.toFixed(2)}</strong>
              </p>
              <div className="cart-actions">
                <button
                  className="btn-continue"
                  onClick={() => onNavigate("products")}
                >
                  ← Continue Shopping
                </button>
                <button className="btn-checkout" onClick={handleCheckout}>
                  Checkout (Coming Soon)
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
