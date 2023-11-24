import EventItem from './components/EventItem/Index';
import eventsJSON from '../../data/events.json';
import { useState } from 'react';

// Acceder a los eventos del json
//const events = data._embedded.events;

const Events = () => {
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
   const eventsComponent = events.map((eventItem) => (
      <EventItem
         key={`event-item-${eventItem.id}`}
         info={eventItem.info}
         name={eventItem.name}
         image={eventItem.images[0].url}
         onEventClick={handleEventItemClick}
         id={eventItem.id}
      />
   ));

   // Se renderiza desde la variable
   return (
      <div>
         Eventos
         {eventsComponent}
      </div>
   );
};

export default Events;
