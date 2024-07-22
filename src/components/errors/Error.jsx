
const Error = ({ error }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 mx-auto">
          <div className="card">
            <p className="py-2 text-center text-white rounded bg-danger">{error}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error