import './App.css';
import Dashboard from './components/dashbord/Dashboard';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <>
     <div className='container'>
        <div><Header /></div>
        <div className='middle'>
          <div><Sidebar /></div>
          <div><Dashboard /></div>
        </div>
        <div><Footer /></div>
      </div>
    </>
  );
}

export default App;
