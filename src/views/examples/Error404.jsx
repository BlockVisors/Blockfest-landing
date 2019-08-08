/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.jsx";
import DemoFooter from "components/Footers/DemoFooter.jsx";

class Error400 extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("error-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("error-page");
  }
  render() {
    return (
      <>
        <ColorNavbar />
        <div className="wrapper" ref="wrapper">
          <div className="page-header error-page header-filter">
            <div
              className="page-header-image"
              style={{
                backgroundImage:
                  "url(" + require("assets/img/braden-collum.jpg") + ")"
              }}
            />
            <Container>
              <Row>
                <Col md="12">
                  <h1 className="title">404</h1>
                  <h2 className="description">Page not found :(</h2>
                  <h4 className="description">
                    Ooooups! Looks like you got lost.
                  </h4>
                </Col>
              </Row>
            </Container>
          </div>
          <DemoFooter />
        </div>
      </>
    );
  }
}

export default Error400;
