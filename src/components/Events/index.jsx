import EventItem from './components/EventItem/Index';
import eventsJSON from '../../data/events.json';
import { useState } from 'react';

// Acceder a los eventos del json
//const events = data._embedded.events;

// Este 'prop' que viene desde App.jsx me servirá para filtrar la busqueda
const Events = ({ searchTerm }) => {
   // Estado con la data del archivo JSON
   const [data] = useState(eventsJSON);

   // Hacer destructuring para sacar el valor de la llave 'events'
   const {
      _embedded: { events },
   } = data;

   // Manejador de eventos de <EventItem />
   const handleEventItemClick = (id) => {
      console.log('Evento clickeado', id);
   };

   // Leer el arreglo de eventos y pasarlos como  props al componente <EventItem />
   const renderEvents = () => {
      // Variable con los datos, es decir, los eventos (events)
      let eventsFiltered = events;

      // Se hará el filtrado si el termino existe
      if (searchTerm.length > 0) {
         eventsFiltered = eventsFiltered.filter((item) =>
            // Busco en el key (name) y lo convierto a minuscula y pregunto si el nombre de cada evento de musica existente incluye lo que el usuario escribió (searchTerm) y después presionó 'Enter'
            // Si lo incluye va a ser 'true' y por ende vamos a tener un listado con esos eventos
            item.name.toLocaleLowerCase().includes(searchTerm)
         );
      }

      return eventsFiltered.map((eventItem) => (
         <EventItem
            key={`event-item-${eventItem.id}`}
            info={eventItem.info}
            name={eventItem.name}
            image={eventItem.images[0].url}
            onEventClick={handleEventItemClick}
            id={eventItem.id}
         />
      ));
   };

   // Se renderiza desde la variable
   return (
      <div>
         Eventos
         {renderEvents()}
      </div>
   );
};

export default Events;
