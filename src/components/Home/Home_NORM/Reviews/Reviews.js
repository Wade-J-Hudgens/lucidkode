import React from "react";
import "./Reviews.css";

class Reviews extends React.Component {
	render() {
		return(
			<div id="Reviews_NORM" >
				<button className="REVIEWS_NORM_BUTTON" id="REVIEWS_NORM_ABOUTUS">About Us</button>
				<button className="REVIEWS_NORM_BUTTON" id="REVIEWS_NORM_STAFF">Staff</button>
				<button className="REVIEWS_NORM_BUTTON" id="REVIEWS_NORM_OURPORTFOLLIO">Our Portfollio</button>
				<button className="REVIEWS_NORM_BUTTON" id="REVIEWS_NORM_OURSERVICES">Our Services</button>
				<button className="REVIEWS_NORM_BUTTON" id="REVIEWS_NORM_YOURPROFILE">Your Profile</button>
				<button className="REVIEWS_NORM_BUTTON" id="REVIEWS_NORM_YOURWEBSITES">Your Websites</button>
				<button className="REVIEWS_NORM_BUTTON" id="REVIEWS_NORM_YOURMAINT">Your Maint</button>
				<button className="REVIEWS_NORM_BUTTON" id="REVIEWS_NORM_REQUESTMAINT">Request Maint</button>
			</div>
		);
	}
}

export default Reviews;