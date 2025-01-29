// import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';


const Card = ({ avatar, pseudo, email, description, sexe }) => {
  return (
    <article className="card">
      <div className="card-content">
        <img
          src={avatar}
          alt="Avatar"
          className="avatar"
        />
        <h2 className="pseudo">{pseudo}</h2>
        <h3 className="email">{email}</h3>
        <p className="description">{description}</p>
        <p className="sexe">{sexe}</p>
      </div>
    </article>
  );
};
Card.propTypes = {
    avatar: PropTypes.string.isRequired,
    pseudo: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sexe: PropTypes.string.isRequired
  };
  
export default Card;
