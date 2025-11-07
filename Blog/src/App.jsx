
import { Routes, Route, Navigate } from "react-router-dom";
import Blog from "./pages/Blog.jsx";
import Post from "./pages/Post.jsx";

function App() {
  return (
    <Routes>
      {/* Redirect / to /blog */}
      <Route path="/" element={<Navigate to="/blog" />} />

      {/* Blog and nested post */}
      <Route path="/blog" element={<Blog />}>
        <Route path=":postId" element={<Post />} />
      </Route>
    </Routes>
  );
}

export default App;
