import { UiButton } from "../UiButton/Button";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Left Section: Logo & Social Media */}
        <div className="footer__brand">
          <svg className="footer__logo" xmlns="http://www.w3.org/2000/svg" width="139" height="20">
            <g fill="currentColor">
              <path d="M37.754 15.847c2.852 ..." />
            </g>
          </svg>

          <div className="footer__socials">
            <a href="#"><img src="icon-facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="icon-youtube.svg" alt="YouTube" /></a>
            <a href="#"><img src="icon-twitter.svg" alt="Twitter" /></a>
            <a href="#"><img src="icon-pinterest.svg" alt="Pinterest" /></a>
            <a href="#"><img src="icon-instagram.svg" alt="Instagram" /></a>
          </div>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="footer__nav">
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Right Section: Call-to-Action & Copyright */}
        <div className="footer__cta">
          <UiButton />
          <p className="footer__copyright">&copy; Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>

  );
};
