"use client";
   
   import Image from "next/image";
   import {motion } from "motion/react";
   
  
  
  export default function About(){

return(
   
   
   <section className="py-16 px-4 sm:px-8 lg:px-24 bg-gray-50">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
    
    {/* Left Column - Image */}
    <motion.div
      className="w-full lg:w-1/2"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <Image
        src="/about.jpg" 
        alt="Gym Trainer"
        width={600}
        height={400}
        className="rounded-lg object-cover shadow-lg"
      />
    </motion.div>

    {/* Right Column - Text + Features */}
    <motion.div
      className="w-full lg:w-1/2 flex flex-col gap-6"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h2 className={`text-2xl font-extrabold text-gray-900`}
>Why Choose Us?</h2>

      <ul className="space-y-3">
        <li className="flex items-start gap-3">
          <span className="text-green-500 font-bold">✓</span>
          <span>Certified trainers</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-500 font-bold">✓</span>
          <span>Modern equipment</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-500 font-bold">✓</span>
          <span>Nutrition guidance</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-500 font-bold">✓</span>
          <span>Flexible membership plans</span>
        </li>
      </ul>

      <p className="text-gray-700">
        At our gym, our mission is to empower you to achieve your fitness goals with expert guidance, state-of-the-art equipment, and personalized support. We are committed to making fitness accessible, enjoyable, and effective for everyone.
      </p>
    </motion.div>
  </div>
</section>

)}