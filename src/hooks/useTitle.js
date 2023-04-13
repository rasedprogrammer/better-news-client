import { useEffect } from "react";

const useTitle = (title) => {
	useEffect(() => {
		document.title = `${title} - Better News`;
	}, [title]);
};

export default useTitle;
