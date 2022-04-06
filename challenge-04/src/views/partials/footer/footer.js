import "bootstrap/dist/css/bootstrap.min.css";
import { React } from "reactstrap";
import "./footer.css";
import logo from "../../../assets/img/list_item.png";

function Foot() {
  return (
    <div>
      <div className="test"></div>
      <div className="footer">
        <div className="isi">
          <div className="col1">
            <span>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</span>
            <span>binarcarrental@gmail.com</span>
            <span>081-233-334-808</span>
          </div>
          <div className="col2">
            <span>Our services</span>
            <span>Why Us</span>
            <span>Testimonial</span>
            <span>FAQ</span>
          </div>
          <div className="col3">
            <span>Connect with us</span>
            <nav className="icon">
              <img src={logo} className="as" alt="coba" />
            </nav>
          </div>
          <div className="col4">
            <span>Copyright Binar 2022</span>
            <div className="logo"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foot;
