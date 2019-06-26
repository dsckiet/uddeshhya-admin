import React, { Component } from "react";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table
} from "reactstrap";

class ViewProjects extends Component {
  state = {};
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>List of Projects</CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Project name</th>
                      <th>Description</th>
                      <th>Image</th>
                      <th>Date Added</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Samppa Nori</td>
                      <td width="50%">
                        Library is never just a random collection of books, to
                        build up a library is to create a life. Books have the
                        energy that fuels the imagination. They open up windows
                        to the world and inspire us to explore, achieve and
                        contribute in improving our quality of life. <br />
                        We have set up libraries in four government schools{" "}
                        <br />
                        <br />
                        1.Asalat Nagar -Primary <br />
                        2.Asalat Nagar-Secondary <br />
                        3.Naan (Hapur)
                        <br />
                        4.Nekpur <br />
                        Library is composed of different storybooks, novels,
                        autobiographies etc. which will inculcate some fantastic
                        ways to lead a life amongst kids.
                      </td>
                      <td>Member</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
                    </tr>

                    <tr>
                      <td>Samppa Nori</td>
                      <td width="50%">
                        Library is never just a random collection of books, to
                        build up a library is to create a life. Books have the
                        energy that fuels the imagination. They open up windows
                        to the world and inspire us to explore, achieve and
                        contribute in improving our quality of life. <br />
                        We have set up libraries in four government schools{" "}
                        <br />
                        <br />
                        1.Asalat Nagar -Primary <br />
                        2.Asalat Nagar-Secondary <br />
                        3.Naan (Hapur)
                        <br />
                        4.Nekpur <br />
                        Library is composed of different storybooks, novels,
                        autobiographies etc. which will inculcate some fantastic
                        ways to lead a life amongst kids.
                      </td>
                      <td>Member</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                {/* <Pagination>
                  <PaginationItem>
                    <PaginationLink previous tag="button" />
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button" />
                  </PaginationItem>
                </Pagination> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ViewProjects;
