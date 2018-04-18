import React, { Component } from 'react';

class SideBar extends Component {
    render() {
        return (
            <div className="toc">
                <div className="ui visible left vertical sidebar menu no-border sidemenu">
                    <a className="item">
                        <i className="building icon"></i>Listings
                    </a>
                    <a className="item">
                        <i className="database icon"></i>Knowledge Base
                    </a>
                    <a className="item">
                        <i className="comments icon"></i>Messages
                    </a>

                    <a className="item">
                        <i className="clipboard outline icon"></i>Templates
                    </a>

                    <div className="ui accordion">
                        <div className="title">
                            <i className="dropdown icon"></i>
                            Teams
                        </div>
                        <div className="content">
                            <a className="item">Teams Signup</a>
                            <a className="item">Teams Members</a>
                        </div>
                    </div>

                    <div className="ui accordion">
                        <div className="title">
                            <i className="dropdown icon"></i>
                            Reservations
                        </div>
                        <div className="content">
                            <a className="item"><i className="address book outline icon"></i>Reservations</a>
                            <a className="item"><i className="calendar icon" />Manage Icalendar</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;
