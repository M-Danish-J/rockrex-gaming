"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function GameNotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="relative z-20">
        <Header />

        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <h1 className="text-5xl font-bold mb-6">Game Not Found</h1>
          <p className="text-xl text-gray-300 mb-12">
            Sorry, the game you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/games"
            className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-lg transition-colors"
          >
            Browse All Games
          </Link>
        </div>

        <Footer />
      </div>
    </main>
  )
}
