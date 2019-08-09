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
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Projects extends React.Component {
  state = {
    activeTab: "1"
  };
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  render() {
    return (
      <>
        <div className="cd-section" id="projects">
        
          {/* ********* PROJECTS 2 ********* */}
          <div className="projects-2 project-raised">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center mb-5" lg="8">
                  <h2 className="title">Some of Our Awesome Sponsors</h2>
                  <div className="section-space" />
                </Col>
              </Row>
              <Nav
                className="nav-pills-info nav-pills-icons nav-pills-lg"
                pills
                role="tablist"
              >
                <NavItem className="m-auto">
                  <NavLink
                    className={this.state.activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      this.toggle("1");
                    }}
                  >
                    <i className="tim-icons icon-spaceship" />
                    Project 1
                  </NavLink>
                </NavItem>
                <NavItem className="m-auto">
                  <NavLink
                    className={this.state.activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      this.toggle("2");
                    }}
                  >
                    <i className="tim-icons icon-bag-16" />
                    Project 2
                  </NavLink>
                </NavItem>
                <NavItem className="m-auto">
                  <NavLink
                    className={this.state.activeTab === "3" ? "active" : ""}
                    onClick={() => {
                      this.toggle("3");
                    }}
                  >
                    <i className="tim-icons icon-light-3" />
                    Project 3
                  </NavLink>
                </NavItem>
                <NavItem className="m-auto">
                  <NavLink
                    className={this.state.activeTab === "4" ? "active" : ""}
                    onClick={() => {
                      this.toggle("4");
                    }}
                  >
                    <i className="tim-icons icon-molecule-40" />
                    Project 4
                  </NavLink>
                </NavItem>
                <NavItem className="mx-auto">
                  <NavLink
                    className={this.state.activeTab === "5" ? "active" : ""}
                    onClick={() => {
                      this.toggle("5");
                    }}
                  >
                    <i className="tim-icons icon-planet" />
                    Project 5
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent
                className="tab-space"
                activeTab={"project" + this.state.activeTab}
              >
                <TabPane tabId="project1">
                  <Row className="mt-5">
                    <Col md="4">
                      <Card>
                        <div className="card-image h-100">
                          <img
                            alt="..."
                            className="img rounded"
                            src="https://s3.amazonaws.com/creativetim_bucket/products/83/thumb/opt_mk_react_thumbnail.jpg?1525851474"
                          />
                        </div>
                        <CardBody className="text-left">
                          <CardFooter className="mt-0">
                            <div className="stats stats-right">
                              <div className="stars text-warning">
                                <i className="tim-icons icon-shape-star" />
                                <i className="tim-icons icon-shape-star ml-1" />
                                <i className="tim-icons icon-shape-star ml-1" />
                                <i className="tim-icons icon-shape-star ml-1" />
                                <i className="tim-icons icon-shape-star ml-1" />
                              </div>
                            </div>
                            <div className="author">
                              <img
                                alt="..."
                                className="avatar img-raised"
                                src={require("assets/img/Tim.png")}
                              />
                              <span className="ml-1">Material Kit React</span>
                            </div>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="4">
                      <Card>
                        <div className="card-image h-100">
                          <img
                            alt="..."
                            className="img rounded"
                            src="https://s3.amazonaws.com/creativetim_bucket/products/136/thumb/opt_bd_react.jpg?1543482024"
                          />
                        </div>
                        <CardBody className="text-left">
                          <CardFooter className="mt-0">
                            <div className="stats stats-right">
                              <i className="tim-icons icon-heart-2 text-danger" />{" "}
                              342 ·{" "}
                              <i className="tim-icons icon-single-copy-04 text-info" />{" "}
                              43
                            </div>
                            <div className="author">
                              <img
                                alt="..."
                                className="avatar img-raised"
                                src={require("assets/img/Tim.png")}
                              />
                              <span className="ml-1">
                                Black Dashboard React
                              </span>
                            </div>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="4">
                      <Card>
                        <div className="card-image h-100">
                          <img
                            alt="..."
                            className="img rounded"
                            src="https://s3.amazonaws.com/creativetim_bucket/products/155/thumb/opt_adp_react_thumbnail.jpg?1554905507"
                          />
                        </div>
                        <CardBody className="text-left">
                          <CardFooter className="mt-0">
                            <div className="stats stats-right">
                              <i className="tim-icons icon-heart-2 text-danger" />{" "}
                              127
                            </div>
                            <div className="author">
                              <img
                                alt="..."
                                className="avatar img-raised"
                                src={require("assets/img/Tim.png")}
                              />
                              <span className="ml-1">
                                Argon Dashboard Pro React
                              </span>
                            </div>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="project2">
                  <div className="space-100" />
                  <Col className="ml-auto mr-auto text-center mt-4" md="8">
                    <p className="description mb-5">
                      Add your information here for Project2.
                    </p>
                  </Col>
                  <div className="space-100" />
                </TabPane>
                <TabPane tabId="project3">
                  <div className="space-100" />
                  <Col className="ml-auto mr-auto text-center mt-4" md="8">
                    <p className="description mb-5">
                      Add your information here for Project3.
                    </p>
                  </Col>
                  <div className="space-100" />
                </TabPane>
                <TabPane tabId="project4">
                  <div className="space-100" />
                  <Col className="ml-auto mr-auto text-center mt-4" md="8">
                    <p className="description mb-5">
                      Add your information here for Project4.
                    </p>
                  </Col>
                  <div className="space-100" />
                </TabPane>
                <TabPane tabId="project5">
                  <div className="space-100" />
                  <Col className="ml-auto mr-auto text-center mt-4" md="8">
                    <p className="description mb-5">
                      Add your information here for Project5.
                    </p>
                  </Col>
                  <div className="space-100" />
                </TabPane>
              </TabContent>
              <Row>
                <Col className="ml-auto mr-auto text-center mt-4" md="8">
                  <h3 className="title">Interested in our projects?</h3>
                  <h4 className="description mb-5">
                    This is the paragraph where you can write more details about
                    your projects. Keep you user engaged by providing meaningful
                    information.
                  </h4>
                  <Button color="primary" size="lg">
                    Contact us
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END PROJECTS 2 ********* */}
       
        </div>{" "}
      </>
    );
  }
}

export default Projects;
