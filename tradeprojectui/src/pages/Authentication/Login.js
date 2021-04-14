import React, { useContext, useState } from "react";
import { Row, Col, Card, CardBody, Alert } from "reactstrap";
import { useHistory } from 'react-router-dom';


// Redux
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

import Loader from "../../components/Loader";
// actions

// import images
import logoSm from "../../assets/images/logo-sm.png";

import { useFormik } from 'formik';
import { useHttpClient } from "../../Shared/hooks/http-hook";
import { AuthContext } from "../../Shared/context/auth-context";


const Login = (props) =>  {
  const history = useHistory()
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
    
  const submitHandler = async (email, pwd) => {
    try {
      const responseData = await sendRequest(
         process.env.REACT_APP_BACKEND_URL+'api/user/login',
         'POST',
         JSON.stringify({
           email: email,
           password: pwd
         }),
         {
           'Content-Type': 'application/json'
         }
       );
       auth.login(responseData.userId , responseData.token);
       history.push('/admin/dashboard');
      
     } catch (err) {
       console.log(err)
     }
    

  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password : ''
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
     const email = values.email;
     const pwd = values.password;

     

       submitHandler(email , pwd); 
    },
  });
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
                  {props.loading ? <Loader /> : null}

                  <Card className="overflow-hidden">
                    <div className="bg-primary">
                      <div className="text-primary text-center p-4">
                        <h5 className="text-white font-size-20">
                          Welcome Back !
                        </h5>
                        <p className="text-white-50">
                          Sign in to continue to Think Big.
                        </p>
                        <Link to="/" className="logo logo-admin">
                          <img src={logoSm} height="24" alt="logo" />
                        </Link>
                      </div>
                    </div>

                    <CardBody className="p-4">
                      <div className="p-3">
                        <AvForm
                          className="form-horizontal mt-4"
                          onValidSubmit={formik.handleSubmit}
                        >
                          {props.error ? (
                            <Alert color="danger">{props.error}</Alert>
                          ) : null}

                          <div className="form-group">
                            <AvField
                              name="email"
                              label="Email"
                              className="form-control"
                              placeholder="Enter email"
                              type="email"
                              required
                              onChange={formik.handleChange}
                              value={formik.values.email}
                            />
                          </div>
                          <div className="form-group">
                            <AvField
                              name="password"
                              label="Password"
                              type="password"
                              required
                              placeholder="Enter Password"
                              onChange={formik.handleChange}
                              value={formik.values.password}
                            />
                          </div>

                          <Row className="form-group">
                            <Col sm={6}>
                              &nbsp;
                              {/* <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                            <label className="custom-control-label" for="customControlInline">Remember me</label>
                                                        </div> */}
                            </Col>
                            <Col sm={6} className="text-right">
                              <button
                                className="btn btn-primary w-md waves-effect waves-light"
                                type="submit"
                              >
                                Log In
                              </button>
                            </Col>
                          </Row>
                          <Row className="form-group mt-2 mb-0">
                            <div className="col-12 mt-4">
                              <Link to="/forget-password">
                                <i className="mdi mdi-lock"></i> Forgot your
                                password?
                              </Link>
                            </div>
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



export default Login
