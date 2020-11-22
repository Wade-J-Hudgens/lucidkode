import React from "react";
import Home_NORM from "./Home_NORM/Home_NORM";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			screen: props.props.screen,
			open: props.props.open,
			Login: props.props.Login,
			Username: props.props.Username,
			Password: props.props.Password,
			Email: props.props.Email,
			Phone: props.props.Phone,
			LoginValidatedFunction: props.props.LoginValidatedFunction
		}
	}
	render() {
		let RetV;
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
		
		if (this.state.screen === "NORM") {
			RetV = <Home_NORM props={props} />
		}
		
		return(RetV);
	}
}

export default Home;