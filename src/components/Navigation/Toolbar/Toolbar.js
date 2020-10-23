import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';

const toolbar = (props) => {
	return (
		<header className={classes.Toolbar}>
			<Button></Button>
			<div className={classes.Logo}>
				<Logo />
			</div>
			<nav className={classes.DesktopOnly}>
				<NavigationItems />
			</nav>
		</header>
	);
}

export default toolbar;