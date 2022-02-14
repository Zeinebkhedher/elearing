import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderLogin from "./HeaderLogin/HeaderLogin";
import LeftLogin from "./LeftLogin/LeftLogin";
import RightLogin from "./RightLogin/RightLogin";
import SignupForm from "./RightLogin/SignupForm/SignupForm";
function LoginPage() {
  return (
    <>
      <Container fluid class="bg-light-100">
        <Row>
          <HeaderLogin />
        </Row>
        <Row>
          <Col md={6}>
            <LeftLogin />
          </Col>
          <Col md={6}>
            <RightLogin />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LoginPage;
