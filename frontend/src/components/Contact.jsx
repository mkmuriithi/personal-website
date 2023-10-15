import React from 'react'
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [ form, setForm ] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [ loading, setLoading ] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {};


  return (
    <div className="xl:mt-12 xl:flx-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* making form animated (sliding from left) */}
      <motion.div
      variants={slideIn('left', "tween", 0.2, 1)}
      className="flex-[0.75] bg-black-100 rounded-2xl p-8"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8 mt-12">
          <label className="flex flex-col">
            <span className=" text-white font-medium mb-4">
              Your Name
            </span>
            <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
            <span className=" text-white font-medium mb-4">
              Your Email
            </span>
            <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
            <span className=" text-white font-medium mb-4">
              Your Message
            </span>
            <textarea
            row="7"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <button
          type="submit"
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadw-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}

          </button>
        </form>
      </motion.div>

    </div>
  );
}

export default SectionWrapper(Contact, "contact")