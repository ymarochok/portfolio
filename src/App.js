import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/home_page/home';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Home />
    </div>
  );
}

export default App;
