import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MonthDetails from './MonthDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file for AOS
import { useEffect } from 'react';
import ReactCarousel from './ReactCarousel';


function App() {
    useEffect(() => {
      AOS.init({
        duration: 1000
      });
  }, []);

  return (
    <Router>
    <div className="App">
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/months/:id">
            <MonthDetails />
          </Route>
        </Switch>
        <Footer/>
    </div>
  </Router>
  );
}

export default App;
