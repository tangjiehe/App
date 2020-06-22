import React from 'react';
import '../../styles/Cards/Card.scss';

const Card = ({ image }) => (
    <img className="card" src={image} alt=""></img>
)

export default Card;