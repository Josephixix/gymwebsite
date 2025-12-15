"use client";
import { Dumbbell, Zap, HandFist, Bird, User, Scaling } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {Montserrat } from "next/font/google";
import { motion } from "motion/react";
import { use } from "react";
import Slider from "react-slick";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800"],
});

export default function Hero() {

return(


   <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
    
    
<section className="relative overflow-hidden px-4 sm:px-8 md:px-16 
py-8 lg:px-20 min-h-[80dvh] md:min-h-[95dvh] 
 flex items-center justify-center text-center">

  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{ backgroundImage: "url('/hero.jpg')" }}
  />

  {/* Black gradient overlay */}
  <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

  {/* Background blobs */}
  <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl pointer-events-none z-20" />
  <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-orange-400/5 blur-3xl pointer-events-none z-20" />

  {/* Text content */}
  <div className="relative z-30 w-full max-w-2xl -translate-y-8 md:-translate-y-12">
    <h1 className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-6xl text-white mb-4 font-bold leading-tight tracking-tighter ${montserrat.className}`}>
      Transform Your Body{" "} <br />
      <span className="text-red-600 font-extrabold"> 
        Transform Your Life
      </span>
    </h1>

    <p className="text-sm sm:text-lg font-bold text-gray-200 mb-8 ">
      Join a community built on <span className="text-red-700 font-extrabold">strength, discipline, and growth.</span> Achieve your goals with personalized workouts and expert coaching, and stay motivated with a supportive community.
    </p>

    <Link
      href="/sign-in"
      className="inline-flex items-center justify-center gap-2 rounded-md text-sm 
      font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-9
       px-4 py-2 bg-red-700 text-white hover:bg-black focus-visible:ring-4 focus-visible:ring-blue-300"
    >
      Get Started
    </Link>
  </div>
</section></motion.section>

)


}