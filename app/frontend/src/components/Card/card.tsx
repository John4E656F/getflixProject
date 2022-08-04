import * as React from 'react';

type CardProps = {
    key: string,
    altText: string,
    cardTitle: string,
    cardDesc: string,
    imgSrc: string,
  }


const Card = ({key, altText, cardTitle, cardDesc, imgSrc}: CardProps) => {

    return (
      <div key={key}>
        <div className="card">
            <div className="blurImg">
                <img src={imgSrc} alt={altText} className="cardImg"/>
                <h1 className="cardTitle">{cardTitle}</h1>
                <p className="cardDesc">{cardDesc}</p>
            </div>
        </div>
      </div>
    );
};

export default Card;