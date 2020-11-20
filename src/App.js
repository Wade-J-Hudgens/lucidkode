import NavBar from './components/NavBar';
import NavBar_NORM from './components/NavBar/NavBar_NORM/NavBar_NORM'
import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		let w = window.innerWidth;
		let h = window.innerHeight;
		let r = h/w;
		
		if (r <= 9/18) {
			this.state = {
				isTallScreen: 'false',
				isWideScreen: 'true',
				isNormalScreen: 'false'
			}
			console.log('wide');
		}
		else if (r >= 16/9) {
			this.state = {
				isTallScreen: 'true',
				isWideScreen: 'false',
				isNormalScreen: 'false'
			}
			console.log('tall');
		}
		else {
			this.state = {
				isTallScreen: 'false',
				isWideScreen: 'false',
				isNormalScreen: 'true'
			}
			console.log('normal');
		}
		
		this.render = this.render.bind(this);
		this.ResizeHandler = this.ResizeHandler.bind(this);
		window.addEventListener('resize', this.ResizeHandler);
	}
	
	render() {
		let props = {
			isNormalScreen: this.state.isNormalScreen,
			isWideScreen: this.state.isWideScreen,
			isTallScreen: this.state.isTallScreen
		}
		return (
			<div id="LUCIDKODE">
				<NavBar_NORM props={props}/>
			</div>
		);
	}
	
	
	ResizeHandler() {
		let w = window.innerWidth;
		let h = window.innerHeight;
		let r = h/w;
		
		if (r <= 9/18) {
			this.setState ({
				isTallScreen: 'false',
				isWideScreen: 'true',
				isNormalScreen: 'false'
			});
			console.log('wide');
		}
		else if (r >= 16/9) {
			this.setState ({
				isTallScreen: 'true',
				isWideScreen: 'false',
				isNormalScreen: 'false'
			});
			console.log('tall');
		}
		else {
			this.setState ({
				isTallScreen: 'false',
				isWideScreen: 'false',
				isNormalScreen: 'true'
			});
			console.log('normal');
		}
	}
}

export default App;
