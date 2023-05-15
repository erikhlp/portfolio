import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5 '>
          <div className='w-5 h-5 rounded-full bg-[#BA1405]' />
          <div className='w-1 sm:h-80 h-40 red-gradient'/>
        </div>

        <div className=''>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#BA1405]'>ERIKH</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
        <ComputersCanvas></ComputersCanvas>
      </div> 
    </section>
  )
}

export default Hero