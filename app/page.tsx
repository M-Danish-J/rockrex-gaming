import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Gaming background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative z-20">
        <Header />

        {/* Hero Section */}
        <section className="px-6 md:px-20 py-20 md:py-32 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h1 className="hero-title mb-6">
                ONE OF THE <br />
                LEADING <span className="hero-highlight">GAME</span> <br />
                <span className="hero-highlight">ENTHUSIAST</span> <br />
                COMPANY
              </h1>

              <p className="text-gray-300 mb-8 max-w-lg">
                We design & develop quality video games using creative ideas, latest technology and innovative
                techniques. Being games fanatic, we are continuously growing and reaching at the top of gaming world.
              </p>

              <Link href="/games" className="btn-primary">
                DISCOVER GAMES
              </Link>
            </div>

            <div className="relative hidden md:block">
              {/* Game badges/achievements */}
              <div className="absolute -left-10 top-1/4 bg-gray-800/80 rounded-full p-3">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Game badge"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>

              <div className="absolute left-1/4 bottom-0 bg-gray-800/80 rounded-full p-3">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Game badge"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>

              <div className="absolute right-0 top-1/3 bg-gray-800/80 rounded-full p-3">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Game badge"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Games Section */}
        <section className="px-6 md:px-20 py-20 bg-black/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              OUR <span className="text-amber-500">FEATURED</span> GAMES
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((game) => (
                <div key={game} className="game-card group">
                  <div className="relative overflow-hidden mb-4">
                    <Image
                      src={`/placeholder.svg?height=300&width=500&text=Game+${game}`}
                      alt={`Featured Game ${game}`}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold">Awesome Game {game}</h3>
                      <p className="text-amber-400">Action / Adventure</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/games" className="btn-primary">
                VIEW ALL GAMES
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="px-6 md:px-20 py-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                WHO <span className="text-amber-500">WE</span> ARE
              </h2>

              <p className="text-gray-300 mb-6">
                RockRex Games is a passionate team of game developers, designers, and storytellers dedicated to creating
                immersive gaming experiences that push the boundaries of entertainment.
              </p>

              <p className="text-gray-300 mb-8">
                Founded in 2023, we've quickly established ourselves as innovators in the gaming industry, combining
                cutting-edge technology with compelling narratives to deliver unforgettable games.
              </p>

              <Link href="/about" className="btn-primary">
                LEARN MORE
              </Link>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600&text=Team"
                alt="Our team"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl"
              />

              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-black p-6 rounded-lg">
                <p className="text-4xl font-bold">5+</p>
                <p className="text-sm font-medium">YEARS EXPERIENCE</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
