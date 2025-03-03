import React from 'react'
import ProImg from '../Assets/picofme.png'

function Hero() {
  const config ={
    subtitle:'Aspiring Front-End-developer. A Fullstack MERN Developer.Intent to design Web-Application & Responsive Sites'
  }
  return (
    <section className='flex flex-col md:flex-row px-5 py-32 gradient_secondary justify-center'>
      <div className='px-10 py-10 md:w-1/2 flex flex-col'>
        <h1 className='text-white font-two text-6xl hover:underline'> I'm Naven Parthasarathy
          <h2><p className='text-2xl py-6 font-family'>{config.subtitle}</p></h2>
        </h1>
      </div>
      <img className='w-100 items-center md:w-1/4 justify-center rounded-b-full rounded-t-full border-[#7ff] border-double border-30 hover:bg-teal-200' src={ProImg} />
    
    </section>
  )
}

export default Hero
