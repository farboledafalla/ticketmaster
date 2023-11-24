import { useState } from 'react';

const SignupForm = () => {
   // Estados
   const [name, setName] = useState('');
   const [age, setAge] = useState('');
   const [address, setAddress] = useState('');
   const [zipcode, setZipcode] = useState('');
   const [phone, setPhone] = useState('');

   const handleClearClick = () => {
      setName('');
      setAge('');
      setAddress('');
      setZipcode('');
      setPhone('');
   };

   const handleSubmitForm = (evt) => {
      // Prevenir el evento de recargar la página, es una función que viene dentro del evento
      evt.preventDefault();

      console.log('submit', {
         name,
         age,
         address,
         zipcode,
         phone,
      });
   };

   return (
      <form onSubmit={handleSubmitForm}>
         <label>
            Name
            <input
               value={name}
               required
               onChange={(evt) => setName(evt.target.value)}
            />
         </label>
         <br />
         <label>
            Age
            <input
               value={age}
               required
               onChange={(evt) => setAge(evt.target.value)}
            />
         </label>
         <br />
         <label>
            Address
            <input
               value={address}
               required
               onChange={(evt) => setAddress(evt.target.value)}
            />
         </label>
         <br />
         <label>
            Zipcode
            <input
               value={zipcode}
               required
               onChange={(evt) => setZipcode(evt.target.value)}
            />
         </label>
         <br />
         <label>
            Phone
            <input
               value={phone}
               required
               onChange={(evt) => setPhone(evt.target.value)}
            />
         </label>
         <br />
         <div>
            <button type='button' onClick={handleClearClick}>
               Clear
            </button>
            <button type='submit'>Submit</button>
         </div>
      </form>
   );
};

export default SignupForm;
