import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import MetisMenu from "metismenujs";

import {AuthContext} from '../../Shared/context/auth-context'

import { useAuth } from '../../Shared/hooks/auth-hook';


import SimpleBar from "simplebar-react";

const SidebarContent = props => {
  const { token, login, logout, userId } = useAuth();
  return (
    <AuthContext.Provider
    value={{ 
      isLoggedIn: !!token, 
      token : token,
      login: login, 
      userId : userId,
       logout: logout
       }}
  >
    <div id="sidebar-menu">
      <ul className="metismenu list-unstyled" id="side-menu">
        <li className="menu-title">Main</li>

        <li>
          <Link to="/dashboard" className="waves-effect">
            <i className="ti-home"></i>
            {/* <span className="badge badge-pill badge-primary float-right">
              2
            </span> */}
            <span>Dashboard</span>
          </Link>
        </li>
        {token && (
        <li>
          <Link to="/users" className=" waves-effect">
            <i className="ti-user"></i>
            <span>Users</span>
          </Link>
        </li>
        )}
        <li>
          <Link to="/#" className="has-arrow waves-effect">
            <i className="ti-shopping-cart-full
"></i>
            <span>Product</span>
          </Link>
          <ul className="sub-menu"  >
            <li>
              <Link to="/products">All Products</Link>
            </li>
          </ul>
        </li>
      
        <li className="menu-title">Payments</li>
        <li>
          <Link to="/#" className="has-arrow waves-effect">
            <i className="ti-wallet"></i>
            <span>List of Payments</span>
          </Link>
          <ul className="sub-menu">
            <li>
              <Link to="/payments">Payments</Link>
            </li>
          </ul>
        </li>
        
        
        <li className="menu-title">Notifications</li>
        <li>
          <Link to="/#" className="has-arrow waves-effect">
            <i className="ti-wallet"></i>
            <span>Send Notification</span>
          </Link>
          <ul className="sub-menu">
            <li>
              <Link to="/send-notification">To All Users</Link>
            </li>
          </ul>
        </li>

        <li className="menu-title">Plans</li>

        <li>
          <Link to="/#" className="has-arrow waves-effect">
            <i className="ti-archive"></i>
            <span> Plans </span>
          </Link>
          <ul className="sub-menu">
            <li>
              <Link to="/plans/createPlan">Create Plan</Link>
            </li>
            <li>
              <Link to="/plans">Plans</Link>
            </li>
       </ul>
        </li>

        <li className="menu-title">User</li>

<li>
  <Link to="/update-password" className="waves-effect">
    <i className="ti-lock"></i>
    {/* <span className="badge badge-pill badge-primary float-right">
      2
    </span> */}
    <span>Change Password</span>
  </Link>
</li>
<li>
  <Link to="/dashboard" className="waves-effect">
    <i className="ti-power-off"></i>
    {/* <span className="badge badge-pill badge-primary float-right">
      2
    </span> */}
    <span>Logout</span>
  </Link>
</li>
   </ul>
    </div>
  </AuthContext.Provider>
  );
};

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.initMenu();
  }

  componentDidUpdate(prevProps) {
    if (this.props.type !== prevProps.type) {
      this.initMenu();
    }
  }

  initMenu() {
    if (this.props.type !== "condensed" || this.props.isMobile) {
      new MetisMenu("#side-menu");

      var matchingMenuItem = null;
      var ul = document.getElementById("side-menu");
      var items = ul.getElementsByTagName("a");
      for (var i = 0; i < items.length; ++i) {
        if (this.props.location.pathname === items[i].pathname) {
          matchingMenuItem = items[i];
          break;
        }
      }
      if (matchingMenuItem) {
        this.activateParentDropdown(matchingMenuItem);
      }
    }
  }

  activateParentDropdown = item => {
    item.classList.add("mm-active");
    const parent = item.parentElement;

    if (parent) {
      parent.classList.add("mm-active"); // li
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show");

        const parent3 = parent2.parentElement;

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement;
          if (parent4) {
            parent4.classList.add("mm-active");
          }
        }
      }
      return false;
    }
    return false;
  };

  render() {
    return (
      <React.Fragment>
        {this.props.type !== "condensed" ? (
          <SimpleBar style={{ maxHeight: "100%" }}>
            <SidebarContent />
          </SimpleBar>
        ) : (
          <SidebarContent />
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(Sidebar);
