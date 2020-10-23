import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
	let sideDrawerClose = props.show ? classes.SideDrawer : classes.SideDrawer + " " + classes.Close;
	return (
		<>
			<Backdrop show={props.show} clicked={props.close} />
			<div className={sideDrawerClose}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</>
	);
}

export default sideDrawer;