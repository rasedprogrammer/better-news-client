import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import NewSummaryCard from "../../Shared/NewSummaryCard/NewSummaryCard";

const Category = () => {
	useTitle("Category");
	const categoryNews = useLoaderData();
	return (
		<div>
			<h2>This is a category: {categoryNews.length}</h2>
			{categoryNews.map((news) => (
				<NewSummaryCard key={news._id} news={news}></NewSummaryCard>
			))}
		</div>
	);
};

export default Category;
