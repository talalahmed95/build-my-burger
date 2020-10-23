import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		showSideDrawer: true
	}

	sideDrawerOpenHandler = () => {
		this.setState({ showSideDrawer: true });
	}

	sideDrawerCloseHandler = () => {
		this.setState({ showSideDrawer: false });
	}

	render() {
		return (
			<Aux>
				<Toolbar />
				<SideDrawer show={this.state.showSideDrawer} close={this.sideDrawerCloseHandler} />
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Aux>
		);
	}
}

export default Layout;