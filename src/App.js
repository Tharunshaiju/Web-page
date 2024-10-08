
import './App.css';
import About from './Comounds/About';
import Blog from './Comounds/Blog';
import Footer from './Comounds/Footer';
import Home from './Comounds/Home';
import Navbar from './Comounds/Navbar';
import NewsLetters from './Comounds/NewsLetters';
import Products from './Comounds/Products';
import Services from './Comounds/Services';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Products />
      <Blog />
      <NewsLetters />
      <Footer />
    </div>
  );
}

export default App;
