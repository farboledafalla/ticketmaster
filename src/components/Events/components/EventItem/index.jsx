// Item de los eventos que recibe props
const EventItem = ({ info, name, image, onEventClick, id }) => {
   return (
      <div>
         <img src={image} alt={name} width={200} height={200} />
         <h4>{name}</h4>
         <p>{info}</p>
         <button
            onClick={(evt) => {
               // Parar la propagación del uvento por si el padre llega a tener un evento, este no se ejecute el presionar el padre
               evt.stopPropagation();
               onEventClick(id);
            }}
         >
            Ver más
         </button>
      </div>
   );
};

export default EventItem;
