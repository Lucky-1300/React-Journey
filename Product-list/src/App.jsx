import ProductList from "./assets/Task-2/ProductList";

function App() {

  const products = [
    { id: 1, name: "Laptop", image: "/laptop.webp", price: "₹131999.00" },
    { id: 2, name: "Phone", image: "/phone.webp", price: "₹128900" },
    { id: 3, name: "Tablet", image: "/tablet.avif", price: "₹121999.00" },
  ];

  return (
    <>
      <h1>Lucky's Product Store 🛍️</h1>
      <ProductList items={products} />
    </>
  );
}

export default App;
