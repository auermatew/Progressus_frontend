import React from 'react'
import './_Hero.scss'
import image from '../../assets/images/hero.png'

const TEXTS = ['Tanárt', 'Mentort', 'Coachot'];

export const Hero = () => {


  return (
    <div className='hero'>
        <div className="textbox">
        <h1>Progressus.</h1>
        <p>Találd meg a hozzádillő{TEXTS}</p>
{/*         <ul className=''>
            <li>Tanárt</li>
            <li>Mentort</li>
            <li>Coachot</li>
        </ul> */}
        <p>és kezdj el fejlődni még ma!</p>
        <button className="cta-btn" role="button"><span className="text">Kezdj ma!</span></button>
        </div>
        <div className="illustration">
        <img src={image} alt="illustration" />
        </div>
        </div>
  )
}
