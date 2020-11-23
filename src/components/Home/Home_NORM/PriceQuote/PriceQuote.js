import React from "react";
import "./PriceQuote.css";

class PriceQuote extends React.Component {
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
		if (this.state.Login === "true") {
			return(
				<div id="PriceQuote_NORM" >
					<div id="PRICEQUOTE_NORM_TABLE_DIV">
						<table id="PRICEQUOTE_NORM_TABLE">
							<tr>
								<th>Service</th>
								<th>Estimated Quote</th>
							</tr>
							<tr>
								<td>Website Cost</td>
								<td>$150 per page</td>
							</tr>
							<tr>
								<td>Simple Backend</td>
								<td>$150</td>
							</tr>
							<tr>
								<td>Complex Backend</td>
								<td>$250</td>
							</tr>
							<tr>
								<td>Advanced Backend</td>
								<td>$350</td>
							</tr>
							<tr>
								<td>Basic Hosting (Monthly)</td>
								<td>$20</td>
							</tr>
							<tr>
								<td>Hosting + Email w/ 10gb of storage (Monthly)</td>
								<td>$35</td>
							</tr>
							<tr>
								<td>Hosting + Email w/ 50gb of storage (Monthly)</td>
								<td>$45</td>
							</tr>
							<tr>
								<td>Hosting + Email w/ 100gb of (Monthly)</td>
								<td>$55</td>
							</tr>
							<tr>
								<td>Email + Email w/ 1tb of storage (Monthly)</td>
								<td>$80</td>
							</tr>
							<tr>
								<td>Domain Name (Monthly)</td>
								<td>$3</td>
							</tr>
						</table>
					</div>
					<button id="PRICEQUOTE_NORM_GETAQUOTE">Click here to get a price quote!</button>
				</div>
			);
		}
		else {
			
		}
	}
}

export default PriceQuote;