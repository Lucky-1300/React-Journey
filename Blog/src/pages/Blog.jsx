import { Link, Outlet } from "react-router-dom";

export default function Blog() {
  const posts = [
    { id: 1, title: "Learning React Router" },
    { id: 2, title: "Understanding URL Params" },
    { id: 3, title: "Nested Routes Explained" },
  ];

  return (
    <div>
      <h1>Blog Page</h1>

      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <Link to={`${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Outlet />
    </div>
  );
}
