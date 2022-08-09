import * as React from 'react';
import { CSSTransition } from "react-transition-group";
import { css } from '@emotion/css'
import { css } from '@emotion/css'




const Card = (props) => {

    return (
      <>
        <Div className={css`margin: 10px;`}  className="cardComponent" key={key} onClick={onClick}>
                <img src={imgSrc} alt={altText} className="cardImg"/>
                <h1 className="cardTitle">{cardTitle}</h1>
                <p className="cardDesc">{cardDesc}</p>
        </Div>

        <CSSTransition></CSSTransition>
      </>
    );
};

export default Card;