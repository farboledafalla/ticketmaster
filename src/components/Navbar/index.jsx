import { useState } from 'react';

// Recibe el 'prop' enviado desde 'App.jsx'
const Navbar = ({ onSearch }) => {
   // Estado para manejar la caja de texto
   const [search, setSearch] = useState('');

   // Manejador de eventos de la caja de texto
   const handleInputChange = (evt) => {
      // Actualizando el estado con el valor digitado en el input
      setSearch(evt.target.value);
   };

   // Evento al presionar teclas
   const handleInputKeyDwon = (evt) => {
      // Si presiona el 'Enter', envía el estado que tiene el valor desde el 'handleInputChange'
      // Esto lo que va a hacer es actualizar el estado del Padre (handleNavbarSearch) en App.jsx
      if (evt.key === 'Enter') {
         onSearch(search);
      }
   };

   // El Navbar tiene el texto (Mi boletera) y una caja de texto
   // Al cambiar el <input>, se deja el valor en el estado 'search'
   return (
      <div>
         <p>Mi boletera</p>
         <input
            placeholder='Busca tu evento favorito'
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDwon}
            value={search}
         />
      </div>
   );
};

export default Navbar;
