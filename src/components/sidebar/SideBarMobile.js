import React, { Component } from 'react';

class NavbarMenu extends Component {
    render() {
        return (
            <div className="ui vertical push sidebar menu  thin" id="toc">
                <a href="dashboard-v1.html" className="ui medium image borderless">
                    <img src="img/bg/3.png" alt=""/>
                </a>
                <a className="item">
                    <b>Main</b>
                </a>

                <div className="ui accordion">
                    <div className="title">
                        <i className="dropdown icon"></i>
                        Dashboard
                		<a className="ui mini red label">New</a>
                    </div>
                    <div className="content">
                        <a className="item" href="dashboard.html">
                            Dashboard
                		</a>
                    </div>
                    <div className="title">
                        <i className="dropdown icon"></i>
                        Apps
            		</div>
                    <div className="content">
                        <a className="item" href="inbox.html">
                            Inbox
                        </a>
                        <a className="item" href="mail.html">
                            Mailbox
                        </a>
                        <a className="item" href="chat.html">
                            Chat
                        </a>
                        <a className="item" href="contacts.html">
                            Contacts
                        </a>
                        <a className="item" href="photoeditor.html">
                            Photo Editor
                        </a>
                        <a className="item" href="calendar.html">
                            Calendar
                        </a>
                        <a className="item" href="filter.html">
                            Filter
                        </a>
                        <a className="item" href="todo.html">
                            Todo
                        </a>

                    </div>
                    <div className="title">
                        <i className="dropdown icon"></i>
                        Layouts
                    </div>
                    <div className="content">
                        <a className="item" href="sidebar.html">
                            Sidebar
                        </a>
                    </div>

                    <a className="item">
                        <b>Components</b>
                    </a>

                    <div className="title">
                        <i className="dropdown icon"></i>
                        UI-Kit
                    </div>
                    <div className="content">
                        <a className="item" href="accordion.html">
                            Accordion
                        </a>
                        <a className="item" href="breadcrumb.html">
                            Breadcrumb
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavbarMenu;


