"use client";
import { Dumbbell, Zap, HandFist, Bird, User, Scaling } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {Montserrat } from "next/font/google";
import { motion } from "motion/react";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import About from "../components/About";
import Trainers from "@/components/Trainers";
import Plan from "@/components/Plan";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800"],
});


export default function Home() {

    
  return (
<>

<Hero/> 

<About/>

<Programs/>

<Trainers/>

<Plan/>

<Testimonials/>

<Contact/> 




 
</>
  );
}
