import React, { Component } from 'react';
import NavbarMenu from './components/header/NavbarMenu';
import NavbarMenuMobile from './components/header/NavbarMenuMobile';
import SideBar from './components/sidebar/SideBar';
import SideBarMobile from './components/sidebar/SideBarMobile';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';


class App extends Component {
	render() {
		return (
			<React.Fragment>
				
				<SideBarMobile />
				<NavbarMenuMobile />

				<div className="pusher">
					<div className="full height">
						<SideBar />
						<div className="article">
							<NavbarMenu />
							<div className="containerli">
								<Main />
								<Footer />
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
