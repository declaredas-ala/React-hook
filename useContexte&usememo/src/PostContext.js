import { createContext, useState } from "react"


const PostContext = () => {
    const AppContext=createContext()
  return (
    <div>
      
      <AppContext.Provider
      value={{
        posts,
        handleClearPosts,
        searchQuery,
        setSearchQuery,
        Results,
        SearchPosts,
      }}
    >
      <section>
        <button
          onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
          className="btn-fake-dark-mode"
        >
          {isFakeDark ? "☀️" : "🌙"}
        </button>

        <Header />
      <Main posts={searchedPosts} onAddPost={handleAddPost} />
      <Archive onAddPost={handleAddPost} />
      <Footer />
    </section>
    </AppContext.Provider>
    </div>
  )
}

export default PostContext
