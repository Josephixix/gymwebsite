"use client";
import Image from "next/image";
import { motion } from "motion/react";






const testimonials = [
  {
    name: "Alice Johnson",
    photo: "/person1.jpg",
    quote: "This gym transformed my routine! Amazing trainers and environment.",
    rating: 5,
  },
  {
    name: "Mark Thompson",
    photo: "/person2.jpg",
    quote: "I feel stronger and healthier every day. Highly recommend it!",
    rating: 4,
  },
  {
    name: "Sophie Lee",
    photo: "/person3.jpg",
    quote: "The personalized programs are perfect for my fitness goals.",
    rating: 5,
  },
];

  export default function Testimonials(){

return(
  <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-2xl font-bold mb-12`}>What Our Members Say</h2>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-300 rounded-xl shadow-md p-6 flex flex-col items-center text-center"
            >
              <Image
                src={testimonial.photo}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <h3 className="font-semibold mb-2">{testimonial.name}</h3>
              {testimonial.rating && (
                <div className="flex justify-center mb-2">
                  {"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
                </div>
              )}
              <p className="text-gray-600">{testimonial.quote}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden flex overflow-x-auto space-x-4 px-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-300 rounded-xl shadow-md p-6 shrink-0 w-72 flex flex-col items-center text-center"
            >
              <Image
                src={testimonial.photo}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <h3 className="font-semibold mb-2">{testimonial.name}</h3>
              {testimonial.rating && (
                <div className="flex justify-center mb-2">
                  {"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
                </div>
              )}
              <p className="text-gray-600">{testimonial.quote}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
)}