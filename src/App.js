import './App.css';
import Banner from './components/layouts/banner';
import Footer from './components/layouts/footer';
import Advantages from './components/sections/advantages';
import ARPSection from './components/sections/apr';
import HowItWork from './components/sections/howItWork';
import WeSection from './components/sections/we';

function App() {
  return (
    <div>
      <Banner />
      <HowItWork />
      <Advantages />
      <WeSection />
      <ARPSection/>
      <Footer/>
    </div>
  );
}

export default App;
