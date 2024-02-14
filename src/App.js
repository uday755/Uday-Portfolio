import './App.css';
import Navbar from "./components/Navbar";
// import BootstrapCarousel from './components/BootstrapCarousel';
import { Outlet } from 'react-router-dom/dist';

function App() {
  return (
      <div>
        <Navbar />
        {/* <BootstrapCarousel /> */}
        <div className="container">
          <Outlet/>
        </div>
      </div>
  );
}

export default App;
