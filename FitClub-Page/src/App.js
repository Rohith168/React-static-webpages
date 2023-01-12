import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
import Testimonials from './components/Testimonials/Testimonials';
import Joinus from './components/Joinus/Joinus';
import Footer from'./components/Footer/Footer';
function App() {
  return (
    <div className="App">
         <Hero></Hero>
         <Programs></Programs>
         <Reasons></Reasons>
         <Plans></Plans>
         <Testimonials></Testimonials>
         <Joinus></Joinus>
        <Footer></Footer>
    
      
    </div>
  );
}

export default App;
