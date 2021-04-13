import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

class SendNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      rows1: []
    };
  }
  handleAddRow = () => {
    const item = {
      name: ""
    };
    this.setState({
      rows: [...this.state.rows, item]
    });
  };

 

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Row className="align-items-center">
            <Col sm={6}>
              <div className="page-title-box">
                <h4 className="font-size-18">Form Repeater</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">Forms</Link>
                  </li>
                  <li className="breadcrumb-item active">Form Repeater</li>
                </ol>
              </div>
            </Col>

           
          </Row>

          <Row>
            <div className="col-12">
              <Card>
                <CardBody>
                  <h4 className="card-title">Example</h4>
                  <table style={{ width: "100%" }}>
                    <tbody>
                      <tr id="addr0" key="">
                        <td>
                          <Form
                            className="repeater"
                            encType="multipart/form-data"
                          >
                            <div data-repeater-list="group-a">
                              <Row data-repeater-item>
                                <Col lg="2" className="form-group">
                                  <Label for="name">Title</Label>
                                  <Input
                                    type="text"
                                    id="name"
                                    name="untyped-input"
                                  />
                                </Col>

                              

                                <Col lg="2" className="form-group">
                                  <Label for="subject">Subject</Label>
                                  <Input type="text" id="subject" />
                                </Col>

                              

                                <Col lg="2" className="form-group">
                                  <Label for="message">Message</Label>
                                  <Input type="textarea" id="message" />
                                </Col>
                                <Col
                                  lg="2"
                                  className="form-group align-self-center"
                                >
                                  <Button
                                    onClick={this.handleRemoveRow}
                                    color="primary"
                                    className="mt-3"
                                    style={{ width: "100%" }}
                                  >
                                    {" "}
                                    Send{" "}
                                  </Button>
                                </Col>
                              </Row>
                            </div>
                          </Form>
                        </td>
                      </tr>

                 
                    </tbody>
                  </table>
               
                </CardBody>
              </Card>
            </div>
          </Row>

      </div>
      </React.Fragment>
    );
  }
}

export default SendNotification;
