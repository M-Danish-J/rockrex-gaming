import Link from "next/link"
import { Facebook, Linkedin, Mail } from "lucide-react"

export default function Header() {
  return (
    <>
      {/* Top bar with contact info */}
      <div className="flex justify-end items-center p-3 border-b border-gray-800 text-sm">
        <Link href="https://facebook.com" className="mx-2 hover:text-amber-400">
          <Facebook size={16} />
        </Link>
        <Link href="https://linkedin.com" className="mx-2 hover:text-amber-400">
          <Linkedin size={16} />
        </Link>
        <Link href="mailto:rockrexgames@gmail.com" className="mx-2 hover:text-amber-400 flex items-center">
          <Mail size={16} className="mr-1" />
          rockrexgames@gmail.com
        </Link>
      </div>

      {/* Navigation */}
      <header className="flex flex-col md:flex-row justify-between items-center py-4 px-6 md:px-12">
        <div className="logo mb-4 md:mb-0">
          <Link href="/">
            <div className="flex items-center">
              <div className="bg-amber-500 text-black font-bold text-3xl p-2 mr-2">RX</div>
              <div className="text-xl">
                <span className="font-bold">ROCKREX</span>
                <span className="text-sm block">GAMES</span>
              </div>
            </div>
          </Link>
        </div>

        <nav className="flex flex-wrap justify-center">
          <Link href="/" className="nav-link">
            HOME
          </Link>
          <Link href="/about" className="nav-link">
            ABOUT
          </Link>
          <Link href="/games" className="nav-link">
            OUR GAMES
          </Link>
          <Link href="/contact" className="nav-link">
            CONTACT
          </Link>
          <Link href="/privacy" className="nav-link">
            PRIVACY
          </Link>
        </nav>
      </header>
    </>
  )
}
