import Calculator from './Calculator.jsx';
import pointer from './assets/pointer.webp';
import anya from './assets/anya.png';

function App() {
  return(<>
    <h1 className="title">My Calculator App</h1>
    <Calculator/>
    <img className="pointer" src={pointer} alt="Pointing Image"/>
    <img className="anya" src={anya} alt="Pointing Image"/>
  </>);
}

export default App
