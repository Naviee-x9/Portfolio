import React from 'react';
import htmlImg from '../Assets/html.png';
import cssImg from '../Assets/css3.png';
import jsImg from '../Assets/js.png';
import bsImg from '../Assets/bs.png';
import rImg from '../Assets/react.png';
import mdbImg from '../Assets/mdb.png';
import exImg from '../Assets/ex.png'
import nImg from '../Assets/n.jpg'
import twImg from '../Assets/tcss.png';
import ssImg from '../Assets/ss.png';
import tpImg from '../Assets/tp.jpg';
import msImg from '../Assets/ms.png';
import cImg from '../Assets/c.png';
import vImg from '../Assets/v.png'; 
import gImg from '../Assets/git.png'

function Skills() {
    return (
        <section id='skills' className='flex flex-col py-20 px-5 justify-center gradient_secondary font-two '>
            <div className='w-full'>
                <div className='flex flex-col  py-5'>
                    <h1 className='text-white text-3xl hover:border-b-4 border-[blue] mb-5 w-[280px] font-bold'>Technical Skills🚀</h1>
                    <p className='py-5 text-white justify-center font-two'>Known technical skills are <b> HTML, CSS, JAVASCRIPT, BOOTSTRAP, REACT, TAILWINDCSS, SNAPSEED, MSOFFICE, TALLY, CANVA, VITE JS , GITHUB Version Controller .</b></p>
                </div>
            </div>
            <div className="grid grid-cols-5 md:grid-rows-4 gap-1 justify-center items-center rounded-xl ">
                <img src={htmlImg} alt="HTML" className="w-[200px] rounded-xl shadow-lg  hover:bg-amber-50 p-5" />
                <img src={cssImg} alt="CSS" className="w-[200px] rounded-xl shadow-lg  hover:bg-amber-50 p-5" />
                <img src={jsImg} alt="JS" className="w-[200px] rounded-xl shadow-lg  hover:bg-amber-50 p-5" />
                <img src={bsImg} alt="Bootstrap" className="w-[200px] rounded-xl shadow-lg hover:bg-amber-50 p-5" />
                <img src={rImg} alt="React" className="w-[200px] rounded-xl shadow-lg  hover:bg-amber-50 p-5" />
                <img src={mdbImg} alt="Mongo DB" className="w-[200px] rounded-xl shadow-lg  hover:bg-amber-50 p-5" />
                <img src={exImg} alt="Express" className="w-[200px] rounded-xl shadow-lg  hover:bg-amber-50 p-5" />
                <img src={nImg} alt="Nodejs" className="w-[200px] rounded-xl shadow-lg  hover:bg-amber-50 p-5" />
                <img src={twImg} alt="Tailwindcss" className="w-[200px] rounded-xl shadow-lg  hover:bg-amber-50 p-5" />
                <img src={ssImg} alt="Snapseed" className="w-[200px] rounded-xl shadow-lg  hover:bg-amber-50 p-5" />
                <img src={tpImg} alt="Tally" className="w-[200px] rounded-xl shadow-lg  hover:bg-amber-50 p-5" />
                <img src={msImg} alt="Ms office" className="w-[200px] rounded-xl shadow-lg  hover:bg-amber-50 p-5" />
                <img src={cImg} alt="Canva" className="w-[200px] rounded-xl shadow-lg  hover:bg-amber-50 p-5" />
                <img src={vImg} alt="Vite" className="w-[200px] rounded-xl shadow-lg  hover:bg-amber-50 p-5" />
                <img src={gImg} alt="GitHub" className="w-[200px] rounded-xl shadow-lg  hover:bg-amber-50 p-5" />
            </div>

        </section>

    )
}

export default Skills
