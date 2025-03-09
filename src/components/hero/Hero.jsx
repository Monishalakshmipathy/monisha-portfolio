import React from 'react'
import Navbar from '../navbar/Navbar'
import CV from './monisha_resume.pdf'
import img from '../../assets/sys.png'

export default function Hero() {
  return (
    
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col'>
        <Navbar /> 
        <section 
        data-aos='fade-up'
        data-aos-delay='250'
        className='text-white body-font z-10'>
            <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left
                mb-16 md:mb-0 items-center text-center relative'>

                <h1 className='title-font sm:text-4xl text-4xl mb-4 font-bold text-white'>Hey! Monisha here</h1>
                <h2 className='title-font sm:text-4xl text-4xl mb-4 font-bold text-white'>FULL STACK WEB DEVELOPER</h2>
                <div className='flex justify-center'>
                    <a href={CV} download> 
                        <button className='inline-flex text-white bg-blue-500 border-0 py-2 px-6 
                        focus:outline-none hover:bg-blue-600 hover:shadow-[0_0_40px_rgb(0,165,255,0.7)]
                        rounded-full text-lg'>
                            DOWNLOAD RESUME
                        </button>
                    </a>
                </div>
                </div>
                
                <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ml-auto'>
  <img src={img} alt="hero" className='object-cover object-center rounded-full w-80 h-80' />
</div>
            </div>
        </section>
    </div>
  )
}
