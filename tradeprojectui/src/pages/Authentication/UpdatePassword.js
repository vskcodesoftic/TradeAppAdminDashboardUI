import React, { Component } from "react";
import { Row, Col, Card, CardBody, Alert } from "reactstrap";

// Redux
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

// action
import { userForgetPassword } from "../../store/actions";

// import images
import logoSm from "../../assets/images/logo-sm.png";

class UpdatePasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // handleValidSubmit
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
  }

  // handleValidSubmit
  handleValidSubmit(event, values) {
    this.props.userForgetPassword(values, this.props.history);
  }

  render() {
    return (
      <React.Fragment>
        <div className="home-btn d-none d-sm-block">
          <Link to="/" className="text-dark">
            <i className="fas fa-home h2"></i>
          </Link>
        </div>
        <div className="account-pages my-5 pt-5">
          <div className="container">
            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <div className="position-relative">
                  <Card className="overflow-hidden">
                    <div className="bg-primary">
                      <div className="text-primary text-center p-4">
                        <h5 className="text-white font-size-20">
                          Forget Password
                        </h5>
                        <p className="text-white-50">
                          Enter your email below and we would send a link to
                          reset your password.
                        </p>
                        <Link to="/" className="logo logo-admin">
                          <img src={logoSm} height="24" alt="logo" />
                        </Link>
                      </div>
                    </div>

                    <CardBody className="p-4">
                      <div className="p-3">
                        {this.props.forgetError && this.props.forgetError ? (
                          <Alert color="danger" style={{ marginTop: "13px" }}>
                            {this.props.forgetError}
                          </Alert>
                        ) : null}
                        {this.props.forgetSuccess ? (
                          <Alert color="success" style={{ marginTop: "13px" }}>
                            {this.props.forgetSuccess}
                          </Alert>
                        ) : null}

                        <AvForm
                          className="form-horizontal mt-4"
                          onValidSubmit={this.handleValidSubmit}
                        >
                          <div className="form-group">
                            <AvField
                              name="oldPassword"
                              label="Old Password"
                              className="form-control"
                              placeholder="Enter old password"
                              type="password"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <AvField
                              name="newPassword"
                              label="New Password"
                              className="form-control"
                              placeholder="Enter New Password"
                              type="password"
                              required
                            />
                          </div>
                          <Row className="form-group">
                            <Col className="text-right">
                              <button
                                className="btn btn-primary w-md waves-effect waves-light"
                                type="submit"
                              >
                                update password
                              </button>
                            </Col>
                          </Row>
                        </AvForm>
                      </div>
                    </CardBody>
                  </Card>
             </div>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = state => {
  console.log(state.forgetSuccessMsg);
  const { forgetError, forgetSuccessMsg } = state.ForgetPassword;
  return { forgetError, forgetSuccessMsg };
};

export default withRouter(
  connect(mapStatetoProps, { userForgetPassword })(UpdatePasswordPage)
);
