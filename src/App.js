import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App font-sans">
     <Navbar/>
     <Home/>
     <Footer/>
    </div>
  );
}

export default App;
