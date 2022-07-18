// import logo from './logo.svg';
import logo from './logo_aniflix.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
          <ul className='menu-left'>
            <li>Home</li>
            <li>Anime</li>
            <li>Manga</li>
          </ul>
          <ul>
        
          </ul>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>Aniflex is the best anime provider</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
