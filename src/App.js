import './App.css';
import Banner from './components/Banner/Banner';
import './assests/css/globle.css'
import Navbar from './navbar/Navbar';
import About from './components/Aboutus/About';
import Service from './components/Service/Service';
import Projects from './components/Projects/Projects';
import Expertworker from './components/Expertworker/Expertworker';
import Clientsays from './components/Clientsays/Clientsays';
import Contact from './components/Contact/Contact';
import Footer from './Footer/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Service />
      <Projects />
      <Expertworker />
      <Clientsays />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
