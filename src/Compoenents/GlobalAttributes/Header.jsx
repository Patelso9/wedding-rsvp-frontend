import React, { Component } from 'react'

import flowers from './flower.png';

function Header() {
    return (
      
      <div>

      <div className='header'>
          
    <div className='couple-header'>
       <h1>Java & Javascript</h1>
    </div>
       
       <h1>3.11.2022</h1>

      </div>

      <img 
        src= {flowers}
        alt="white flowers" />
        
      </div>
    )
}

export default Header