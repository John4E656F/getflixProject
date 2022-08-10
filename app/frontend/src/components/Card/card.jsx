import React from "react";
import './card.css';


const Card = ({_id, picture, title, genre, trailer}) => {

    return (


      <div className="card" key={_id}>

            <div className="blurImg">
            <img src={picture}  className="cardImg" alt="alt text goes here"/>
            <h1 className="cardTitle">{title}</h1>
            <p className="cardDesc">{genre}</p>
            <p>{trailer}</p>
            
        </div>
  
  </div>
     
      
    
      
    );
};

export default Card;

// const [backendData, setBackendData] = useState([{}]);

// function fetcher(){
//     fetch("http://localhost:4000/animes").then(
//   response => response.json()
// ).then( data => {
//     setBackendData(data)

//    // console.log('hey data ' + data[1].title)
//   }).catch(error => {
//     console.error(error.message)
//   })
// }


// useEffect(() => {
//     fetcher();
//    }, [])
