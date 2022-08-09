import * as React from "react"

type CardProps = {
  altText: string,
  text: string,
}

const Card = ({altText, text}: CardProps) => {

  return (
    <div key={key}>
      <img src="" alt={altText} />
      <p>{text}</p>
    </div>
  );
};


const CardList = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  
  // TODO: Keep in mind of the loading state


// TODO: Do all the fetching of data inside a useEffect
  fetchData () => (
    axios.get('fancy data').then(response => setMovies(response)).catch(error => setError(error))
  
  return (
    <div>
      {error ? <div> Some Nice Ui saying that we cannot load </div>  
      : 
      movies.map(movie => <Card altText={movie.alText} text={movie.text} key={movie.id}/>)}
    </div>

  )
};