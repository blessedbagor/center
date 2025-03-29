"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";


export function NavBar() {
  const navItems = [
    {
      name: "Home",
      link: "https://igift.ph",   
    },
    {
      name: "About",
      link: "https://igift.ph/about",
    },
    {
        name: "Product",
        link: "https://igift.ph/products",
      },
      {
        name: "Earn",
        link: "https://igift.ph/earn",
      },
      {
        name: "Services",
        link: "https://igift.ph/services",
      },
      {
        name: "Token",
        link: "https://igift.ph/token",
      },
    {
      name: "Centers",
      link: "https://center.igift.ph",
    },
    {
        name: "Events",
        link: "/events",
      },
    {
      name: "Resources",
      link: "https://igift.ph/resources",
    },
    {
        name: "Contact",
        link: "https://igift.ph/contact",
      },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} className="font-mono uppercase" />
    </div>
  );
}
