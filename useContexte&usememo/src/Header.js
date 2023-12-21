import React, { useContext } from "react";
import { AppContext } from "./App"; // Adjust the path based on your project structure

export default function Header() {
  const { posts, handleClearPosts, searchQuery, setSearchQuery, Results, SearchPosts } =
    useContext(AppContext);

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results posts={posts} />
        <SearchPosts searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <button onClick={handleClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
