"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumbs from "@/components/breadcrumbs"
import { getGameBySlug, getAllGames } from "@/lib/games-data"
import { ChevronRight, Monitor, Server } from "lucide-react"
import { useScrollTop } from "@/hooks/use-scroll-top"

interface GameDetailProps {
  params: {
    slug: string
  }
}

export default function GameDetail({ params }: GameDetailProps) {
  // Use the custom hook to scroll to top on navigation
  useScrollTop()

  const game = getGameBySlug(params.slug)
  const games = getAllGames()

  if (!game) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="relative z-20">
        <Header />

        {/* Hero Section with Breadcrumbs */}
        <div className="relative h-[500px] w-full">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={`/placeholder.svg?height=1000&width=1920&text=${game.title}`}
              alt={`${game.title} Hero`}
              fill
              priority
              className="object-cover brightness-50"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">{game.title}</h1>

            <p className="text-amber-400 text-xl mb-6">{game.category}</p>

            <Breadcrumbs
              items={[
                { label: "Our Games", href: "/games" },
                { label: game.title, href: `/games/${game.slug}`, isCurrent: true },
              ]}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Game Overview */}
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <div className="text-gray-300 space-y-4">
                {game.longDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Key Features</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {game.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800/30 p-6 rounded-lg h-fit">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Game Info</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400">Developer:</h4>
                    <p>{game.developer}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400">Publisher:</h4>
                    <p>{game.publisher}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400">Release Date:</h4>
                    <p>{game.releaseDate}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400">Genre:</h4>
                    <p>{game.category}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400">Rating:</h4>
                    <p>{game.rating}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {game.platforms.map((platform) => (
                    <span key={platform} className="px-4 py-2 bg-gray-700 rounded-full">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full block text-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Screenshots */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {game.screenshots.map((screenshot, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=${game.title}+Screenshot+${index + 1}`}
                    alt={`${game.title} Screenshot ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* System Requirements (PC only) */}
          {game.platforms.includes("PC") && game.systemRequirements && (
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8">System Requirements</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800/30 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Monitor className="text-amber-500 mr-2" />
                    <h3 className="text-xl font-bold">Minimum Requirements</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400">OS:</h4>
                      <p className="text-gray-300">{game.systemRequirements.minimum.os}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400">Processor:</h4>
                      <p className="text-gray-300">{game.systemRequirements.minimum.processor}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400">Memory:</h4>
                      <p className="text-gray-300">{game.systemRequirements.minimum.memory}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400">Graphics:</h4>
                      <p className="text-gray-300">{game.systemRequirements.minimum.graphics}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400">Storage:</h4>
                      <p className="text-gray-300">{game.systemRequirements.minimum.storage}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Server className="text-amber-500 mr-2" />
                    <h3 className="text-xl font-bold">Recommended Requirements</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400">OS:</h4>
                      <p className="text-gray-300">{game.systemRequirements.recommended.os}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400">Processor:</h4>
                      <p className="text-gray-300">{game.systemRequirements.recommended.processor}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400">Memory:</h4>
                      <p className="text-gray-300">{game.systemRequirements.recommended.memory}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400">Graphics:</h4>
                      <p className="text-gray-300">{game.systemRequirements.recommended.graphics}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400">Storage:</h4>
                      <p className="text-gray-300">{game.systemRequirements.recommended.storage}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Related Games */}
          <div>
            <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {games
                .filter((g) => g.id !== game.id)
                .slice(0, 3)
                .map((relatedGame) => (
                  <Link
                    href={`/games/${relatedGame.slug}`}
                    key={relatedGame.id}
                    className="group block bg-gray-800/30 rounded-lg overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=300&width=500&text=${relatedGame.title}`}
                        alt={relatedGame.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-lg font-bold">{relatedGame.title}</h3>
                        <p className="text-amber-400">{relatedGame.category}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
