import Link from "next/link"
import { Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black/80 px-6 md:px-20 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <div className="flex items-center mb-4">
                <div className="bg-amber-500 text-black font-bold text-2xl p-1 mr-2">RX</div>
                <div>
                  <span className="font-bold">ROCKREX</span>
                  <span className="text-xs block">GAMES</span>
                </div>
              </div>
            </Link>

            <p className="text-gray-400 text-sm mb-4">
              Creating immersive gaming experiences that captivate players around the world.
            </p>

            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-amber-400">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-amber-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/games" className="hover:text-amber-400">
                  Our Games
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/contact" className="hover:text-amber-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-amber-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-amber-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-amber-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Contact Us</h3>
            <address className="text-gray-400 not-italic">
              <p className="mb-2">123 Game Street</p>
              <p className="mb-2">San Francisco, CA 94107</p>
              <p className="mb-2">United States</p>
              <p className="mb-2">
                <a href="mailto:rockrexgames@gmail.com" className="hover:text-amber-400">
                  rockrexgames@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} RockRex Games. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
