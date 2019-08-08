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
        
          {/* ********* CONTACT US 3 ********* */}
          <div className="contactus-3">
            <div className="page-header header-filter">
              <div
                className="page-header-image"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/andre-benz.jpg") + ")"
                }}
              />
              <Container>
                <Row>
                  <Col className="text-center" md="12">
                    <h1 className="title">Got a question?</h1>
                    <h3>We'd like to talk more about what you need</h3>
                  </Col>
                </Row>
              </Container>
            </div>
            <Container>
              <Row>
                <Col lg="3">
                  <div className="info info-hover">
                    <div className="icon icon-primary">
                      <img
                        alt="..."
                        className="bg-blob"
                        src={require("assets/img/feature-blob/primary.png")}
                      />
                      <i className="tim-icons icon-square-pin" />
                    </div>
                    <h4 className="info-title">Address</h4>
                    <p className="description">12124 First Street, nr 54</p>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="info info-hover">
                    <div className="icon icon-info">
                      <img
                        alt="..."
                        className="bg-blob"
                        src={require("assets/img/feature-blob/info.png")}
                      />
                      <i className="tim-icons icon-email-85" />
                    </div>
                    <h4 className="info-title">Email</h4>
                    <p className="description">info@blockfest.co</p>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="info info-hover">
                    <div className="icon icon-warning">
                      <img
                        alt="..."
                        className="bg-blob"
                        src={require("assets/img/feature-blob/warning.png")}
                      />
                      <i className="tim-icons icon-mobile" />
                    </div>
                    <h4 className="info-title">Phone Number</h4>
                    <p className="description">+1(212) 256 1485</p>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="info info-hover">
                    <div className="icon icon-success">
                      <img
                        alt="..."
                        className="bg-blob"
                        src={require("assets/img/feature-blob/success.png")}
                      />
                      <i className="tim-icons icon-single-02" />
                    </div>
                    <h4 className="info-title">Contact</h4>
                    <p className="description">Dameon Green</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END CONTACT US 3 ********* */}
        
        </div>{" "}
      </>
    );
  }
}

export default ContactUs;
