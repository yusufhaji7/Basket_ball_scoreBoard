import { useState } from 'react'
import Cho from "./assets/Cho.jpg"
import Iphone from "./assets/iphone.png"
import Linkedin from "./assets/linkedin.png"
import Instagram from "./assets/Instagram.png"
import Email from "./assets/email.png"

function App() {

  return (
    <div className='container'>
      <div className='image-container'>
        <div><img src={Cho} className='image'/></div>
      </div>
      <div className='name'>Chombe Hadji</div>
      <div className='role'>Entrepreneur | CEO at Qinash</div>
      <div className='description'>I am an entrepreneur and researcher of startup ecosystem.</div>
   
      <div className='mini-container'>
        <div><img src={Iphone} className='icons'/></div>
        <div className='icon-text'>+251 926880469</div>
      </div>

      <div className='mini-container'>
        <div><a href="https://www.linkedin.com/in/chombehadji/"><img src={Linkedin} className='icons'/></a></div>
        <div className='icon-text'><a href="https://www.linkedin.com/in/chombehadji/">Linkedin</a></div>
      </div>

      <div className='mini-container'>
        <div><a href="https://www.instagram.com/chombe_hadji/"><img src={Instagram} className='icons'/></a></div>
        <div className='icon-text'><a href="https://www.instagram.com/chombe_hadji/">Instagram</a></div>
      </div>

      <div className='mini-container'>
        <div><a href="chombie70@gmail.com"><img src={Email} className='icons'/></a></div>
        <div className='icon-text'><a href="chombie70@gmail.com">Email</a></div>
      </div>

      <div className='bottom-div'>&#169; Copyright.</div>
    </div>
  )
}

export default App
