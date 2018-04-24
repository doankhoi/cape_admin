import React, { Component } from 'react';
import NavbarMenu from './components/header/NavbarMenu';
import NavbarMenuMobile from './components/header/NavbarMenuMobile';
import SideBar from './components/sidebar/SideBar';
import SideBarMobile from './components/sidebar/SideBarMobile';
import Footer from './components/footer/Footer';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<SideBarMobile />
					<NavbarMenuMobile />
					<div className="pusher">
						<div className="full height">
							<SideBar />
							<div className="article">
								<NavbarMenu />
								<div className="containerli">
									{ this.showContentMenus(routes) }
									<Footer />
								</div>
							</div>
						</div>
					</div>
				</React.Fragment>
			</Router>
		);
	}

	showContentMenus = (routes) => {
		let result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (
					<Route 
						key={ index } 
						path={ route.path } 
						exact={ route.exact } 
						component={ route.main }/>
				);
			});
		}
		return <Switch> {result} </Switch>;
	}
}

export default App;
