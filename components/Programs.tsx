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

const programs = [
  {
    title: "Strength Training",
    description: "Build muscle and boost strength with guided workouts.",
    icon: <Dumbbell className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "HIIT",
    description: "High-intensity interval training for fat burning and stamina.",
    icon: <Zap  className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Boxing",
    description: "Learn boxing techniques and improve your fitness level.",
    icon: <HandFist className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "Yoga",
    description: "Enhance flexibility and mindfulness with guided yoga sessions.",
    icon: <Bird className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Personal Training",
    description: "One-on-one coaching tailored to your goals and fitness level.",
    icon: <User className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Weight Loss Plans",
    description: "Structured plans to help you shed pounds safely and effectively.",
    icon: <Scaling className="w-8 h-8 text-pink-500" />,
  },
];

export default function Programs() {

return(




    <section className="py-16 bg-gray-300">
      <div className="container mx-auto px-4 text-center">
        <h2 className={`${montserrat.className} text-2xl font-bold mb-12`}>Our Programs</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between text-center h-full"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
    
              <Link
                href="/sign-in"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md text-sm 
                font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-9
                px-4 py-2 bg-red-700 text-white hover:bg-black focus-visible:ring-4 focus-visible:ring-blue-300"
              >
                Book A Section
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
)}