import './App.css';
import Events from './components/Events/Index';
import Navbar from './components/Navbar';

import { useState } from 'react';

// Usamos los componentes (<Navbar /> y <Events />)
function App() {
   // Estado para manejar el valor de lo que se escribe en la caja al persionar 'Enter'
   const [searchTerm, setSearchTerm] = useState('');

   // Manejador del evento que viene desde el Componente <Navbar /> y recibe el texto de la caja y setea el estado (searchTerm) para pasarlo a <Events />
   // Recibe el estado del hijo desde el componente <Navbar /> en esta parte (onSearch(search))
   const handleNavbarSearch = (term) => {
      setSearchTerm(term);
   };

   // Imprimimos lo que viene desde la caja de texto y una vez que el Padre se ha actualizado...se rerenderea el componente
   // y los hijos y descendencia se rerenderea
   console.log(searchTerm, 10);

   // Recibe el evento desde <Navbar /> con el valor de la caja, setea el estado y lo pasa a <Events />
   // Al Padre rerenderearse, se puede pasar el estado 'searchTerm' al hijo <Events /> para que filtre allá la busqueda
   return (
      <>
         <Navbar onSearch={handleNavbarSearch} />
         <Events searchTerm={searchTerm} />
      </>
   );
}

export default App;
