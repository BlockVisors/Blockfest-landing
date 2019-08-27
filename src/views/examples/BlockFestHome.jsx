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
// react plugin used to create charts
import { Line } from "react-chartjs-2";
import classnames from "classnames";

//import Firebase from "firebase";
//import firebase from  "./firebaseConfig";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.jsx";
import BFNavbar from "components/Navbars/BFNavbar.jsx";
//import DemoFooter from "components/Footers/DemoFooter.jsx";
import Countdown from "views/IndexSections/Countdown.jsx";
import BlockFooter from "components/Footers/BlockFooter.jsx";
import BlockFestTeam from "views/IndexSections/BlockFestTeam.jsx";
import BlockFestContact1 from "views/IndexSections/BlockFestContact1.jsx";
//import { chartExample1 } from "variables/charts.js";
import BlockFestFAQ from "views/IndexSections/BFFaq";
import BlockFestFeatures from "views/IndexSections/BlockFestFeatures";
import SponsorList from "views/IndexSections/SponsorList.jsx";
import BlockFestBottom from "views/IndexSections/BlockFestBottom";


class BlockFestHome extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("landing-page");
  }
  render() {
    return (
      <>
        <BFNavbar />
        <div className="wrapper" ref="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="path"
              src={require("assets/img/blob.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("assets/img/path2.png")}
            />
            <img
              alt="..."
              className="shapes triangle"
              src={require("assets/img/triunghiuri.png")}
            />
            <img
              alt="..."
              className="shapes wave"
              src={require("assets/img/waves.png")}
            />
            <img
              alt="..."
              className="shapes squares"
              src={require("assets/img/patrat.png")}
            />
            <img
              alt="..."
              className="shapes circle"
              src={require("assets/img/cercuri.png")}
            />
            <Container>
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="5" md="4" sm="4">
                  <h1 id="hero-tx" className="text-white">
                    A Gathering of the brightest minds in <br />
                    <span className="text-white">Blockchain Development</span>
                  </h1>
                  <p className="text-white mb-3">
                    Explore the hottest industry tracks in Blockchain Development while solving real-world problems that you find interesting...
                  </p>
                  <div className="btn-wrapper mb-3">
                    <p className="category text-success d-inline">
                      Learn More..
                    </p>
                    <Button
                      className="btn-link"
                      color="success"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      <i className="tim-icons icon-minimal-right" />
                    </Button>
                  </div>
                  <div className="btn-wrapper">
                    <div className="button-container">
                      <Button
                        className="btn-icon btn-simple btn-round mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col lg="5" md="6" sm="4" align-items-center>
                <div id="main-logo">
                  <img
                    alt="..."
                    className="img-fluid"
                    //src={require("assets/img/etherum.png")}
                    //src={require("assets/img/bf-splash.png")}
                    src={require("assets/img/blockfestsvg.png")}

                  />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div id="countdown">
          <Countdown 
        timeTillDate="10 26 2019, 6:00 am" 
        timeFormat="MM DD YYYY, h:mm a" 
    />, 
        </div>
          <section className="section section-lg">
            <section className="section">
              <img
                alt="..."
                className="path"
                src={require("assets/img/path4.png")}
              />
              <Container id="numbers">
                <Row className="row-grid justify-content-between">
                  <Col className="mt-lg-5" md="5">
                    <Row>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-trophy text-warning" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">3,237</CardTitle>
                                  <p />
                                  <p className="card-category">Awards</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats upper bg-default">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-coins text-white" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">3,653</CardTitle>
                                  <p />
                                  <p className="card-category">Commits</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-gift-2 text-info" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">593</CardTitle>
                                  <p />
                                  <p className="card-category">Presents</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-credit-card text-success" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">10,783</CardTitle>
                                  <p />
                                  <p className="card-category">Forks</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="6">
                    <div className="pl-md-5">
                      <h1>
                        Block Fest NYC 2019 <br />
                        By The Numbers
                      </h1>
                      <p>
                        I should be capable of drawing a single stroke at the
                        present moment; and yet I feel that I never was a
                        greater artist than now.
                      </p>
                      <br />
                      <p>
                        When, while the lovely valley teems with vapour around
                        me, and the meridian sun strikes the upper surface of
                        the impenetrable foliage of my trees, and but a few
                        stray.
                      </p>
                      <br />
                      <a
                        className="font-weight-bold text-info mt-5"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Show all{" "}
                        <i className="tim-icons icon-minimal-right text-info" />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </section>
          <section id="why" className="section section-lg">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("assets/img/path5.png")}
            />
            <img
              alt="..."
              className="path3"
              src={require("assets/img/path2.png")}
            />
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <h1 className="text-center">Why Sign Up for BlockFest NYC 2019?</h1>
                  <Row className="row-grid justify-content-center">
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-primary">
                          <i className="tim-icons icon-money-coins" />
                        </div>
                        <h4 className="info-title">Large Prizes</h4>
                        <hr className="line-primary" />
                        <p>
                          Winner takes 15,000 of the 50,000 USD total prize purse. In addition there will be 
                          free food and giveaways
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-warning">
                          <i className="tim-icons icon-chart-pie-36" />
                        </div>
                        <h4 className="info-title">Partners in Success</h4>
                        <hr className="line-warning" />
                        <p>
                          The best and brightest Sponsors and Partners. In addition we have a panel of carefully curated Blockchain
                          Venture Capital firms.
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-success">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <h4 className="info-title">Large Community</h4>
                        <hr className="line-success" />
                        <p>
                          Tap into our large developer community for help extending your project post-event
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-success">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <h4 className="info-title">Blockchain Agnostic</h4>
                        <hr className="line-success" />
                        <p>
                          Develop on your Blockchain of choice. From Ethereum, EOS, Stratis, Blockstack or any other.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <div className="features-4">
            <Container>
              <Row className="align-items-center">
                <Col className="mr-auto text-left" lg="3">
                  <h1 className="title">You should be here!</h1>
                  <p className="description">
                    5,000 capacity venue, holding some of the latest technology
                    lighting with a 24 colour laser system Amnesia is one of the
                    islands most legendary clubs.
                  </p>
                  <Button
                    className="mt-3"
                    color="primary"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Register for Blockfest <i className="tim-icons icon-double-right" />
                  </Button>
                </Col>
                <Col className="p-sm-0" lg="8">
                  <Row>
                    <Col md="6">
                      <div className="info info-primary">
                        <div className="icon icon-white">
                          <i className="tim-icons icon-satisfied" />
                        </div>
                        <h4 className="info-title">Best Quality</h4>
                        <p className="description">
                          Gain access to the demographics, psychographics, and
                          location of unique people.
                        </p>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="info info-primary">
                        <div className="icon icon-white">
                          <i className="tim-icons icon-palette" />
                        </div>
                        <h4 className="info-title">Awesome Design</h4>
                        <p className="description">
                          Gain access to the demographics, psychographics, and
                          location of unique people.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <div className="info info-primary">
                        <div className="icon icon-white">
                          <i className="tim-icons icon-user-run" />
                        </div>
                        <h4 className="info-title">Fast Development</h4>
                        <p className="description">
                          Gain access to the demographics, psychographics, and
                          location of unique people.
                        </p>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="info info-primary">
                        <div className="icon icon-white">
                          <i className="tim-icons icon-bulb-63" />
                        </div>
                        <h4 className="info-title">Super Fresh</h4>
                        <p className="description">
                          Gain access to the demographics, psychographics, and
                          location of unique people.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          </section>
          {/* <section className="section section-lg section-safe">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path5.png")}
            />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col md="5">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/chester-wade.jpg")}
                  />
                  <Card className="card-stats bg-danger">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">100%</CardTitle>
                          <p className="card-category text-white">Safe</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-info">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">573 K</CardTitle>
                          <p className="card-category text-white">
                            Satisfied customers
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-default">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">10 425</CardTitle>
                          <p className="card-category text-white">Business</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="px-md-5">
                    <hr className="line-success" />
                    <h3>Awesome features</h3>
                    <p>
                      The design system comes with three pre-built pages to help
                      you get started faster. You can change the text and images
                      and you're good to go.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-vector" />
                          </div>
                          <div className="ml-3">
                            <h6>Carefully crafted components</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-tap-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Amazing page examples</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-single-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Super friendly support team</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section> */}
          <BlockFestTeam />
         <BlockFestBottom /> 
         
          {/* <SponsorList /> */}
             <BlockFestFAQ />
            <BlockFestContact1 />


          {/* <section className="section section-lg section-coins">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path3.png")}
            />
          </section> */}
          <BlockFooter />
        </div>
      </>
    );
  }
}

export default BlockFestHome;
