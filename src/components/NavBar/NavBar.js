import React from "react";
import NavBar_NORM from "./NavBar_NORM/NavBar_NORM";

class NavBar extends React.Component {
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
	}
	render() {
		if (this.state.screen === "NORM") {
			let props = {
				screen: this.state.screen,
				open: this.state.open,
				Login: this.state.Login,
				Username: this.state.Username,
				Password: this.state.Password,
				Email: this.state.Email,
				Phone: this.state.Phone,
				LoginValidatedFunction: this.state.LoginValidatedFunction
			}
			return (
				<NavBar_NORM props={props}/>
			);
		}
	}
}

export default NavBar;