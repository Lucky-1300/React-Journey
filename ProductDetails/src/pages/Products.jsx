import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Headphones" },
];

export default function Products() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Products</h2>
      {products.map((p) => (
        <div key={p.id}>
          <Link to={`/product/${p.id}`}>{p.name}</Link>
        </div>
      ))}
    </div>
  );
}
