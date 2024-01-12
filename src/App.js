import logo from './logo.svg';
import './App.css';
import LandingPage from "./component/landingPage";
import Header from '../src/component/Header';
import AllFeatures from '../src/component/AllFeatures';
import PricingPage from '../src/component/PricingPage';
import IndustrialPage from '../src/component/IndustrialPage'
import Footer from '../src/component/Footer'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/features" element={<AllFeatures />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/industries" element={<IndustrialPage />} />
            IndustrialPage
          </Routes>
          <Footer/>
        </div>
      </Router>
    </div>
  
  );
}


export default App;
