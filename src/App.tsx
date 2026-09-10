import { Access } from './components/site/Access';
import { Header } from './components/site/Header';
import { About } from './components/site/About';
import { Flow } from './components/site/Flow';
import { Footer } from './components/site/Footer';
import { Gallery } from './components/site/Gallery';
import { Hero } from './components/site/Hero';
import { Hotel } from './components/site/Hotel';
import { News } from './components/site/News';
import { Reservation } from './components/site/Reservation';
import { Trimming } from './components/site/Trimming';

export default function App() {
  return (
    <div id="top">
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Trimming />
        <Hotel />
        <Gallery />
        <Flow />
        <News />
        <Access />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}
