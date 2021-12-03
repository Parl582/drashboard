import React from 'react'
import './card.css'

const Cards = ({title, nmb}) => {
    return (
        <>
            <div className="card_container">
                <div className="card_wrapper">
                    <h4>{title}</h4>
                    <p>{nmb}</p>
                </div>
            </div>
            
        </>
    )
}

export default Cards
