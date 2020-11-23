import React from "react";
import './NavBar_NORM.css';
import NavBar_Button from './NavBar_components/NavBar_Button.js';

class NavBar_NORM extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			screen: props.props.screen,
			open: 1,
			Login: props.props.Login,
			Username: "ShopHere co",
			Password: props.props.Password,
			Email: props.props.Email,
			Phone: props.props.Phone,
			LoginValidatedFunction: props.props.LoginValidatedFunction
		}
		
		this.render = this.render.bind(this);
		this.OpenCloseNav = this.OpenCloseNav.bind(this);
		this.handleChange_Login_U = this.handleChange_Login_U.bind(this);
		this.handleChange_Login_P = this.handleChange_Login_P.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	render() {
		let comp;
		
		if (this.state.Login === "false") {
			comp = 
			<div id="NAV_NORM" style={{left: this.state.open}}>
				<div id="NAV_NORM_BODY">
					<div id="NAV_NORM_PROFILE_INFO">
						<a id="NAV_NORM_PROFILE_PIC" />
						<label id="NAV_NORM_PROFILE_NAME">{this.state.Username}</label>
					</div>
				
					<div id="NAV_NORM_LINK_DIV">
						<NavBar_Button screen={this.state.screen} name="HOME" text="Home" link="https://www.google.com" />
						<NavBar_Button screen={this.state.screen} name="ABOUTUS" text="About Us" link="https://www.google.com" />
						<NavBar_Button screen={this.state.screen} name="STAFF" text="Staff" link="https://www.google.com" />
						<NavBar_Button screen={this.state.screen} name="PORTFOLLIO" text="Our Portfollio" link="https://www.google.com" />
						<NavBar_Button screen={this.state.screen} name="OURSERVICES" text="Our Services" link="https://www.google.com" />
						<br/>
						<br/>
						<NavBar_Button screen={this.state.screen} name="YOURPROFILE" text="Your Profile" link="https://www.google.com" />
						<NavBar_Button screen={this.state.screen} name="YOURWEBSITES" text="Your Websites" link="https://www.google.com" />
						<NavBar_Button screen={this.state.screen} name="YOURMAINTENANCE" text="Your Maintenance" link="https://www.google.com" />
						<NavBar_Button screen={this.state.screen} name="REQUESTMAINTENANCE" text="Request Maintenance" link="https://www.google.com" />
					</div>
					
					<div id="NAV_NORM_LOGO" />
				</div>
				<button id="NAV_NORM_OPENCLOSE" onClick={this.OpenCloseNav}/>
			</div>;
		}
		else {
			
			comp = 
			<div id="NAV_NORM" style={{left: this.state.open}}>
				<div id="NAV_NORM_BODY">
					<div id="NAV_NORM_PROFILE_INFO">
						<form onSubmit={this.handleSubmit} id="NAV_NORM_FORM">
							<input type="text" value={this.state.Email} placeholder="Email" onChange={this.handleChange_Login_U} id="NAV_NORM_FORM_EMAIL"/>
							<input type="password" value={this.state.Password} placeholder="Password" onChange={this.handleChange_Login_P} id="NAV_NORM_FORM_PASSWORD"/>
							<input type="submit" value="Login" id="NAV_NORM_FORM_SUBMIT" />
							<button id="NAV_NORM_FORM_REGISTER">Register</button>
						</form>
					</div>
				
					<div id="NAV_NORM_LINK_DIV">
						<NavBar_Button screen={this.state.screen} name="HOME" text="Home" link="https://www.google.com" />
						<NavBar_Button screen={this.state.screen} name="ABOUTUS" text="About Us" link="https://www.google.com" />
						<NavBar_Button screen={this.state.screen} name="STAFF" text="Staff" link="https://www.google.com" />
						<NavBar_Button screen={this.state.screen} name="PORTFOLLIO" text="Our Portfollio" link="https://www.google.com" />
						<NavBar_Button screen={this.state.screen} name="OURSERVICES" text="Our Services" link="https://www.google.com" />
						<br/>
						<br/>
						<NavBar_Button screen={this.state.screen} name="YOURPROFILE" text="Your Profile" link="https://www.google.com" />
						<NavBar_Button screen={this.state.screen} name="YOURWEBSITES" text="Your Websites" link="https://www.google.com" />
						<NavBar_Button screen={this.state.screen} name="YOURMAINTENANCE" text="Your Maintenance" link="https://www.google.com" />
						<NavBar_Button screen={this.state.screen} name="REQUESTMAINTENANCE" text="Request Maintenance" link="https://www.google.com" />
					</div>
					
					<div id="NAV_NORM_LOGO" />
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
			screen: props.props.screen
		});
	}
	
	OpenCloseNav() {
		if (this.state.open === 0) {
			this.setState({
				open: -300
			});
		}
		else {
			this.setState({
				open: 0
			});
		}
	}
	handleChange_Login_U(event) {
		this.setState({Email: event.target.value});
	}
	handleChange_Login_P(event) {
		this.setState({Password: event.target.value});
	}
	handleSubmit(event) {
		
		event.preventDefault();
	}
}

export default NavBar_NORM;