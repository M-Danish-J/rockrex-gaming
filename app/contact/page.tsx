import { Mail, MapPin, Phone } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumbs from "@/components/breadcrumbs";
import Image from "next/image";

export default function Contact() {
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
              alt="Contact Us Hero"
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
              CONTACT <span className="text-amber-500">US</span>
            </h1>

            <Breadcrumbs
              items={[{ label: "Contact", href: "/contact", isCurrent: true }]}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-300 mb-8">
                Have questions about our games or interested in working with us?
                We'd love to hear from you! Fill out the form and our team will
                get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-500 p-3 rounded-lg mr-4">
                    <MapPin className="text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Our Location</h3>
                    <p className="text-gray-300">
                      Al Rehman Garden, Lahore, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-500 p-3 rounded-lg mr-4">
                    <Mail className="text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Us</h3>
                    <p className="text-gray-300">rockrexgames@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-500 p-3 rounded-lg mr-4">
                    <Phone className="text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Call Us</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
