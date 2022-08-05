import * as React from 'react';
import { CSSTransition } from "react-transition-group";



const Card = (props) => {
  const []

    return (
      <>
        <div className="cardComponent" key={key} onClick={onClick}>
                <img src={imgSrc} alt={altText} className="cardImg"/>
                <h1 className="cardTitle">{cardTitle}</h1>
                <p className="cardDesc">{cardDesc}</p>
        </div>

        <CSSTransition in
      </>
    );
};

export default Card;