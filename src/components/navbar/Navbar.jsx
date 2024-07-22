import { Link } from 'react-router-dom'
import './Navbar.css'
import nav from './nav'
const Navbar = () => {
  return (
    <section id="navbar">
      <nav className="navbar navbar-expand-sm bg-success navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to={'/'}>GLITCH</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ms-auto">
              {
                nav.map(({ id, title, link, icons }) => (
                  <li className="nav-item" key={id}>
                    <Link className="nav-link d-flex align-items-center gap-2" to={link}><i>{icons}</i> {title}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar