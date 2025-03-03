import React from 'react'
import { BsWhatsapp , BsLinkedin , BsGithub } from "react-icons/bs";

function Contact() {
    return (
        <section id='contact' className='flex flex-col  gradient_secondary px-5 py-32'>
            <div className='flex flex-col items-center text-white'>

                <h1 className='text-4xl hover:border-b-4 border-[blue] mb-5 w-[140px] font-bold font-family'>Contact</h1>
                <br/>
                <p className='pb-5 font-two justify-center'>Let’s connect! Feel free to reach out - Have a project or idea ? Let’s chat! Contact me and let’s make something amazing together! 🚀 </p>
                <p className='py-2 font-two'><span className='font-bold'>Email: </span> navenparthasarthy05@gmail.com</p>
                <p className='py-2 font-two'><span className='font-bold'>Phone </span> +91 9500883478</p>
                <div className='flex py-10'>
                    <a href="https://wa.me/+919500883478"target="_blank" className='pr-5 hover:text-black'><BsWhatsapp /></a>
                    <a href="https://www.linkedin.com/in/naven-parthasarathy-414865301" className='pr-5 hover:text-black'><BsLinkedin /></a>
                    <a href="https://github.com/Naviee-x9" className='hover:text-black'><BsGithub /></a>
                </div>
            </div>
        </section>
    )
}

export default Contact