import {
  FaInstagram,
  FaPinterestSquare,
  FaTwitterSquare,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo-container">
        <img
          src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1701054646/bo2tsh2demknhiaoki6g.png"
          alt="website-footer-logo"
          className="footer-image"
        />
        <h1 className="footer-heading">Tasty Kitchen</h1>
      </div>
      <p className="footer-paragraph">
        The only thing we are serious about is food. Contact us on
      </p>
      <div className="footer-icons-container">
        <FaPinterestSquare className="logos" testid="pintrest-social-icon" />
        <FaInstagram className="logos" testid="instagram-social-icon" />
        <FaTwitterSquare className="logos" testid="twitter-social-icon" />
        <FaFacebookSquare className="logos" testid="facebook-social-icon" />
      </div>
    </div>
  )
}
