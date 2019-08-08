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
// import {
//
// } from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.jsx";
import PresentationHeader from "components/Headers/PresentationHeader.jsx";
import DemoFooter from "components/Footers/DemoFooter.jsx";

// Sections for this page
// (we've divided this page into multiple react components to make it a bit more readable)
import Info from "./PresentationSections/Info.jsx";
import BasicComponents from "./PresentationSections/BasicComponents.jsx";
import Cards from "./PresentationSections/Cards.jsx";
import Content from "./PresentationSections/Content.jsx";
import Sections from "./PresentationSections/Sections.jsx";
import Examples from "./PresentationSections/Examples.jsx";
import FreeDemo from "./PresentationSections/FreeDemo.jsx";
import Icons from "./PresentationSections/Icons.jsx";
import Features from "./PresentationSections/Features.jsx";
import Testimonials from "./PresentationSections/Testimonials.jsx";
import Pricing from "./PresentationSections/Pricing.jsx";

class Presentation extends React.Component {
  componentDidMount() {
    document.body.classList.add("presentation-page");
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
  }
  componentWillUnmount() {
    document.body.classList.remove("presentation-page");
  }
  render() {
    return (
      <>
        <ColorNavbar />
        <div className="wrapper" ref="wrapper">
          <PresentationHeader />
          <div className="space-110" />
          <Info />
          <BasicComponents />
          <div className="space-110" />
          <Cards />
          <div className="space-110" />
          <Content />
          <Sections />
          <Examples />
          <FreeDemo />
          <Icons />
          <Features />
          <Testimonials />
          <Pricing />
          <DemoFooter />
        </div>
      </>
    );
  }
}

export default Presentation;
