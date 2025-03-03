import React from 'react'
import ResumeImg from '../Assets/resume.jpg'

function Resume() {
    return (
        <section id='resume' className='flex flex-col md:flex-row gradient_primary px-5'>
            <div className='py-5 md:w-1/3 flex justify-center md:justify-end'>
                <img className='w-[300px]' src={ResumeImg} />
            </div>
            <div className='md:w-1/2 px-10 flex justify-center font-two '>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl hover:border-b-4 border-[blue] mb-5 w-[140px] font-bold '> Resume </h1>
                    <p className='pb-5 font-two'>Let’s turn paper into possibilities—check out my resume and see what I bring to the table!<br/>
                    <br/>
                    <a className='btn font-two' href="https://drive.google.com/file/d/1WYCaksDF3oOGvoUFsIJbYwNhmC3Hhod_/view?usp=drive_link">-Download-</a> </p>
                </div>
            </div>
        </section>
    )
}

export default Resume