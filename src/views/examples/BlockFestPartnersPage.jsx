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
import BFPartners from "views/IndexSections/BFPartners.jsx";







import { chartExample1 } from "variables/charts.js";

class BlockFestSponsors extends React.Component {
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
         
    
          <BFPartners />

          <BlockFooter />
        </div>
      </>
    );
  }
}

export default BlockFestSponsors;