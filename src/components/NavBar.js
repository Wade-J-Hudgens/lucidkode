import React from "react";
import './NavBar.css';
import NavBar_Button from './NavBar_components/NavBar_Button.js';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isNormalScreen: props.props.isNormalScreen,
			isTallScreen: props.props.isTallScreen,
			isWideScreen: props.props.isWideScreen,
			open: 1,
			Login: "false"
		}
		
		this.render = this.render.bind(this);
		this.OpenCloseNav = this.OpenCloseNav.bind(this);
	}
	render() {
		return ({});
	}
	UNSAFE_componentWillReceiveProps(props) {
		this.setState({
			isNormalScreen: props.props.isNormalScreen,
			isTallScreen: props.props.isTallScreen,
			isWideScreen: props.props.isWideScreen
		});
	}
	
	OpenCloseNav() {
		console.log("test");
		if (this.state.open === 1) {
			this.setState({
				open: 0
			});
		}
		else {
			this.setState({
				open: 1
			});
		}
	}
}

export default NavBar;