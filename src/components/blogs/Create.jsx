import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Create = () => {
  const red = useNavigate()
  const [data, setData] = useState({
    title: '',
    author: '',
    body: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { title, author, body } = data
    fetch('http://localhost:1234/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(() => console.log({ 'Success': 'A new blog added successfully' }))
    red('/blogs')
  }
  return (
    <section className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-header display-5 text-center">Create Post</div>
              <div className="card-body">
                <form action="" onSubmit={handleSubmit}>
                  <div className="form-group my-2">
                    <input type="text" name='title' value={data.title} onChange={handleChange} className="form-control" placeholder="title" />
                  </div>
                  <div className="form-group my-2">
                    <input type="text" name="author" value={data.author} onChange={handleChange} className="form-control" placeholder="author" />
                  </div>
                  <div className="form-group my-2">
                    <textarea name="body" id="" value={data.body} onChange={handleChange} placeholder="Description" className="form-control">Description</textarea>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-success">Create Post</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Create