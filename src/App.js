import  santa from './santa.jpg'
import gifts from './gifts.jpg'
import './App.css';
import { Presents } from './Presents';

function App() {
  return (
    <div className='app '>
      <div className="container">
        <img src={ gifts } alt="foto" width="250px"/>
      </div>

      <div className="container">
      <h1>- Regalos de Navidad -</h1>
      </div>
      <Presents/>
      <div className="container">
      <img  className="marginPicure" src={ santa } alt="foto" width="250px"/>
      </div>
    </div>
  );
}

export default App;