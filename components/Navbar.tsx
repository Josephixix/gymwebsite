"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Package, Phone, Mail, Truck, Box, Dumbbell } from "lucide-react";
import { motion } from "motion/react";




export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
     <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
    <nav className="flex justify-between items-center px-5 lg:px-24 py-4 bg-gray-200 shadow-md fixed w-full top-0 left-0 z-50">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center gap-2 transform transition-all duration-700 ease-out animate-slideIn">
          <Dumbbell className="w-7 h-7 text-red-400" />
          <span className="font-bold text-lg flex items-center gap-1">
            <span className="text-red-500 text-sm lg:text-xl">Primefit</span>
            <span className="text-black text-sm lg:text-xl">Gym</span>
          </span>
        </div>
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
      >
        <Menu className="w-7 h-7 text-black" />
      </button>

      {/* Desktop Links */}
      <ul className="hidden lg:flex gap-6 text-lg">
        <li>
          <Link href="/services" className="hover:text-red-500 text-black transition">
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-red-500 text-black transition">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-red-500 text-black transition">
            About
          </Link>
        </li>
      </ul>

      {/* Desktop CTA */}
      <Link href="/sign-in" className="hidden lg:block">
        <button className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-black text-white rounded-md cursor-pointer transition">
        Book A Section
        </button>
      </Link>

      {/* FULLSCREEN MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-gray-200 z-50 flex flex-col animate-slideInRight ">
          {/* Top */}
          <div className="flex justify-between items-center px-6 py-6 border-gray-200 border-b">
            <div className="flex items-center gap-2 animate-fadeInSlow">
              <Dumbbell className="w-7 h-7 text-red-500" />
              <span className="font-bold text-lg text-black">
               <span className="text-red-500 text-sm lg:text-xl">Primefit</span>
            <span className="text-black text-sm lg:text-xl">Gym</span>
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="transition transform hover:rotate-90"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-6 px-6 py-8 text-lg">
            <Link href="/services" onClick={() => setOpen(false)} className="flex items-center gap-3 animate-fadeDelay1">
              <Dumbbell className="w-5 h-5 text-red-500" /> <span className="text-gray-600">Services</span>
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="flex items-center gap-3 animate-fadeDelay2">
              <Phone className="w-5 h-5 text-red-500" /> <span className="text-gray-600">Contact</span>
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="flex items-center gap-3 animate-fadeDelay3">
              <Mail className="w-5 h-5 text-red-500" /> <span className="text-gray-600">About Us</span>
            </Link>
          </div>

          {/* Bottom CTA (Sticky on Mobile) */}
          <div className="sticky bottom-0 bg-white px-6 pb-6 pt-4 lg:hidden mt-60 border-gray-200 border-t">
            <Link href="/sign-in" onClick={() => setOpen(false)}>
              <button className="w-full flex cursor-pointer items-center justify-center gap-2 px-4 py-3 bg-red-500 hover:bg-black text-white rounded-xl text-lg">
             Book A Section
              </button>
            </Link>
            <div className="text-center mt-4 text-gray-700">
              <p className="text-sm">Need help? Call us at</p>
              <a href="tel:+2344784070488" className="font-semibold text-black">
                +234(478)42562509
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
    </motion.nav>
  );
}