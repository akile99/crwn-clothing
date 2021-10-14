import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', height:'500px'}} key={props.children}>
			{props.children}
		</div>
	);
};

export default Scroll;