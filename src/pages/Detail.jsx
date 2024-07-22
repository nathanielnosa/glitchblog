import { useParams } from "react-router-dom"
import useGlitch from "../components/hooks/useGlitch"
import Error from "../components/errors/Error"
import Loader from "../components/loader/Loader"

const Detail = () => {
  const { id } = useParams()
  const { posts, loading, error } = useGlitch(`http://localhost:1234/blogs/${id}`)

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {
              error && <Error error={error} />
            }
            {
              loading && <Loader />
            }
            {
              posts && <div>
                <div className="card">
                  <div className="card-header">{posts.title}</div>
                  <div className="card-body">
                    <p className="lead">{posts.body}</p>
                    <p className="lead">Author: {posts.author}</p>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Detail