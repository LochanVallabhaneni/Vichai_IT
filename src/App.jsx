import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Product from './components/Product';
import Commitment from './components/Commitment';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Product />
        <Commitment />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
