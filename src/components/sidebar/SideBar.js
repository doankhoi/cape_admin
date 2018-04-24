import React, { Component } from 'react';
import MenuLink from '../menu/MenuLink';

class SideBar extends Component {
    render() {
        return (
            <div className="toc">
                <div className="ui visible left vertical sidebar menu no-border sidemenu">
                    <MenuLink 
                        to="/listings" 
                        label="Listings" 
                        activeOnlyWhenExact={ false }
                        children={ <i className="building icon"></i> }
                        />
                    
                    <MenuLink 
                        to="/kb" 
                        label="Knowledge Base" 
                        activeOnlyWhenExact={ false }
                        children={ <i className="database icon"></i> }
                        />

                    <MenuLink 
                        to="/messages" 
                        label="Messages" 
                        activeOnlyWhenExact={ false }
                        children={ <i className="comments icon"></i> }
                        />

                    <MenuLink 
                        to="/templates" 
                        label="Templates" 
                        activeOnlyWhenExact={ false }
                        children={ <i className="clipboard outline icon"></i> }
                        />

                    <MenuLink 
                        to="/teams" 
                        label="Teams" 
                        activeOnlyWhenExact={ false }
                        children={ <i className="sign in alternate icon"></i> }
                        />

                    <div className="ui accordion">
                        <div className="title">
                            <i className="dropdown icon"></i>
                            Teams
                        </div>
                        <div className="content">
                            <a className="item">
                                <i className="sign in alternate icon"/>Teams Signup
                            </a>
                            <a className="item">
                                <i className="archive icon"/>Teams Members
                            </a>
                        </div>
                    </div>

                    <div className="ui accordion">
                        <div className="title">
                            <i className="dropdown icon"></i>
                            Reservations
                        </div>
                        <div className="content">
                            <a className="item"><i className="address book outline icon"/>Reservations</a>
                            <a className="item"><i className="calendar icon" />Manage Icalendar</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;
