import './App.css';

import { Home } from './screens/Home';
import { RequestQuote } from './screens/RequestQuote'
import { Blog } from './screens/Blog';
import { PageError } from './screens/404';
import { Team } from './screens/Team';
import { ServicesPage } from './screens/Services';
import { Footer } from './components/Footer';

import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';



function App() {

  const location = useLocation();

  return (
      <div className='flex flex-col min-h-screen relative'>
        <header className='flex justify-between items-center pt-3 pb-3 pl-10 mr-0 px-0 fixed top-0 w-full bg-white z-40'>
          <NavLink to='/'>
            <img src='images/logo_junior.png' className='flex sm:w-15 md:w-20 lg:w-30' alt='Logo de la Junior Esisar'/>
          </NavLink>
          <nav className='flex justify-end'>
            <NavLink className='mr-4' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/'>Accueil</NavLink><br/>
            <NavLink className='mr-4' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/prestations'>Nos services</NavLink><br/>
            <NavLink className='mr-4' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/equipe'>Qui sommes-nous</NavLink>
            <NavLink className='mr-4' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/blog'>Actualités</NavLink>
            <NavLink className='mr-20' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/devis'>Demande de devis</NavLink>
          </nav>
        </header>

        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade flex-1 pt-20 z-10" timeout={300}>
            <Routes location={location}>
              <Route path='/' element={<Home />} />
              <Route path='/prestations' element={<ServicesPage />} />
              <Route path='/equipe' element={<Team />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/devis' element={<RequestQuote />} />
              <Route path="/*" element={<PageError />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>



        <footer className='flex-shrink-0 z-40'>
          <Footer/>
        </footer>

      </div>
  );
}


export default App;
