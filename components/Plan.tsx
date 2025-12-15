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

export default function Plan() {
  return (
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
  )}