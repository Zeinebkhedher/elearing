import React from "react";
import kouraSignin from "../../../../Assets/Images/kouraSignin.png";
import kouraBleuSignin from "../../../../Assets/Images/kouraBleuSignin.png";
import welcomeSignin from "../../../../Assets/Images/welcomeSignin.png";
import Decor from "../../../../Assets/Images/Decor.png";
import { Row, Col, Container } from "react-bootstrap";
function LeftLogin() {
  return (
    <Container fluid>
      <Row>
        <div className="flex justify-center pt-32">
          <p className="text-4xl text-Darkblue-100">
            "We give you <span className="text-Turquoise-100">Opportunity</span>
            <br /> and <span className="text-Turquoise-100">
              Perspective
            </span>{" "}
            to have <br />
            <span className="text-Turquoise-100">Useful Skills</span>"
          </p>
        </div>
      </Row>
      <Row>
        <Col>
          <img src={kouraSignin} alt="koura_login" class="w-32 pt-32" />
        </Col>
        <Col>
          <img src={welcomeSignin} alt="welcome" class="w-[400px] h-[400px]" />
        </Col>
      </Row>
    </Container>
  );
}

export default LeftLogin;
