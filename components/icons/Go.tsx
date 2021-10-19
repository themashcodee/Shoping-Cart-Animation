import React from "react";

interface Props {}

const Go = (props: Props) => {
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
				d="M14 5l7 7m0 0l-7 7m7-7H3"
			/>
		</svg>
	);
};

export default Go;
