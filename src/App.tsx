import './App.css';
import { Home } from './screens/Home';
import { RequestQuote } from './screens/RequestQuote'
import { Blog } from './screens/Blog';

import { Routes, Route, NavLink } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Team } from './screens/Team';


function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='flex justify-between items-center pt-3 pb-3 mr-20 ml-10 fixed top-0 w-full bg-white bg-opacity-50 backdrop-blur-md'>
        <NavLink to='/'>
          <img src='images/logo_junior.png' className='flex sm:w-15 md:w-20 lg:w-30' alt='Logo de la Junior Esisar'/>
        </NavLink>
        <nav className='flex justify-end'>
          <NavLink className='mr-4' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/'>Accueil</NavLink><br/>
          <NavLink className='mr-4' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/competences'>Nos services</NavLink><br/>
          <NavLink className='mr-4' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/equipe'>Qui sommes-nous</NavLink>
          <NavLink className='mr-4' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/blog'>Actualités</NavLink>
          <NavLink className='mr-4' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/devis'>Demande de devis</NavLink>
        </nav>
      </header>

      <div className='flex-1 container pt-20'>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/equipe' element={ <Team/> }/>
          <Route path='/blog' element={ <Blog/> }/>
          <Route path='/devis' element={ <RequestQuote/> }/>
        </Routes>
      </div>

      <footer className='flex-shrink-0'>
        <Footer/>
      </footer>
    </div>
    
  );
}

export default App;
