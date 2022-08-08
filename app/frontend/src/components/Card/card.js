import * as React from 'react';



const Card = ({anime}) => {

    return (
      <div key={key}>
        <div className="card">
            <div className="blurImg">
                <img src={anime.picture} alt={altText} className="cardImg"/>
                <h1 className="cardTitle">{anime.title}</h1>
                <p className="cardDesc">{anime.title}</p>
            </div>
        </div>
      </div>
    );
};

export default Card;