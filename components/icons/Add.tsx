import React from "react";

interface Props {}

const Add = (props: Props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-full w-full"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M12 6v6m0 0v6m0-6h6m-6 0H6"
			/>
		</svg>
	);
};

export default Add;
