import React, { Component } from 'react';

class NavbarMenuMobile extends Component {
    render() {
        return (
            <div className="mobilenavbar">
                <div className="ui fixed main menu push no-border no-radius sidemenu2 borderless">
                    <a className="launch icon item" style={{ paddingTop: "20px" }}>
                        <i className="content icon"></i>
                    </a>
                    <div className="right menu">
                        <div className="ui dropdown item">
                            <i className="user secret icon"></i>
                            <div className="menu">
                                <a className="item">Profile</a>
                                <a className="item">Log Out</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default NavbarMenuMobile;
