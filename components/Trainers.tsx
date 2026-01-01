"use client";
import Image from "next/image";
import { motion } from "motion/react";





const trainers = [
  {
    name: "John Doe",
    specialty: "Strength",
    bio: "Helping you lift your limits.",
    photo: "/trainer6.jpg",
    quote: "Certified Strength Coach",
  },
  {
    name: "Sarah Smith",
    specialty: "Yoga",
    bio: "Find balance and flexibility.",
    photo: "/trainer4.jpg",
    quote: "RYT-500 Yoga Instructor",
  },
  {
    name: "Mike Lee",
    specialty: "BoxFit",
    bio: "Train hard, fight easy.",
    photo: "/trainer2.jpg",
    quote: "Certified BoxFit Trainer",
  },
  {
    name: "Emma Brown",
    specialty: "HIIT",
    bio: "Push limits, see results.",
    photo: "/trainer5.jpg",
    quote: "High-Intensity Specialist",
  },
];

export default function Trainers() {
  return (


<section className="py-16 bg-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className={`text-2xl sm:text-2xl md:text-4xl font-bold mb-12`}>Meet Our Trainers</h2>
    <div className="grid gap-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {trainers.map((trainer, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white border border-gray-300 rounded-xl shadow-sm p-6 flex flex-col items-center transition-transform transform hover:scale-105"
        >
          {/* Trainer Image */}
          <div className="w-full mb-4 overflow-hidden rounded-lg border border-gray-200">
            <Image
              src={trainer.photo}
              alt={trainer.name}
              width={400}
              height={300}
              className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-contain sm:object-cover"
            />
          </div>

          {/* Trainer Info */}
          <h3 className="text-xl sm:text-2xl font-semibold mb-1">{trainer.name}</h3>
          <p className="text-sm sm:text-base text-gray-500 mb-2">{trainer.specialty}</p>
          <p className="text-gray-700 text-center text-sm sm:text-base">{trainer.bio}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  )}