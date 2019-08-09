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
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
// import ColorNavbar from "components/Navbars/ColorNavbar.jsx";
// import DemoFooter from "components/Footers/DemoFooter.jsx";

class BlockFestBottom extends React.Component {
  constructor(props) {
    super(props);
    let windowScrollTop;
    if (window.innerWidth >= 768) {
      windowScrollTop = window.pageYOffset / 3;
    } else {
      windowScrollTop = 0;
    }
    this.state = {
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    };
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("blog-posts");
    if (window.innerWidth >= 768) {
      var windowScrollTop = window.pageYOffset / 3;
      this.setState({
        transform: "translate3d(0," + windowScrollTop + "px,0)"
      });
      window.addEventListener("scroll", this.resetTransform);
    }
  }
  componentWillUnmount() {
    document.body.classList.remove("blog-posts");
    if (window.innerWidth >= 768) {
      window.removeEventListener("scroll", this.resetTransform);
    }
  }
  resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    });
  };
  render() {
    return (
      <>
        {/* <ColorNavbar /> */}
        <div className="wrapper" ref="wrapper">
          {/* <div className="page-header page-header-small header-filter">
            <div
              className="page-header-image"
              style={{
                backgroundImage:
                  "url(" + require("assets/img/ruvim-noga.jpg") + ")",
                transform: this.state.transform
              }}
            />
           
          </div> */}
          
            
          
            <div className="section blogs-4">
              <Container fluid>
                <h1 className="title text-center">
                  Stay tuned with our fresh stories
                </h1>
                <br />
                <Row>
                  <Col lg="3">
                    <Card
                      className="card-blog card-background"
                      data-animation="zooming"
                    >
                      <div
                        className="full-background"
                        style={{
                          backgroundImage:
                            "url(" +
                            require("assets/img/viktor-forgacs.jpg") +
                            ")"
                        }}
                      />
                      <CardBody>
                        <div className="content-bottom">
                          <h6 className="card-category">Climate Change</h6>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <CardTitle tag="h3">Stellar Partnership</CardTitle>
                          </a>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="3">
                    <Card
                      className="card-blog card-background"
                      data-animation="zooming"
                    >
                      <div
                        className="full-background"
                        style={{
                          backgroundImage:
                            "url(" +
                            require("assets/img/rezaul-karim.jpg") +
                            ")"
                        }}
                      />
                      <CardBody>
                        <div className="content-bottom">
                          <h6 className="card-category">Save the World</h6>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <CardTitle tag="h3">Digital Currency</CardTitle>
                          </a>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="3">
                    <Card
                      className="card-blog card-background"
                      data-animation="zooming"
                    >
                      <div
                        className="full-background"
                        style={{
                          backgroundImage:
                            "url(" +
                            require("assets/img/pawel-nolbert.jpg") +
                            ")"
                        }}
                      />
                      <CardBody>
                        <div className="content-bottom">
                          <h6 className="card-category">
                            Applications Companies
                          </h6>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <CardTitle tag="h3">Blockchain Explained</CardTitle>
                          </a>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="3">
                    <Card
                      className="card-blog card-background"
                      data-animation="zooming"
                    >
                      <div
                        className="full-background"
                        style={{
                          backgroundImage:
                            "url(" + require("assets/img/mark-finn.jpg") + ")"
                        }}
                      />
                      <CardBody>
                        <div className="content-bottom">
                          <h6 className="card-category">RFID microchips</h6>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <CardTitle tag="h3">
                              A Robot is Your Co-Worker
                            </CardTitle>
                          </a>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
           
            <div className="title text-center">
              <h3>Check Out Our Great Sponsors</h3>
            </div>
            <div className="social-line social-line-big-icons">
              <Container>
                <Row>
                  <Col md="2">
                    <Button
                      className="btn-icon btn-simple btn-footer"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                  </Col>
                  <Col md="2">
                    <Button
                      className="btn-icon btn-simple btn-footer"
                      color="facebook"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square" />
                    </Button>
                  </Col>
                  <Col md="2">
                    <Button
                      className="btn-icon btn-simple btn-footer"
                      color="google"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus" />
                    </Button>
                  </Col>
                  <Col md="2">
                    <Button
                      className="btn-icon btn-simple btn-footer"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                  </Col>
                  <Col md="2">
                    <Button
                      className="btn-icon btn-simple btn-footer"
                      color="youtube"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-youtube" />
                    </Button>
                  </Col>
                  <Col md="2">
                    <Button
                      className="btn-icon btn-simple btn-instagram btn-footer"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="subscribe-line">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto" lg="8" xs="10">
                    <div className="text-center">
                      <h4 className="title">Subscribe to our Newsletter</h4>
                      <p className="description">
                        Join our newsletter and get news in your inbox every
                        week! We hate spam too, so no worries about this.
                      </p>
                    </div>
                    <Card className="card-raised card-form-horizontal">
                      <CardBody>
                        <Form action="" method="">
                          <Row>
                            <Col sm="8">
                              <InputGroup
                                className={classnames({
                                  "input-group-focus": this.state.emailFocus
                                })}
                              >
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="tim-icons icon-email-85" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  placeholder="Your Email..."
                                  type="email"
                                  onFocus={e =>
                                    this.setState({ emailFocus: true })
                                  }
                                  onBlur={e =>
                                    this.setState({ emailFocus: false })
                                  }
                                />
                              </InputGroup>
                            </Col>
                            <Col sm="4">
                              <Button block color="primary" type="button">
                                Subscribe
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          
          {/* <DemoFooter /> */}
        </div>
      </>
    );
  }
}

export default BlockFestBottom;
