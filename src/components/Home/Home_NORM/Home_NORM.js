import React from "react";
import "./Home_NORM.css";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import PriceQuote from "./PriceQuote/PriceQuote";
import Reviews from "./Reviews/Reviews";

class Home_NORM extends React.Component {
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
		let RetV = (
			<div id="Home_NORM">
				<WhatWeDo props={props} />
				<PriceQuote props={props} />
				<Reviews props={props} />
			</div>
		);
		
		return (RetV);
	}
}

export default Home_NORM;