import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const TermsAndConditions = () => {
	useTitle("Terms");
	return (
		<div>
			<h2>This is a Terms And Conditions</h2>
			<p>
				Go back to <Link to="/register">Registration</Link>
			</p>
		</div>
	);
};

export default TermsAndConditions;
