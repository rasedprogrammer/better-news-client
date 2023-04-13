import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch(" https://better-news-server.vercel.app/news-categories")
			.then((response) => response.json())
			.then((data) => setCategories(data));
	});
	return (
		<div>
			<h4>All Category {categories.length}</h4>
			{categories.map((category) => (
				<p key={category.id}>
					<Link to={`/category/${category.id}`}>{category.name}</Link>
				</p>
			))}
		</div>
	);
};

export default LeftSideNav;
