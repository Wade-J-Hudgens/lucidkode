import React from "react"

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
			<div id="NAV_{this.state.screen}_{this.state.name}_DIV">
				<button id="NAV_{this.state.screen}_{this.state.name}_BUTTON" onClick={this.ClickHandler} style={{width:"25px", height:"25px"}}/>
				<a id="NAV_{this.state.screen}_{this.state.name}_LINK" href={this.state.link} style={{height: "25px"}}>{this.state.text}</a>
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