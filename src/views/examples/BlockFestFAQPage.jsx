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
  Col
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.jsx";
import BFNavbar from "components/Navbars/BFNavbar.jsx";
//import DemoFooter from "components/Footers/DemoFooter.jsx";
import BlockFooter from "components/Footers/BlockFooter.jsx";
import BlockFestContact3 from "views/IndexSections/BlockFestContact3.jsx";
import BlockFestFAQ from "views/IndexSections/BFFaq.jsx";

//import BFSponsor from "views/IndexSections/BFSponsor.jsx";




class BlockFestFAQPage extends React.Component {
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
          {/* <div className="page-header">
            <Container>
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="12" md="8" sm="10">
                  <h1 className="text-white">
                    Become a <br />
                    <span className="text-white">Blockfest NYC Sponsor</span>
                  </h1>
                </Col>
              </Row>
            </Container>
          </div> */}
    
          <section id="con-3" className="section section-lg section-safe">
          <Container>
              <Row className="row-grid justify-content-between align-items-left text-left">
                <Col lg="12" md="8" sm="10">
                  <h1 className="text-white text-left">
                    FAQ <br />
                    <span className="text-white"></span>
                  </h1>
                </Col>
              </Row>
            </Container>
            <img
              alt="..."
              className="path"
              src={require("assets/img/path5.png")}
            />
        
            {/* <Container id="sponsor-pack">
              <Row>
                <Col id="sp-pack" sm="10" md="6" lg="12">
                  <hr className="line-info" />
                  <h1 id="sp-hero">
                    {" "}
                    <span className="text-info">Frequently Asked Questions</span>
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/bitcoin.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Light Coin</h4>
                          <span>Plan</span>
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>50 messages</ListGroupItem>
                          <ListGroupItem>100 emails</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="primary">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/etherum.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Dark Coin</h4>
                          <span>Plan</span>
                          <hr className="line-success" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>150 messages</ListGroupItem>
                          <ListGroupItem>1000 emails</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="success">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/ripp.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Bright Coin</h4>
                          <span>Plan</span>
                          <hr className="line-info" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>350 messages</ListGroupItem>
                          <ListGroupItem>10K emails</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="info">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container> */}

          </section>
          <BlockFestFAQ />
          <BlockFooter />
        </div>
      </>
    );
  }
}

export default BlockFestFAQPage;
