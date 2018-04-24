import React, { Component } from 'react';

class NavbarMenu extends Component {
	render() {
		return (
			<div className="navbarmenu">
				<div className="ui fixed top  menu no-border no-radius borderless navmenu">
					<a className="item active no-padding logo" href="dashboard.html" style={{ width: "250px" }}>
						<img className="ui image logoImg" src="/img/cohost-club-logo.png" alt=""/>
					</a>
					<a className="item hamburger" data-name="show">
						<i className="align justify icon"></i>
					</a>
					<div className="right menu">
						<div className="ui dropdown item">
							<i className="user secret icon"></i>
							<div className="menu">
								<a className="item" href="profile.html">Profile</a>
								<a className="item" href="signin.html">Sign Out</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NavbarMenu;
