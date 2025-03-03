import React from 'react'
import AboutImg from '../Assets/about.png'

function About() {
  const config = {
        line1: 'Hi, I’m a passionate Front-End Developer dedicated to crafting responsive, interactive, and user-friendly web applications. With a strong foundation in HTML, CSS, JavaScript, React.js, Vite.js, and Tailwind CSS, I specialize in building sleek and high-performance interfaces that elevate user experience.',
        line2:'I have a keen eye for design and functionality, ensuring that every project I work on is clean, maintainable, and optimized for performance. My goal is to bridge the gap between design and technology, creating seamless digital experiences that leave a lasting impact.',
        line3: 'Beyond front-end development, I also have a fundamental understanding of Back-End technologies, including Node.js, Express.js, MongoDB, and Mongoose. This enables me to work efficiently with APIs, manage databases, and contribute to full-stack development when needed.',
        line4:'I am always eager to learn, grow, and stay ahead of the latest web technologies and trends. Whether its exploring new frameworks or optimizing performance, I strive to push boundaries and create innovative solutions',
        line5:'Let’s connect and build something amazing together! 🚀'

  }
  return (
    <section id='about' className='flex flex-col md:flex-row gradient_primary px-5'>
      <div className='py-5 md:w-1/2'>
        <img className='w-[800px] h-[400px] ' src={AboutImg} />
      </div>
      <div className='md:w-1/2 flex justify-center text-white'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-3xl hover:border-b-4 border-[blue] mb-5 w-[170px] font-bold py-4 font-two '>About me</h1>
          <p className='font-two'>{config.line1}</p>
          <p className=' font-two py-1'> {config.line2}</p>
          <p className=' font-two py-1'> {config.line3}</p>
          <p className=' font-two py-1'> {config.line4}</p>
          <p className=' font-two py-1'> {config.line5}</p><br />
          <h1 className='text-2xl py-3 hover:border-b-4 border-[blue] mb-5 w-[210px] font-bold font-family '>Certifications</h1>
          <p className='font-two'>Compleated MERN Stack Development.<br/>
            <br />
            <a className='btn px-2' href="https://drive.google.com/file/d/1wHVDjmH-Te4cwRV3ZJG7fZ3tXXLI2K7Q/view?usp=sharing">-Certificate-</a></p>
          <br />
          <p className='font-two'>Compleated Tally Essentials level 2.<br/>
          <br/>
          <a className='btn px-2' href="https://drive.google.com/file/d/1cgUz-4PmWAg8r3kbCwVFCMksottmdX0r/view?usp=sharing">-Certificate-</a> </p>
          <br />
          <p className='font-two'>Compleated Excel Certification through ExcelChamps.<br/>
          <br/>
          <a className='btn px-2' href="https://drive.google.com/file/d/1WDG2fgJf8fwGTXFgk8kju5ypAGcSd08y/view?usp=sharing">-Certificate-</a> </p>
          <br />
          <p className='font-two'>Compleated BPM Associate-Banking through NASSCOM.<br/>
          <br/>
          <a className='btn px-2' href="https://drive.google.com/file/d/1cm6DgeSjCX8R3AVG4_R5Kx1kkQO7z9Hs/view?usp=sharing">-Certificate-</a> </p>
          <br />
          <p className='font-two'>Compleated Legal Aspects of Entrepreneurship through Coursera.<br/>
          <br/>
          <a className='btn px-2' href="https://drive.google.com/file/d/1ciC_XfBhJ4QSpprffmK6RBXjsrO7atGu/view?usp=sharing">-Certificate-</a> </p>
          <br />
        </div>
      </div>
    </section>
  )
}

export default About
