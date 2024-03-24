
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Company from './components/pages/Company';
import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Container customClass="min-height"> <Home /> </Container>}/>
        <Route path="/company"element={<Container><Company /></Container>}/>
        <Route path="/contact"element={<Container><Contact /></Container>}/>
        <Route path="/newproject"element={<Container><NewProject /></Container>}/>
      </Routes>
      <p>foote</p>
    </Router>

  );
}

export default App;
