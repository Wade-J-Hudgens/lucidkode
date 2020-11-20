import React from "react";
import './NavBar_NORM.css';
import NavBar_Button from './NavBar_components/NavBar_Button.js';

class NavBar_NORM extends React.Component {
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
		console.log("TEST");
		let comp;
		if (this.state.isTallScreen === 'true') {
			comp = 
			<div id="NAV_TALL">
				
				
			</div>;
		}
		else if (this.state.isWideScreen === 'true') {
			comp = <div id="NAV_WIDE"></div>;
		}
		else if (this.state.isNormalScreen === 'true') {
			let left;
			if (this.state.open === 1) {
				left = 0;
			}
			else {
				left = -300;
			}
			
			let sc = "";
			if (this.state.isNormalScreen) {
				sc = "NORM";
			}
			else if (this.state.isTallScreen) {
				sc = "TALL";
			}
			else {
				sc = "WIDE";
			}
			
			comp = 
			<div id="NAV_NORM" style={{left: left}}>
				<div id="NAV_NORM_BODY">
					<div id="NAV_NORM_PROFILE_INFO">
						<button id="NAV_NORM_PROFILE_PIC" />
						<label id="NAV_NORM_PROFILE_NAME">FakeCorp co</label>
					</div>
					
					<div id="NAV_NORM_LINK_DIV">
						<NavBar_Button screen={sc} name="HOME" text="Home" link="https://www.google.com" />
						<br/>
						<NavBar_Button screen={sc} name="HOME" text="Home" link="https://www.google.com" />
						<br/>
						<NavBar_Button screen={sc} name="HOME" text="Home" link="https://www.google.com" />
						<br/>
						<NavBar_Button screen={sc} name="HOME" text="Home" link="https://www.google.com" />
						<br/>
					</div>
				</div>
				<button id="NAV_NORM_OPENCLOSE" onClick={this.OpenCloseNav}/>
			</div>;
		}
		
		return(
			comp
		);
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

export default NavBar_NORM;