import { useState } from "react";
import PropTypes from "prop-types";
import "./event.css";



// https://medium.com/@amitsharma_24072/handling-multiple-inputs-in-reactjs-best-practices-for-react-js-input-forms-9b973f4beb7e

const Event = ({ onSendEvent }) => {
    const [data, setData] = useState({day: "", name: "", time: "", location: ""});


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
    function handleSubmit(e){
        e.preventDefault();
        if (!data.day || !data.name || !data.time || !data.location) return;
        console.warn("Formulaire incomplet !");
        onSendEvent(data); //envoie e
        console.log(data);
    }

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Ajouter un événement</h3>
        <form onSubmit={handleSubmit}>
          <label>Date :</label>
          <select name="day" value={data.day} onChange={handleInputChange} required>
            <option value="">Sélectionner un jour</option>
            {[...Array(31)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}Octobre
              </option>
            ))}
          </select>

          <label>Nom :</label>
          <input type="text" name="name" value={data.name} onChange={handleInputChange} required />

          <label>Heure :</label>
          <input type="time" name="time" value={data.time} onChange={handleInputChange} required />

          <label>Lieu :</label>
          <input type="text" name="location" value={data.location} onChange={handleInputChange} required />

          <div className="modal-buttons">
            <button type="submit">Ajouter</button>
            <button type="button">Annuler</button>
          </div>
        </form>
      </div>
    </div>
  );
};

Event.propTypes = {
  onSendEvent: PropTypes.func.isRequired, // Validation de la prop
};
export default Event;
