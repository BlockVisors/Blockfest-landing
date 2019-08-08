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
import { Badge, Button, Container, Row, Col } from "reactstrap";

class BlockFestFeatures extends React.Component {
  render() {
    return (
      <>
        <div className="cd-section" id="features">
    
          {/* ********* FEATURES 4 ********* */}
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
          {/* ********* END FEATURES 4 ********* */}
         
        
        </div>{" "}
      </>
    );
  }
}

export default BlockFestFeatures;
