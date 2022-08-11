import React from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import './card.css';


const Card = (props) => {


    return (
      <>
        <div className="card" key={props.id}>
          <img src={props.picture} alt="alt text goes here"/>
          <div  className="info-carousel">
            <p>{props.title}</p>
              <Stack spacing={1}>
                <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
              </Stack>
          </div>
        </div> 
      </>
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
