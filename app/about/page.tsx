"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumbs from "@/components/breadcrumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const teamMembers = [
  {
    name: "Minhas",
    role: "Co-Founder",
    image: "/minhas.jpg",
  },
  {
    name: "Sikandar",
    role: "Co-Founder",
    image: "/sikandar.jpg",
  },
  {
    name: "Amir",
    role: "Senior Marketing Specialist",
    image: "/amir.jpg",
  },
  {
    name: "Ali Raza",
    role: "Developer",
    image: "/ali.jpg",
  },
  {
    name: "Waleed Ali",
    role: "3D Artist",
    image: "/waleed.jpeg",
  },
  {
    name: "Hasnain Khan",
    role: "UI/UX Designer",
    image: "/khosa.png",
  },
  {
    name: "Zain Khan",
    role: "Junior ASO",
    image: "/zain.jpeg",
  },
  {
    name: "Ahmad Khan",
    role: "UI/UX Designer",
    image: "/ahmad.jpg",
  },
];

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-amber-700">
      <div className="relative z-20">
        <Header />

        {/* Hero Section with Breadcrumbs */}
        <div className="relative h-[400px] w-full">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/banner.png"
              alt="About Us Hero"
              fill
              priority
              className="object-cover brightness-90"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              ABOUT <span className="text-amber-500">ROCKREX</span> GAMES
            </h1>

            <Breadcrumbs
              items={[{ label: "About", href: "/about", isCurrent: true }]}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2020, RockRex Games was born from a passion for
                creating immersive gaming experiences that push the boundaries
                of entertainment and technology.
              </p>
              <p className="text-gray-300 mb-4">
                What started as a small team of dedicated developers has grown
                into a dynamic studio known for innovative gameplay, stunning
                visuals, and compelling narratives.
              </p>
              <p className="text-gray-300">
                Our mission is to create games that not only entertain but also
                inspire, challenge, and connect players around the world.
              </p>
            </div>

            <div className="relative">
              <Image
                src="/image1.jpg"
                alt="Our story"
                width={600}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-12">Our Values</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 p-8 rounded-lg">
                <div className="bg-amber-500 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible in
                  gaming, embracing new technologies and creative approaches.
                </p>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-lg">
                <div className="bg-amber-500 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Quality</h3>
                <p className="text-gray-300">
                  We are committed to excellence in every aspect of our games,
                  from gameplay mechanics to visual design and storytelling.
                </p>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-lg">
                <div className="bg-amber-500 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Community</h3>
                <p className="text-gray-300">
                  We value our players and believe in creating games that bring
                  people together, fostering connections and shared experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-12">Our Team</h2>

            <div className="relative max-w-4xl mx-auto">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 4 },
                }}
                className="!pb-12"
              >
                {teamMembers.map((member) => (
                  <SwiperSlide key={member.name}>
                    <div className="team-member text-center">
                      <div className="relative mb-4 overflow-hidden rounded-lg w-full aspect-square">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                          sizes="(min-width: 768px) 400px, 100vw"
                        />
                      </div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-amber-400">{member.role}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="mt-12">
              <Link href="/games" className="btn-primary">
                VIEW OUR GAMES
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
