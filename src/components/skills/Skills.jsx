import React from 'react'
import javascript from '../../assets/javascript.png'
import html from '../../assets/html.png'
import node from '../../assets/node.png'
import express from '../../assets/express.png'
import mongodb from '../../assets/mongodb.png'
import react from '../../assets/react.png'

export default function Skills() {
  return (
    <section id='skills' className='relative overflow-hidden flex flex-col text-white body-font'>
        <div className='container flex flex-wrap px-5 py-24 mx-auto items-center'>
            <div 
            data-aos='fade-up' 
            data-aos-delay='200' 
            className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-20 md:mb-0 pd-10 border-b border-blue-400'>
                <h1 data-aos='fade-right' data-aos-delay='500' className='sm:text-4xl text-2xl font-medium title-font mb-2 text-blue'>Skills</h1>
                <p data-aos='fade-right' data-aos-delay='500' className='leading-relaxed text-base'>
                <ul><li>Front-End:  HTML, CSS, JavaScript, React.js, Redux, Tailwind CSS</li>
                <li>Back-End:  Node.js, Express.js</li>
                <li>Databases:  MySQL, PostgreSQL, MongoDB, Mongoose</li>
                <li>Tools & Platforms: Git, GitHub, Postman, VS Code, Docker, AWS (EC2)</li>
                <li>APIs: RESTful APIs, GraphQL</li>
                </ul>

                </p>
            </div>
            <div data-aos='fade-left' data-aos-delay='500' className='flex flex-col md:w-1/2 md:pl-12'>
            <nav className='flex flex-wrap list-none -mb-1'>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={javascript} alt="" className='rounded-full w-28 h-28 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={html} alt="" className='rounded-full w-28 h-28 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={node} alt="" className='rounded-full w-28 h-28 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={express} alt="" className='rounded-full w-28 h-28 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={mongodb} alt="" className='rounded-full w-28 h-28 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={react} alt="" className='rounded-full w-28 h-28 object-cover'/>
                </li>
            </nav>
            </div>
        </div>
    </section>
  )
}
