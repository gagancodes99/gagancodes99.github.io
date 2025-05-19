import React, { useEffect, useState } from 'react'
import WorkMob from '../components/WorkMob'
import WorkDesk from '../components/WorkDesk'
import useWindowWidth from '../hooks/useWindowWidth'

const Works = () => {
  const windowWidth = useWindowWidth();
  const [currProject, setCurrProject] = useState(0);
  const handleCurrProject = (index) => {
    const newIndex = ((index % projects.length) + projects.length) % projects.length;
    setCurrProject(newIndex);
  }
  return (
    <>
      {windowWidth < 1024 ? <WorkMob currProject={currProject} projects={projects} handleCurrProject={handleCurrProject}/> : <WorkDesk currProject={currProject} projects={projects} handleCurrProject={handleCurrProject}/>}
    </>
  )
}

export default Works
const projects = [
  {
    id: "efys-9a4c-4a3f-b91c-1c2b3df84ef0",
    title: "EFYS (Eat From Your Seat)",
    imageUrl: '/images/efys.png',
    smallDescription: "Seat-based food ordering system for restaurants and stadiums using Nuxt3, Laravel, Stripe, and AWS.",
    largeDescription: "EFYS allows customers to scan a QR code from their seat and place food orders without leaving their spot. It supports real-time order tracking, Stripe-powered payments, and a powerful admin dashboard built with Laravel. Restaurant owners can manage menus, orders, and analytics. Hosted on AWS with secure and scalable infrastructure.",
    url: "http://eatfromyourseat.com/",
    tags: ["Nuxt2 & 3", "Laravel", "Stripe", "AWS"],
  },
  {
    id: "prodigy-76a1-49b4-bfd7-c9f8e2a91e39",
    title: "Prodigy Football",
    imageUrl: '/images/prodigy.png',
    smallDescription: "A minimalist travel story-sharing platform built with HTML, CSS, JS, PHP, and jQuery.",
    largeDescription: "Prodigy Football is a Sydney-based football development academy offering elite coaching for all ages. They provide private training, team sessions, academies, and international tours. With experienced coaches, they focus on high-intensity, age-appropriate training to help players reach their full potential both locally and globally.",
    url: "https://prodigyfootball.com.au",
    tags: ["React", "Motion", "PHP", "SQL"],
  },
  {
    id: "walkbuy-17f2-4d3e-981f-7bdde6e2d456",
    title: "WalkBuy",
    imageUrl: '/images/walkbuy.png',
    smallDescription: "A React Native app to shop nearby while walking, powered by Google Maps API and Laravel backend.",
    largeDescription: "WalkBuy is a location-based mobile shopping app that helps users discover and buy from local vendors. Users can view stores around them on a live map, explore product catalogs, and place orders directly from their phones. Vendors manage their store via a Laravel backend, while push notifications and real-time updates enhance user experience. Hosted on DigitalOcean.",
    url: "https://walkbuyapp.com/",
    tags: ["React Native", "Google Maps", "Laravel", 'stripe'],
  },
  {
    id: "ester-17f2-4d3e-981f-7bdde6e2d888",
    title: "esterpatriciaceresa",
    imageUrl: '/images/ester.png',
    smallDescription: "Ester Patricia Ceresa’s site promotes her I AM method, personal development seminars, and consultations through a clean, multilingual design focused on emotional and mental well-being.",
    largeDescription: "Ester Patricia Ceresa’s official website presents her expertise in personal development, behavioral analysis, and emotional intelligence. It serves as a platform to explore her signature I AM method (Instant Analysis Morphophysiognomics), which helps individuals understand personality through facial features. The site offers detailed information about her seminars, workshops, and one-on-one consultations aimed at personal growth and self-awareness. Designed with clarity and professionalism, the multilingual site caters to an international audience seeking guidance on emotional balance, mindset transformation, and self-discovery.",
    url: "https://www.esterpatriciaceresa.com/en/",
    tags: ['wordpress'],
  },
  {
    id: "ester-17f2-4d3e-981f-7bdde6e2d888",
    title: "renovation",
    imageUrl: '/images/renovation.png',
    smallDescription: "Renovation Junkies is an Australian platform offering expert advice, templates, and resources for home renovators. It helps users plan efficiently with blogs, checklists, and guides, making it ideal for both first-time renovators and those renovating for profit.",
    largeDescription: "Renovation Junkies is an Australian-based platform dedicated to empowering homeowners and aspiring renovators with practical knowledge and tools for successful home improvement projects. The website offers a wealth of resources, including detailed blog posts on topics like bathroom waterproofing, tile painting, and contractor selection . Additionally, it provides downloadable templates, such as construction schedules and finishes checklists, to help users plan and execute renovations efficiently . Whether you're a first-time renovator or looking to renovate for profit, Renovation Junkies aims to guide you through each step of the renovation process .",
    url: "https://renovationjunkies.com.au/",
    tags: ['wordpress'],
  },
  
];

