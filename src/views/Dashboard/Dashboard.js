import React, { Component } from "react";
import {
  Card,
  Row, Col,
  CardBody
} from "reactstrap";

class Dashboard extends Component {
  state = {
    dropdownOpen: false,
    radioSelected: 2
  };

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="">
                <div className="text-value">9.823</div>
                <div>Members online</div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="">
                <div className="text-value">9.823</div>
                <div>Members online</div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="">
                <div className="text-value">9.823</div>
                <div>Members online</div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="">
                <div className="text-value">9.823</div>
                <div>Members online</div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
