import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		showSideDrawer: false
	}

	sideDrawerCloseHandler = () => {
		this.setState({ showSideDrawer: false });
	}

	sideDrawerToggleHandler = () => {
		this.setState( prevState => { 
			return { showSideDrawer: !this.state.showSideDrawer };
		});
	}

	render() {
		return (
			<Aux>
				<Toolbar open={this.sideDrawerToggleHandler} />
				<SideDrawer show={this.state.showSideDrawer} close={this.sideDrawerCloseHandler} />
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Aux>
		);
	}
}

export default Layout;