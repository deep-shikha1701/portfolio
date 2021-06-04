import React from 'react';
import './Card.scss'

function Card(props) {
    return (
        <div className="card">
            <div className="card__Body">    
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <button><a href="https://github.com/deep-shikha1701/Twitter-UI-React">View on Github</a></button>
            </div>
        </div>
    )
}

export default Card
