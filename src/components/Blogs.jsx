import React from 'react'
import Section from './Section'
import Header from './Header'
import Footer from './Footer'
import { bird } from '../assets'

const Blogs = () => {
  return (
    <div>
        <Header />
        <Section crosses>
            <div className="container flex justify-center lg:mt-0 mt-[5rem]">
                <div className="relative max-w-full">
                    <img
                     src={bird}
                     alt="Flying neon bird"
                     className="relative mx-auto h-[200px] w-[200px]"
                    />
                    <h1 className="h2 mb-4 md:mb-8 text-center">
                        Early Bird, Aren't You ?!
                    </h1> 
                    <p className="text-slate-400 font-medium text-2xl text-center">
                        Hey there AI enthusiast! Thank you for being so deeply interested in AICVS and its activities! Unfortunately we are not having any events lined up! BUT! hold on cause we are planning some exciting and jaw dropping events for you all to participate in! So maintain your streak of visiting this tab regularly, 'cause, who knows, what has been planned...
                    </p>  
                </div>
            </div>
        </Section>
        <Footer />
    </div>
  )
}

export default Blogs