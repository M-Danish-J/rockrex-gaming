"use client"

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumbs from "@/components/breadcrumbs"
import { games } from "@/lib/games-data"
import { useScrollTop } from "@/hooks/use-scroll-top"

export default function Games() {
  // Use the custom hook to scroll to top on navigation
  useScrollTop()

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="relative z-20">
        <Header />

        {/* Hero Section with Breadcrumbs */}
        <div className="relative h-[400px] w-full">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/banner.png"
              alt="Our Games Hero"
              fill
              priority
              className="object-cover brightness-50"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              OUR <span className="text-amber-500">GAMES</span>
            </h1>

            <Breadcrumbs items={[{ label: "Our Games", href: "/games", isCurrent: true }]} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Games Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button className="px-6 py-2 bg-amber-500 text-black font-medium rounded-full">All Games</button>
            <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">Action</button>
            <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">RPG</button>
            <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">Racing</button>
            <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">Strategy</button>
            <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">Puzzle</button>
            <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">Survival</button>
          </div>

          {/* Games Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <div key={game.id} className="game-card group bg-gray-800/30 rounded-lg overflow-hidden">
                <Link href={`/games/${game.slug}`} className="block relative overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=500&text=${game.title}`}
                    alt={game.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold">{game.title}</h3>
                    <p className="text-amber-400">{game.category}</p>
                  </div>
                </Link>

                <div className="p-6">
                  <p className="text-gray-300 mb-4">{game.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Platforms:</h4>
                    <div className="flex flex-wrap gap-2">
                      {game.platforms.map((platform) => (
                        <span key={platform} className="px-3 py-1 bg-gray-700 text-xs rounded-full">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400">Release Date:</h4>
                      <p>{game.releaseDate}</p>
                    </div>
                    <Link
                      href={`/games/${game.slug}`}
                      className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
