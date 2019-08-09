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
// nodejs library that concatenates classes
import classnames from "classnames";
// ReactJS plugin for a nice carousel
import Slick from "react-slick";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
let slickHeader2Settings = {
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  className: "customer-logos",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

// custom previous button for the slick component
const PrevButton = props => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-prev slick-arrow"
      color="primary"
      aria-label="Previous"
      type="button"
      onClick={props.onClick}
    >
      <i className="tim-icons icon-minimal-left" />
    </Button>
  );
};
// custom next button for the slick component
const NextButton = props => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-next slick-arrow"
      color="primary"
      aria-label="Next"
      type="button"
    >
      <i className="tim-icons icon-minimal-right" onClick={props.onClick} />
    </Button>
  );
};

let slickHeader3Settings = {
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: <PrevButton />,
  nextArrow: <NextButton />,
  className: "center slider slick-buttons-under",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
};

class Headers extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="cd-section" id="partner-pg">
         
          {/* ********* HEADER 2 ********* */}
          <div className="header header-2">
            
            <div className="page-header">
              {/* <div
                className="page-header-image"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/matt-palmer.jpg") + ")"
                }}
              /> */}
              <Container>
                <div>
                <Row className="text-left">
                <Col lg="10" md="6" xs="12">
                    <h1 className="title">Check Our Our Featured Partners</h1>
                    <p className="description">
                      We are open to partnership/collaboration...feel free 
                      to reach out to us with your ideas..
                    </p>
                    </Col>
                </Row>
                </div>
              <Row>
                  <Slick {...slickHeader2Settings}>
                    <div className="slide">
                      <img
                        alt="..."
                        src="https://www.solodev.com/assets/carousel/image1.png"
                      />
                    </div>
                    <div className="slide">
                      <img
                        alt="..."
                        src="https://www.solodev.com/assets/carousel/image2.png"
                      />
                    </div>
                    <div className="slide">
                      <img
                        alt="..."
                        src="https://www.solodev.com/assets/carousel/image3.png"
                      />
                    </div>
                    <div className="slide">
                      <img
                        alt="..."
                        src="https://www.solodev.com/assets/carousel/image4.png"
                      />
                    </div>
                    <div className="slide">
                      <img
                        alt="..."
                        src="https://www.solodev.com/assets/carousel/image5.png"
                      />
                    </div>
                    <div className="slide">
                      <img
                        alt="..."
                        src="https://www.solodev.com/assets/carousel/image6.png"
                      />
                    </div>
                    <div className="slide">
                      <img
                        alt="..."
                        src="https://www.solodev.com/assets/carousel/image7.png"
                      />
                    </div>
                    <div className="slide">
                      <img
                        alt="..."
                        src="https://www.solodev.com/assets/carousel/image8.png"
                      />
                    </div>
                  </Slick>
                </Row>
                <Row className="text-left">
                  <Col md="6" xs="12">
                    <h1 className="title">Join Us!</h1>
                    <p className="description">
                      5,000 capacity venue, holding some of the latest
                      technology lighting with a 24 colour laser system Amnesia
                      is one of the islands most legendary clubs.
                    </p>
                    <Row>
                      <Col className="mb-3" md="12" sm="8">
                        <Row>
                          <FormGroup className="no-border">
                            <Input defaultValue="Full Name" type="text" />
                          </FormGroup>
                          <FormGroup className="no-border">
                            <Input defaultValue="Your Email" type="email" />
                          </FormGroup>
                          <Button
                            className="btn-icon btn-round"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="tim-icons icon-send" />
                          </Button>
                        </Row>
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />I agree to the{" "}
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                              terms and conditions
                            </a>
                            .
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                
              </Container>
            </div>
          </div>
          {/* ********* END HEADER 2 ********* */}
         
        </div>{" "}
      </>
    );
  }
}

export default Headers;
