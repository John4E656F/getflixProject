import * as React from 'react';



const Card = ({anime}) => {

  console.log("at card " + anime.id);
  
  anime.map(ani => {
    console.log( "ani title " + ani.title);
  })


    return (


      <div className="card">
         {anime.map(ani => {
          if(typeof ani.id === 'undefined'){
            <p>loading... </p>
          }else{
            
          {console.log('this is title ' + ani.title )
           console.log('this is pic ' + ani.picture)}

            <div className="blurImg">
            <img src={ani.picture}  className="cardImg"/>
            <h1 className="cardTitle">{ani.title}</h1>
            <p className="cardDesc">{ani.title}</p>
        </div>
          }
         })}

  
  </div>
     
      
    
      
    );
};

export default Card;