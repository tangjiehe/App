import React, { Fragment } from 'react';
import Card from './Card';
import '../../styles/Cards/CardsList.scss';

const CardsList = ({ cards, className }) => {
    return (
        <Fragment>
            {cards && <ul className={className ? 'cards-list dealer' : 'cards-list'}>{
                cards.map((card, index) => (
                    <li style={{ 'marginLeft': `${index * 15}px` }} className="list-item" key={card.code}><Card {...card} /></li>
                ))}
                <li style={{ 'marginLeft': `${cards.length * 15}px` }} className="list-item"><Card {...cards[0]} /></li>
            </ul>}
        </Fragment>)
}


export default CardsList;