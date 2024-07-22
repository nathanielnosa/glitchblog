import { useState, useEffect } from "react"
import read from '../assets/img/bg-read.png'
import Cards from "../components/cards/Cards"
import Loader from "../components/loader/Loader"
import Error from "../components/errors/Error"
import useGlitch from "../components/hooks/useGlitch"
import { RiBloggerFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom"
const Home = () => {
  const red = useNavigate()
  let [blog_name, setBlog_name] = useState('WEBSITE') //reactive
  // const [posts, setPosts] = useState(null)
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(null)
  const { posts, loading, error } = useGlitch('http://localhost:1234/blogs')

  const onDelete = (id) => {
    // const deleteItems = posts.filter(post => post.id !== id)
    // // setPosts(deleteItems)
    fetch(`http://localhost:1234/blogs/${id}`, {
      method: 'DELETE'
    })
      .then(() => console.log("Blog deleted successfully"))
    red('/blogs')
  }

  const handleChange = () => {
    setBlog_name('BLOG')
  }

  return (
    <>
      <section id="banner">
        <div className="container py-4">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <h1 className="display-3">My <RiBloggerFill /> Blog {blog_name}</h1>
              <h3 className="display-4">Read with Love</h3>
              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repudiandae iusto cupiditate assumenda earum porro corrupti eveniet illo aperiam inventore?</p>
              <button className="btn btn-success" onClick={handleChange}>Read me</button>
            </div>
            <div className="col-md-6">
              <img width={1500} src={read} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      {/* blog post */}
      <section id="blogs">

        {
          loading && <Loader />
        }
        {
          error && <Error error={error} />
        }

        {
          posts && <Cards posts={posts} title='Latest Blog Posts' handleDelete={onDelete} />
        }

      </section>
    </>
  )
}

export default Home
