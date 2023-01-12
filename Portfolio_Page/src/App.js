import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Srevices from "./Components/Services/Srevices";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonial/Testimonial";
function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Intro></Intro>
     <Srevices></Srevices>
     <Experience></Experience>
     <Works></Works>
     <Portfolio></Portfolio>
     <Testimonial></Testimonial>
    </div>
  );
}

export default App;
