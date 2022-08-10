import React from "react";
import './card.css';


const Card = ({id, picture, title, genre, trailer}) => {


    return (


      <div className="card" key={id}>

        <div className="blurImg">
            <img src={"https://s4.anilist.co/file/anilistcdn/media/anime/banner/31-pYM5NdKIRa5h.jpg"}  className="cardImg" alt="alt text goes here"/>
            <a className="href">Play{trailer}</a>
            
        </div>
            <h1 className="cardTitle">{title}</h1>
            <p className="cardDesc">{genre}</p>
  
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
