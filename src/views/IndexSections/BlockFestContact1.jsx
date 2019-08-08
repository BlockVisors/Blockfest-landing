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
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
const ContactUsMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        styles: [
          {
            elementType: "geometry",
            stylers: [
              {
                color: "#1d2c4d"
              }
            ]
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#8ec3b9"
              }
            ]
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#1a3646"
              }
            ]
          },
          {
            featureType: "administrative.country",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#4b6878"
              }
            ]
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#64779e"
              }
            ]
          },
          {
            featureType: "administrative.province",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#4b6878"
              }
            ]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#334e87"
              }
            ]
          },
          {
            featureType: "landscape.natural",
            elementType: "geometry",
            stylers: [
              {
                color: "#023e58"
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#283d6a"
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#6f9ba5"
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#1d2c4d"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#023e58"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#3C7680"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [
              {
                color: "#304a7d"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#98a5be"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#1d2c4d"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
              {
                color: "#2c6675"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#9d2a80"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#9d2a80"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#b0d5ce"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#023e58"
              }
            ]
          },
          {
            featureType: "transit",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#98a5be"
              }
            ]
          },
          {
            featureType: "transit",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#1d2c4d"
              }
            ]
          },
          {
            featureType: "transit.line",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#283d6a"
              }
            ]
          },
          {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [
              {
                color: "#3a4762"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#0e1626"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#4e6d70"
              }
            ]
          }
        ]
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
);

class ContactUs extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="cd-section" id="contactus">
          {/* ********* CONTACT US 1 ********* */}
          <div
            className="contactus-1 section-image"
            style={{
              backgroundImage: "url(" + require("assets/img/contact1.jpg") + ")"
            }}
          >
            <Container>
              <Row>
                <Col md="5">
                  <h2 className="title">Get in Touch</h2>
                  <h4 className="description">
                    You need more information? Check what other persons are
                    saying about our product. They are very happy with their
                    purchase.
                  </h4>
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="tim-icons icon-square-pin" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Find us at the office</h4>
                      <p className="description">
                        Bld Mihail Kogalniceanu, nr. 8, <br />
                        7652 Bucharest, <br />
                        Romania
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="tim-icons icon-mobile" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Give us a ring</h4>
                      <p className="description">
                        Michael Jordan <br />
                        +40 762 321 762 <br />
                        Mon - Fri, 8:00-22:00
                      </p>
                    </div>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="5">
                  <Card className="card-contact card-raised">
                    <Form id="contact-form" method="post" role="form">
                      <CardHeader className="text-center">
                        <CardTitle tag="h4">Contact Us</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col md="6">
                            <label>First name</label>
                            <InputGroup
                              className={classnames({
                                "input-group-focus": this.state
                                  .firstNameContact1Focus
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="tim-icons icon-single-02" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                aria-label="First Name..."
                                placeholder="First Name..."
                                type="text"
                                onFocus={e =>
                                  this.setState({
                                    firstNameContact1Focus: true
                                  })
                                }
                                onBlur={e =>
                                  this.setState({
                                    firstNameContact1Focus: false
                                  })
                                }
                              />
                            </InputGroup>
                          </Col>
                          <Col className="pl-2" md="6">
                            <FormGroup>
                              <label>Last name</label>
                              <InputGroup
                                className={classnames({
                                  "input-group-focus": this.state
                                    .lastNameContact1Focus
                                })}
                              >
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="tim-icons icon-caps-small" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  aria-label="Last Name..."
                                  placeholder="Last Name..."
                                  type="text"
                                  onFocus={e =>
                                    this.setState({
                                      lastNameContact1Focus: true
                                    })
                                  }
                                  onBlur={e =>
                                    this.setState({
                                      lastNameContact1Focus: false
                                    })
                                  }
                                />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>
                        <FormGroup>
                          <label>Email address</label>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.emailContact1Focus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-email-85" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email Here..."
                              type="text"
                              onFocus={e =>
                                this.setState({ emailContact1Focus: true })
                              }
                              onBlur={e =>
                                this.setState({ emailContact1Focus: false })
                              }
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <label>Your message</label>
                          <Input
                            id="message"
                            name="message"
                            rows="6"
                            type="textarea"
                          />
                        </FormGroup>
                        <Row>
                          <Col md="6">
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                                I'm not a robot
                              </Label>
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <Button
                              className="btn-round pull-right"
                              color="primary"
                            >
                              Send Message
                            </Button>
                          </Col>
                        </Row>
                      </CardBody>
                    </Form>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END CONTACT US 1 ********* */}
         
        </div>{" "}
      </>
    );
  }
}

export default ContactUs;
