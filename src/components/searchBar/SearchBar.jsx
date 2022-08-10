import Post from "../post/Post";
import "./searchBar.css";

export default function SearchBar({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
