import { Routes, Route, Link} from 'react-router-dom';
import { Meat } from './pages/Meatpage';
import { Salad } from './pages/Saladpage';
import { Soup }  from './pages/Souppage';
import './App.css';

function App() {
  return (
    <>
      <header>
        <Link to='/'>Рецепт мяса</Link>
        <Link to='/salad'>Рецепт салата</Link>
        <Link to='/soup'>Рецепт супа</Link>
      </header>
      <Routes>
        <Route path='/' element={<Meat />} />
        <Route path='/soup' element={<Soup />} />
        <Route path='/salad' element={<Salad />} />
        
      </Routes>
    </>
  );
}

export default App;
