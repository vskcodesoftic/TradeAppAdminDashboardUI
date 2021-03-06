import React, { Component } from "react";
import { Row, Col, Button, Input, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

// import images
import servicesIcon1 from "../../assets/images/services-icon/01.png";
import servicesIcon2 from "../../assets/images/services-icon/02.png";
import servicesIcon3 from "../../assets/images/services-icon/03.png";


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Row className="align-items-center">
            <Col sm={6}>
              <div className="page-title-box">
                <h4 className="font-size-18">Dashboard</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item active">
                    Welcome to FutureThinking Dashboard
                  </li>
                </ol>
              </div>
            </Col>

        
          </Row>

          <Row>
            <Col xl={4} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-left mini-stat-img mr-4">
                      <img src={servicesIcon1} alt="" />
                    </div>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                      Products
                    </h5>
                    <h4 className="font-weight-medium font-size-24">
                      1,685{" "}
                      {/* <i className="mdi mdi-arrow-up text-success ml-2"></i> */}
                    </h4>
                    {/* <div className="mini-stat-label bg-success">
                      <p className="mb-0">+ 12%</p>
                    </div> */}
                  </div>
                  <div className="pt-2">
                    <div className="float-right">
                      <Link to="#" className="text-white-50">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link>
                    </div>
                    <p className="text-white-50 mb-0 mt-1">Since last month</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-left mini-stat-img mr-4">
                      <img src={servicesIcon2} alt="" />
                    </div>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                      Trades
                    </h5>
                    <h4 className="font-weight-medium font-size-24">
                      52,368{" "}
                      {/* <i className="mdi mdi-arrow-down text-danger ml-2"></i> */}
                    </h4>
                    {/* <div className="mini-stat-label bg-danger">
                      <p className="mb-0">- 28%</p>
                    </div> */}
                  </div>
                  <div className="pt-2">
                    <div className="float-right">
                      <Link to="#" className="text-white-50">
                         <i className="mdi mdi-arrow-right h5"></i> 
                      </Link>
                    </div>

                    <p className="text-white-50 mb-0 mt-1">Since last month</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-left mini-stat-img mr-4">
                      <img src={servicesIcon3} alt="" />
                    </div>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                      Users
                    </h5>
                    <h4 className="font-weight-medium font-size-24">
                      15.8{" "}
                      {/* <i className="mdi mdi-arrow-up text-success ml-2"></i> */}
                    </h4>
                    {/* <div className="mini-stat-label bg-info">
                      <p className="mb-0"> 00%</p>
                    </div> */}
                  </div>
                  <div className="pt-2">
                    <div className="float-right">
                      <Link to="#" className="text-white-50">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link>
                    </div>

                    <p className="text-white-50 mb-0 mt-1">Since last month</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
         </Row>

       
   
      </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
