import './App.css';
import MainHeader from './MainHeader';
import Descriptor from './DescriptionBanner';
import About from './Pages/About';
import Squish from './Pages/Squish';
import Kidgilantes from './Pages/Kidgilantes';
import FFF from './Pages/FFF';
import Contact from './Pages/Contact';

function App() {
  let component;
  console.log(window.location.pathname);
  switch(window.location.pathname){
    case "/":
      component = <About/>;
      break;
    case "/About":
      component = <About/>;
      break;
    case "/Squish":
      component = <Squish/>;
      break;
    case "/FFF":
      component = <FFF/>;
      break;
    case "/Kidgilantes":
      component = <Kidgilantes/>;
      break;
    case "/Contact":
      component = <Contact/>;
      break;
    default:
      component = <App/>;
  }

  return (
    <div className="App">
      <MainHeader/>
      <Descriptor message={"bleep bloop"}></Descriptor>
      <h2>{component}</h2>
    </div>
  );
}

export default App;
