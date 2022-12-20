import MainHeader from './MainHeader';
import About from './Pages/About';
import Squish from './Pages/Squish';
import Kidgilantes from './Pages/Kidgilantes';
import FFF from './Pages/FFF';
import Contact from './Pages/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div>
        <MainHeader/>
          <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Squish" element={<Squish/>}></Route>
            <Route path="/Kidgilantes" element={<Kidgilantes/>}></Route>
            <Route path="/FFF" element={<FFF/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
          </Routes>
      </div>
    </Router>

  );
}

export default App;
