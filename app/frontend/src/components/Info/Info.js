import React from "react";

const infoComponentTextAlignStyles = {
	display: "flex",
	flexDirection: "column",
	textAlign: "center",
};

const infoComponent = (props) => {
	const { topText, fontSize, bottomText, image } = props;
	return (
		<>
			<div style={infoComponentTextAlignStyles}>
				{topText && <h3 style={{ fontSize: fontSize }}>{topText}</h3>}
				{bottomText && <h3 style={{ fontSize: fontSize }}>{bottomText}</h3>}
			</div>

			{image && <img src={image} alt="info component" />}
		</>
	);
};

export default infoComponent;
