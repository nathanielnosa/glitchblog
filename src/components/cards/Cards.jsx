import { Link } from "react-router-dom"

const Cards = ({ posts, title, handleDelete }) => {
  // const post = props.posts
  return (
    <div className="container py-3">
      <div className="headings text-center fw-bold h3 py-3">{title}</div>
      <div className="row">
        {
          posts.map(({ id, title, author, body }) => (
            <div className="col-md-4" key={id}>
              <div className="card">
                <div className="card-header">{title}</div>
                <div className="card-body">
                  <p className="lead">{body}</p>
                  <p className="lead">Author: {author}</p>
                </div>
                <div className="card-footer">
                  <div className="d-flex justify-content-between">
                    <Link to={`detail/${id}`} className="btn btn-success">Read More</Link>
                    <button className="btn btn-danger" onClick={() => handleDelete(id)}>Delete Post</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cards