import Cards from "../components/cards/Cards"
import Error from "../components/errors/Error"
import useGlitch from "../components/hooks/useGlitch"
import Loader from "../components/loader/Loader"

const Blog = () => {
  const { posts, loading, error } = useGlitch('http://localhost:1234/blogs')
  return (
    <section>
      <div className="container py-3">
        <div className="row gap-3">
          {
            error && <Error error={error} />
          }
          {
            loading && <Loader />
          }
          {
            posts && <Cards posts={posts} />
          }
        </div>
      </div>
    </section>
  )
}

export default Blog