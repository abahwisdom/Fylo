import './styles/main.scss'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import curve from './assets/images/bg-curvy-desktop.svg'
import Services from './components/Services';
import  HowFyloWorks  from './components/HowFyloWorks';
import Quotes from './components/Quotes';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <div className='contain-all'>
      <section className='nav-section'>
        <Navbar variant='dark'>
          <div>
            <img src="./assets/images/logo.svg" className='nav-logo' alt="Fylo"/>
          </div>
          
          <Nav className='ml-auto'>
          <Nav.Link href="#home">Features</Nav.Link>
          <Nav.Link href="#team">Team</Nav.Link>
          <Nav.Link href="#sign-in">Sign In</Nav.Link>
          </Nav>
        </Navbar>
      </section>
      
      <section className="get-started-section pt-4 pb-4">

         <img src={curve} className='curve'/>
        
        
        <div className="intro-image-contain text-center">
          <img className='intro-image' src="./assets/images/illustration-intro.png" alt="Fylo intro image"/>
        </div>
        <div className="intro-text text-center mt-4">
          <h1 className='pr-4 pl-4'>All your files in one secure location, accessible anywhere.</h1>
          <p className='mr-4 ml-4'>
            Fylo stores all your most important files in one secure location. Access them wherever 
            you need, share and collaborate with friends family, and co-workers.
          </p>
          <Button className='mt-2'>Get Started</Button>
        </div>
      </section>

      <Services/>
      <HowFyloWorks/>
      <Quotes/>
      <Subscribe/>
      <Footer/>

    </div> 
    </>
  );
}

export default App;
