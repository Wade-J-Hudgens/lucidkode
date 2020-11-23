import React from "react";
import "./WhatWeDo.css";

class WhatWeDo extends React.Component {
	render() {
		return(
			<div id="WhatWeDo_NORM" >
				<label id="WHATWEDO_NORM_TITLE">What do we do?</label>
				<div id="WHATWEDO_NORM_TEXTBOX0">
					<p className="WHATWEDO_NORM_STATE" id="WHATWEDO_NORM_STATEMENT0">We are web development company that develops affordable, clean, and responsive websites.<br/><br/>Below are some beautiful websites we have made. You can view our full portfollio by clicking "Our Portfollio"</p>
				</div>
				<div id="WHATWEDO_NORM_EXAMPLES">
					<div id="WHATWEDO_NORM_SH0" />
					<br />
					<div id="WHATWEDO_NORM_SH1" />
					<br />
					<div id="WHATWEDO_NORM_SH2" />
					<br />
					<div id="WHATWEDO_NORM_SH3" />
				</div>
			</div>
		);
	}
}

export default WhatWeDo;