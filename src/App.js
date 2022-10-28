import './App.css';
import Header from './Component/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Carts from './Component/Carts';
import CardsDetails from './Component/CardDetails';

function App() {
  return (
 <div>
<Header/>
 <Routes>
 {/* <Route exact path='/' element={ <Home/>} /> */}
 <Route exact path='/' element={ <Carts/>} />
 <Route exact path='/cart/:id' element={ <CardsDetails/>} />
 </Routes>
 
 </div>
  );
}

export default App;
