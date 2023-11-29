import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      className="error-image"
      src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1701082959/tfxkoc4xes1vv4dwyzdu.png"
      alt="not found"
    />
    <h1 className="not-found-heading">Page Not Found</h1>
    <p className="not-found-paragraph">
      We are sorry, the page you requested could not be found. Please go back to
      the homepage
    </p>
    <Link className="not-found-link" to="/">
      <button className="not-found-button" type="button">
        Home Page
      </button>
    </Link>
  </div>
)

export default NotFound
