import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import Hub from "../assets/img/Hub.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <h2 className="PRACHI">PRACHI</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/prachi-sharma-8b8071287"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/PrachiSharma26"><img src={Hub} alt="Icon" /></a>
              <a href="https://instagram.com/26_prax?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}