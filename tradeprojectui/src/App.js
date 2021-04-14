import React, { useEffect, useState  , useContext } from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";


// Import Routes
import { authProtectedRoutes, publicRoutes } from "./routes/";
import AppRoute from "./routes/route";

// layouts
import VerticalLayout from "./components/VerticalLayout/";
import HorizontalLayout from "./components/HorizontalLayout/";
import NonAuthLayout from "./components/NonAuthLayout";

// Import scss
import "./assets/scss/theme.scss";

//auth context
import { AuthContext } from '../src/Shared/context/auth-context';

const App = (props) => {
  const [ state, setstate ] = useState({ })
  const auth = useContext(AuthContext)
  console.log(auth.isLoggedIn)

  let getLayout;
  getLayout = () => {
    let layoutCls = VerticalLayout;

    switch (props.layout.layoutType) {
      case "horizontal":
        layoutCls = HorizontalLayout;
        break;
      default:
        layoutCls = VerticalLayout;
        break;
    }
    return layoutCls;
  };
  useEffect(() => {
  getLayout()
  
  }, [])
 
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  //   this.getLayout = this.getLayout.bind(this);
  // }

  /**
   * Returns the layout
   */
 
    const Layout = getLayout();

    return (
      <React.Fragment>
        <Router>
          <Switch>
            { publicRoutes.map((route, idx) => (
              <AppRoute
                path={route.path}
                layout={NonAuthLayout}
                component={route.component}
                key={idx}
                isAuthProtected= {auth.isLoggedIn}
              />
            ))}

            { authProtectedRoutes.map((route, idx) => (
              <AppRoute
                path={route.path}
                layout={Layout}
                component={route.component}
                key={idx}
                isAuthProtected={!auth.isLoggedIn}
              />
            ))}
          </Switch>
        </Router>
      </React.Fragment>
    );
  
}

const mapStateToProps = state => {
  return {
    layout: state.Layout
  };
};

export default connect(mapStateToProps, null)(App);
