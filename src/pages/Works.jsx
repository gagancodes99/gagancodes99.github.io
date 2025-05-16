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
    url: "https://efys.example.com"
  },
  {
    id: "walkbuy-17f2-4d3e-981f-7bdde6e2d456",
    title: "WalkBuy",
    imageUrl: '/images/efys.png',
    smallDescription: "A React Native app to shop nearby while walking, powered by Google Maps API and Laravel backend.",
    largeDescription: "WalkBuy is a location-based mobile shopping app that helps users discover and buy from local vendors. Users can view stores around them on a live map, explore product catalogs, and place orders directly from their phones. Vendors manage their store via a Laravel backend, while push notifications and real-time updates enhance user experience. Hosted on DigitalOcean.",
    url: "https://walkbuy.example.com"
  },
  {
    id: "globalexp-76a1-49b4-bfd7-c9f8e2a91e39",
    title: "Global Experience",
    imageUrl: '/images/efys.png',
    smallDescription: "A minimalist travel story-sharing platform built with HTML, CSS, JS, PHP, and jQuery.",
    largeDescription: "Global Experience is a web platform where travelers can share bite-sized stories about cultural encounters, food adventures, or travel tips. It's designed to be lightweight and fast, with no login required to browse. Users can like and comment using AJAX (jQuery), and admins can moderate content via a simple PHP-based dashboard.",
    url: "https://globalexperience.example.com"
  }
];

