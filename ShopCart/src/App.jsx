import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./features/cartSlice";
import "./App.css";

function App() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const mockItem = { id: 1, title: "Laptop" };

  return (
    <div className="app-container">
      <div className="cart-box">
        <h2>🛒 Redux Shopping Cart</h2>

        <div className="button-group">
          <button className="add-btn" onClick={() => dispatch(addToCart(mockItem))}>
            Add to Cart
          </button>

          <button
            className="remove-btn"
            onClick={() => dispatch(removeFromCart(mockItem.id))}
          >
            Remove from Cart
          </button>
        </div>

        <p className="cart-count">Items in cart: {cart.length}</p>
      </div>
    </div>
  );
}

export default App;
