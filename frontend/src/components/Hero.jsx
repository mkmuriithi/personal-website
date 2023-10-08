import { motion } from 'framer-motion';
import React from 'react'

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div  className="w-5 h-5 rounded-full bg-[#915eff]" />{/*Purple dot*/}
          <div className="w-1 sm:h-80 h-40 violet-gradient"  /> {/*Purple line*/}  
        </div>
        <div> {/*Intro & name*/}
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm  
          <span className="text-[#915eff]">
            Matthew
          </span></h1>
          <p className={`${styles.heroSubText} text-white mt-2 text-white-100`}>I'm a software engineer</p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero