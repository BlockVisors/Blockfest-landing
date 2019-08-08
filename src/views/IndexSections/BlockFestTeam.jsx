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
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Carousel,
  CarouselItem
} from "reactstrap";

// core components
const items = [
  {
    content: (
      <Container>
        <Row>
          <Col md="4">
            <h1 className="title">Charlie Watson</h1>
          </Col>
          <Col md="4">
            <img
              alt="..."
              className="d-block"
              src={require("assets/img/charlie.jpg")}
            />
          </Col>
          <Col md="4">
            <div className="wrapper">
              <div className="category">
                <strong>Position:</strong> Artist <br />
                <strong>Experience:</strong> 5 years
              </div>
              <div className="description">
                Artist is a term applied to a person who engages in an activity
                deemed to be an art. An artist also may be defined unofficially
                as "a person who expresses him- or herself through a medium". He
                is a descriptive term applied to a person who engages in an
                activity deemed to be an art. An artist also may be defined
                unofficially as "a person who expresses him- or herself through
                a medium".
              </div>
              <div className="footer">
                <Button
                  className="btn-icon btn-round"
                  color="twitter"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="facebook"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="dribbble"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-dribbble" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "0"
  },
  {
    content: (
      <Container>
        <Row>
          <Col md="4">
            <h1 className="title">Quavo Austen</h1>
          </Col>
          <Col md="4">
            <img
              alt="..."
              className="d-block"
              src={require("assets/img/tom-klein.jpg")}
            />
          </Col>
          <Col md="4">
            <div className="wrapper">
              <div className="category">
                <strong>Position:</strong> Actor <br />
                <strong>Experience:</strong> 1 year
              </div>
              <div className="description">
                Artist is a term applied to a person who engages in an activity
                deemed to be an art. An artist also may be defined unofficially
                as "a person who expresses him- or herself through a medium". He
                is a descriptive term applied to a person who engages in an
                activity deemed to be an art. An artist also may be defined
                unofficially as "a person who expresses him- or herself through
                a medium".
              </div>
              <div className="footer">
                <Button
                  className="btn-icon btn-round"
                  color="twitter"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="facebook"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="dribbble"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-dribbble" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "1"
  },
  {
    content: (
      <Container>
        <Row>
          <Col md="4">
            <h1 className="title">Lucy</h1>
          </Col>
          <Col md="4">
            <img
              alt="..."
              className="d-block"
              src={require("assets/img/lucy.jpg")}
            />
          </Col>
          <Col md="4">
            <div className="wrapper">
              <div className="category">
                <strong>Position:</strong> CEO <br />
                <strong>Experience:</strong> 7 years
              </div>
              <div className="description">
                Artist is a term applied to a person who engages in an activity
                deemed to be an art. An artist also may be defined unofficially
                as "a person who expresses him- or herself through a medium". He
                is a descriptive term applied to a person who engages in an
                activity deemed to be an art. An artist also may be defined
                unofficially as "a person who expresses him- or herself through
                a medium".
              </div>
              <div className="footer">
                <Button
                  className="btn-icon btn-round"
                  color="twitter"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-icon btn-round ml-1"
                  color="facebook"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button
                  className="btn-icon btn-round ml-1"
                  color="dribbble"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-dribbble" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "2"
  }
];

class Teams extends React.Component {
  state = {
    activeIndex: 0
  };
  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };
  render() {
    return (
      <>
        <div className="cd-section" id="teams">
  
          {/* ********* TEAM 2 ********* */}
          <div className="team-2">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">Meet the BlockFest Team</h2>
                  <h4 className="description">
                    We are Innovators and Connectors in the Blockchain Community Leveraging Decades of Experience
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col lg="3" md="3" sm="6">
                  <Card className="card-profile">
                    <div className="card-image">
                      <h4 className="title">Dameon Green</h4>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          aria-expanded={false}
                          caret
                          className="btn-icon"
                          color="link"
                          data-toggle="dropdown"
                          type="button"
                        >
                          <i className="tim-icons icon-settings-gear-63" />
                        </DropdownToggle>
                        <DropdownMenu right x-placement="bottom-end">
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Edit Profile
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Settings
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Log out
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/emily.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <hr className="line-primary" />
                      <h3 className="job-title">Consultant/Innovator</h3>
                      <Table className="tablesorter" responsive>
                        <tbody>
                          <tr>
                            <td className="text-left">
                              <i className="tim-icons icon-atom" />
                              Skills
                            </td>
                            <td className="text-right">UI, UX</td>
                          </tr>
                          <tr>
                            <td className="text-left">
                              <i className="tim-icons icon-user-run" />
                              Hobbies
                            </td>
                            <td className="text-right">Cookery</td>
                          </tr>
                          <tr>
                            <td className="text-left">
                              <i className="tim-icons icon-chart-bar-32" />
                              Level
                            </td>
                            <td className="text-right">• • •</td>
                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="card-profile">
                    <div className="card-image">
                      <h4 className="title">Jason Tissera</h4>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          aria-expanded={false}
                          caret
                          className="btn-icon"
                          color="link"
                          data-toggle="dropdown"
                          type="button"
                        >
                          <i className="tim-icons icon-settings-gear-63" />
                        </DropdownToggle>
                        <DropdownMenu right x-placement="bottom-end">
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Edit Profile
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Settings
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Log out
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/michael.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <hr className="line-primary" />
                      <h3 className="job-title">Herd CEO</h3>
                      <Table className="tablesorter" responsive>
                        <tbody>
                          <tr>
                            <td className="text-left">
                              <i className="tim-icons icon-atom" />
                              Skills
                            </td>
                            <td className="text-right">Leadership</td>
                          </tr>
                          <tr>
                            <td className="text-left">
                              <i className="tim-icons icon-user-run" />
                              Hobbies
                            </td>
                            <td className="text-right">Skiing</td>
                          </tr>
                          <tr>
                            <td className="text-left">
                              <i className="tim-icons icon-chart-bar-32" />
                              Level
                            </td>
                            <td className="text-right">• • • • •</td>
                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="card-profile">
                    <div className="card-image">
                      <h4 className="title">Anthony Albertorio</h4>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          aria-expanded={false}
                          caret
                          className="btn-icon"
                          color="link"
                          data-toggle="dropdown"
                          type="button"
                        >
                          <i className="tim-icons icon-settings-gear-63" />
                        </DropdownToggle>
                        <DropdownMenu right x-placement="bottom-end">
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Edit Profile
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Settings
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Log out
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/julie.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <hr className="line-primary" />
                      <h3 className="job-title">Meetup Maestro</h3>
                      <Table className="tablesorter" responsive>
                        <tbody>
                          <tr>
                            <td className="text-left">
                              <i className="tim-icons icon-atom" />
                              Skills
                            </td>
                            <td className="text-right">Artistry</td>
                          </tr>
                          <tr>
                            <td className="text-left">
                              <i className="tim-icons icon-user-run" />
                              Hobbies
                            </td>
                            <td className="text-right">Reading</td>
                          </tr>
                          <tr>
                            <td className="text-left">
                              <i className="tim-icons icon-chart-bar-32" />
                              Level
                            </td>
                            <td className="text-right">• • • •</td>
                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="card-profile">
                    <div className="card-image">
                      <h4 className="title">Hassan Malik</h4>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          aria-expanded={false}
                          caret
                          className="btn-icon"
                          color="link"
                          data-toggle="dropdown"
                          type="button"
                        >
                          <i className="tim-icons icon-settings-gear-63" />
                        </DropdownToggle>
                        <DropdownMenu right x-placement="bottom-end">
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Edit Profile
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Settings
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Log out
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/julie.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <hr className="line-primary" />
                      <h3 className="job-title">Blockchain Developer</h3>
                      <Table className="tablesorter" responsive>
                        <tbody>
                          <tr>
                            <td className="text-left">
                              <i className="tim-icons icon-atom" />
                              Skills
                            </td>
                            <td className="text-right">Artistry</td>
                          </tr>
                          <tr>
                            <td className="text-left">
                              <i className="tim-icons icon-user-run" />
                              Hobbies
                            </td>
                            <td className="text-right">Reading</td>
                          </tr>
                          <tr>
                            <td className="text-left">
                              <i className="tim-icons icon-chart-bar-32" />
                              Level
                            </td>
                            <td className="text-right">• • • •</td>
                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END TEAM 2 ********* */}
        
        </div>{" "}
      </>
    );
  }
}

export default Teams;
