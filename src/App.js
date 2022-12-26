import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <h1>welcome To the world of react Js</h1>
      <About />

      <Home />

      <Contact />

      <Gallery />
    </div>
  );
}

export default App;
