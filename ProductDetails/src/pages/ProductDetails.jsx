import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Details for ID: {id}</h2>
      <button onClick={() => navigate("/")}>⬅ Back to Products</button>
    </div>
  );
}
