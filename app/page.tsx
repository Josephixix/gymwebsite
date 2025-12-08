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

const plans = [
  {
    name: "Basic",
    price: "$29/mo",
    features: ["Access to gym equipment", "1 group class/week", "Locker room access"],
  },
  {
    name: "Standard",
    price: "$49/mo",
    features: ["Everything in Basic", "3 group classes/week", "Personal trainer 1 session/month"],
    highlight: true, // Middle plan highlighted
  },
  {
    name: "Premium",
    price: "$79/mo",
    features: ["Everything in Standard", "Unlimited classes", "Personal trainer weekly"],
  },
];

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


export default function Home() {

    
  return (
<>

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
    <h1 className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 font-bold leading-tight tracking-tighter ${montserrat.className}`}>
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
        src="/about.jpg" // Replace with your gym/trainer image
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
      <h2 className={`${montserrat.className} text-2xl font-extrabold text-gray-900`}
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

<section className="py-16 bg-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className={`${montserrat.className} text-2xl sm:text-2xl md:text-4xl font-bold mb-12`}>Meet Our Trainers</h2>
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


 <section className="py-16 bg-gray-300">
      <div className="container mx-auto px-4 text-center">
        <h2 className={`${montserrat.className} text-2xl font-bold mb-12`}>Membership Plans</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-md ${
                plan.highlight ? "border-4 border-blue-500 shadow-lg scale-105" : ""
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-black transition">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


    
  <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className={`${montserrat.className} text-2xl font-bold mb-12`}>What Our Members Say</h2>

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
              className="bg-gray-300 rounded-xl shadow-md p-6 flex-shrink-0 w-72 flex flex-col items-center text-center"
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



         <motion.section
      className="flex justify-center items-center py-8 px-3 md:px-12 lg:px-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full max-w-3xl">
        {/* Heading */}
        <h2 className={`${montserrat.className} mt-4 mb-5 text-2xl md:text-4xl font-bold text-center text-red-600 `}>
          Let's Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

        {/* Form container */}
        <div className="grid md:grid-cols-2 gap-12 bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6 md:p-12">
          {/* Form */}
          <form className="space-y-6 text-gray-800 w-full">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-lg font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                className="w-full min-h-[100px] rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-black text-white py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              Send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/>
                <path d="m21.854 2.147-10.94 10.939"/>
              </svg>
            </button>
          </form>

          {/* Optional Right Content */}
          <div className="hidden md:flex items-center justify-center">
            {/* Add an image, map, or contact info here */}
          </div>
        </div>
      </div>
    </motion.section>
</>
  );
}
