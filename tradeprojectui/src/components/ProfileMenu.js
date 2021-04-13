
import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { withRouter, Link } from 'react-router-dom';

// users
import user4 from '../assets/images/users/user-4.jpg';

class ProfileMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            menu: !prevState.menu
        }));
    }


    render() {

        return (
            <React.Fragment>
                <Dropdown isOpen={this.state.menu} toggle={this.toggle} className="d-inline-block" >
                    <DropdownToggle className="btn header-item waves-effect" id="page-header-user-dropdown" tag="button">
                        <img className="rounded-circle header-profile-user" src={user4} alt="Header Avatar" />
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem tag="a" href="update-password"><i className="mdi mdi-account-circle font-size-17 align-middle mr-1"></i>Change Password</DropdownItem>
                        <div className="dropdown-divider"></div>
                        <Link
                            to='/logout'
                            className="dropdown-item">
                            <i className="mdi mdi-logout font-size-17 align-middle mr-1"></i>
                            <span>Logout</span>
                        </Link>
                    </DropdownMenu>
                </Dropdown>
            </React.Fragment>
        );
    }
}

export default withRouter(ProfileMenu);


