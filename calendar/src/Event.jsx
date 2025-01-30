import "./event.css";

const Event = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Ajouter un événement</h3>
        <form>
          <label>Date :</label>
          <select name="day" required>
            <option value="">Sélectionner un jour</option>
            {[...Array(31)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}Octobre
              </option>
            ))}
          </select>

          <label>Nom :</label>
          <input type="text" name="name" required />

          <label>Heure :</label>
          <input type="time" name="time" required />

          <label>Lieu :</label>
          <input type="text" name="location" required />

          <div className="modal-buttons">
            <button type="submit">Ajouter</button>
            <button type="button">Annuler</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Event;
