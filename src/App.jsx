import './App.css';
import Events from './components/Events/Index';
import Navbar from './components/Navbar';

// Usamos los componentes (<Navbar /> y <Events />)
function App() {
   return (
      <>
         <Navbar />
         <Events />
      </>
   );
}

export default App;
