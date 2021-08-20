import React, { useState } from 'react'
import data from '../data'
import Controlls from './Controlls'

function Card() {
    const [cardIndex, setCardIndex] = useState(0)

    function prevSlide() {
        if (cardIndex > 0){
            setCardIndex((prevCardIndex)=>prevCardIndex -= 1)
        }
    }

    function nextSlide() {
        if (cardIndex < 24){
            setCardIndex((prevCardIndex)=>prevCardIndex += 1)
        }
    }

    return (
        <div className="card">
            <p>{[cardIndex + 1]}/25</p>
            <h1>Card</h1>
            <h3>{data[cardIndex].name.first} {data[cardIndex].name.last}</h3>
            <p>From: {data[cardIndex].city}, {data[cardIndex].country} </p>
            <p>Job Title: {data[cardIndex].title}</p>
            <p>Employer: {data[cardIndex].employer}</p>
            <ol>
                <h3>Favorite Movies:</h3>
                <li>{data[cardIndex].favoriteMovies[0]}</li>
                <li>{data[cardIndex].favoriteMovies[1]}</li>
                <li>{data[cardIndex].favoriteMovies[2]}</li>
            </ol>
            <Controlls prevSlide={prevSlide} nextSlide={nextSlide}/>
        </div>
        
    )
}

export default Card
