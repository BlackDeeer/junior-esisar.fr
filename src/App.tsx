import './App.css';
import { Home } from './screens/Home';
import { RequestQuote } from './screens/RequestQuote'
import { Blog } from './screens/Blog';
import { PageError } from './screens/404';
import { Team } from './screens/Team';
import { ServicesPage } from './screens/Services';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import { Routes, Route, NavLink } from 'react-router-dom';
import { Footer } from './components/Footer';
import { AnimatePresence } from 'framer-motion';

const purpleBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      duration: 2 // secondes
    }
  },
  exit: {
    height: "100vh",
    transition: {
      duration: 2 // secondes
    }
  }
};



type PageTransitionProps = {
  children: React.ReactNode;
};

function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      className="absolute inset-0 z-50 w-full h-full bg-purple-500"
      initial="initial"
      animate="animate"
      exit="initial"
      variants={purpleBox}
    >
      {children}
    </motion.div>
  );
}



function App() {

  const location = useLocation();

  return (
    <PageTransition>
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

        <AnimatePresence initial={ false } mode='wait'>
          <motion.div key={location.pathname} className='flex-1 pt-20 z-10' initial="initial" animate="animate" exit="initial">
            <Routes location={location}>
              <Route path='/' element={ <Home/> }/>
              <Route path='/prestations' element={ <ServicesPage/> }/>
              <Route path='/equipe' element={ <Team/> }/>
              <Route path='/blog' element={ <Blog/> }/>
              <Route path='/devis' element={ <RequestQuote/> }/>
              <Route path="/*" element={ <PageError/> }/>
            </Routes>
          </motion.div>
        </AnimatePresence>

        <footer className='flex-shrink-0 z-40'>
          <Footer/>
        </footer>

      </div>
    </PageTransition>
  );
}


export default App;
