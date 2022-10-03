import './footer.css';
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="footer">
      <Link to="/react-first">
        <a href='#'>BACK</a>
      </Link>
    </div>
  );
}

export default Footer;




