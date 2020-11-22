import NavBar from './components/NavBar/NavBar';
import NavBar_NORM from './components/NavBar/NavBar_NORM/NavBar_NORM'
import Home from './components/Home/Home';
import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		let w = window.innerWidth;
		let h = window.innerHeight;
		this.state = {
			screen: "NORM",
			Login: "true",
			Username: "",
			Password: "",
			Email: "",
			Phone: ""
		}
		
		
		
		this.render = this.render.bind(this);
		this.ResizeHandler = this.ResizeHandler.bind(this);
		window.addEventListener('resize', this.ResizeHandler);
	}
	
	render() {
		if (this.state.screen === "NORM") {
			let props = {
				screen: this.state.screen,
				Login: this.state.Login,
				Username: this.state.Username,
				Password: this.state.Password,
				Email: this.state.Email,
				Phone: this.state.Phone,
				LoginValidatedFunction: this.LoginValidated 
			}
			return (
				<div id="LUCIDKODE">
					<NavBar props={props}/>
					<Home props={props} />
				</div>
			);
		}
		else if (this.state.screen === "WIDE") {
			return(<div />);
		}
		else {
			return(<div />);
		}
	}
	
	
	ResizeHandler() {
		let w = window.innerWidth;
		let h = window.innerHeight;
		this.setState({
			screen: "NORM"
		})
	}
	
	DetermineScreenType(w, h) {
		let r = h/w;
		
		if (r <= 9/18) {
			return("WIDE");
		}
		else if (r >= 16/9) {
			return("TALL");
		}
		else {
			return("NORM");
		}
	}
	LoginValidated(Username, Password, Email, Phone) {
		this.setState({
			Login: "true",
			Username: Username,
			Password: Password,
			Email: Email,
			Phone: Phone
		});
	}
}

export default App;
