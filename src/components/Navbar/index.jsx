import { useState } from 'react';

const Navbar = () => {
   // Estado para manejar la caja de texto
   const [search, setSearch] = useState('');

   // Manejador de eventos de la caja de texto
   const handleInputChange = (evt) => {
      // Actualizando el estado con el valor digitado en el input
      setSearch(evt.target.value);
   };

   console.log(search);

   // El Navbar tiene el texto (Mi boletera) y una caja de texto
   return (
      <div>
         <p>Mi boletera</p>
         <input
            placeholder='Busca tu evento favorito'
            onChange={handleInputChange}
            value={search}
         />
      </div>
   );
};

export default Navbar;
