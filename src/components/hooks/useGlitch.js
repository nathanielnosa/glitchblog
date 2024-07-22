import { useEffect, useState } from "react"

const useGlitch = (url) => {
  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw Error('Data cannot be fetched')
      }) // gives result in json
      .then(data => {
        setPosts(data)
        setLoading(false)
        setError(null)
      }) // display the result
      .catch(err => {
        setError(err.message)
        setLoading(false)
      }) // catch error
  }, [url]);

  return {
    posts, loading, error
  }

}


export default useGlitch