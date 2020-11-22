import React from "react"
import "./NavBar_Button.css"

class NavBar_Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			screen: props.screen,
			text: props.text,
			link: props.link,
			name: props.name
		}
	}
	render() {
		return (
			<div className={"Nav_" + this.state.screen + "_Div"} id={"NAV_" + this.state.screen + "_" + this.state.name + "_DIV"}>
				<button className={"Nav_" + this.state.screen + "_Button"} id={"NAV_" + this.state.screen + "_" + this.state.name + "_BUTTON"} onClick={this.ClickHandler} style={{width:"25px", height:"25px"}}/>
				
				{"     " +this.state.text}
			</div>
		);
	}
	
	UNSAFE_componentWillReceiveProps(props) {
		this.setState({
			screen: props.screen,
			text: props.text,
			link: props.link,
			name: props.name
		});
	}
	ClickHandler() {
		
	}
}

export default NavBar_Button;