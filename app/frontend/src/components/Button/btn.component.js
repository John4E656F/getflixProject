import React from "react";
import "./btn.css";
import Icon from "@material-ui/core/Icon";


/**
 * A custom button componet. It has a set color scheme and takes in height, weight, 
 * and image as props. Try building a build a standard button component with different widths.
*/

const button = (props) => {
    let iconHolder = null;
    const {
        playButton, 
        buttonSize,
        icon,
        height,
        width,
        backgroundColor,
        textColor,
        image,
        onButtonHover,
        hoverStatus,
    } = props;

    if (image) {
        iconHolder = (
            <Icon
                style={playButton ? { marginRight: "15px" } : { marginLeft: "5px" }}
                fontSize={buttonSize}
                className={icon}
            />
        );
    }

    let orderButton = (
        <>
            {props.children}
            {iconHolder}
        </>
    );

    if (playButton) {
        orderButton = (
            <>
                {iconHolder}
                {props.children}
            </>
        )
    };

    const conditionalStyles = {
        height: height,
        width: width,
        backgroundColor: backgroundColor,
        color: textColor,
        opacity: !hoverStatus &&  "88%",
    };

    return (
        <button
            className="Button"
            style={conditionalStyles}
            onMouseEnter={onButtonHover}
            onMouseLeave={onButtonHover}
            >
                {orderButton}
            </button>
    );
};

export default button;