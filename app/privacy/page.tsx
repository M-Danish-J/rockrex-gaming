import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumbs from "@/components/breadcrumbs"

export default function Privacy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="relative z-20">
        <Header />

        {/* Hero Section with Breadcrumbs */}
        <div className="relative h-[400px] w-full">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=800&width=1920&text=Privacy+Policy"
              alt="Privacy Policy Hero"
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
              PRIVACY <span className="text-amber-500">POLICY</span>
            </h1>

            <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy", isCurrent: true }]} />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="bg-gray-800/30 p-8 rounded-lg">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-gray-300 mb-4">
                  At RockRex Games, we respect your privacy and are committed to protecting your personal data. This
                  Privacy Policy explains how we collect, use, and safeguard your information when you visit our
                  website, play our games, or use our services.
                </p>
                <p className="text-gray-300">
                  Please read this Privacy Policy carefully. By accessing our website or using our services, you consent
                  to the practices described in this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <p className="text-gray-300 mb-4">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>
                    <strong>Personal Information:</strong> Name, email address, postal address, phone number, and other
                    similar contact data when you create an account, make a purchase, or contact us.
                  </li>
                  <li>
                    <strong>Game Data:</strong> Information about your gameplay, progress, achievements, and in-game
                    purchases.
                  </li>
                  <li>
                    <strong>Device Information:</strong> Information about your device, including IP address, device
                    type, operating system, and browser type.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information about how you use our website and services, including pages
                    visited, time spent, and links clicked.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>To provide and maintain our services</li>
                  <li>To process transactions and send related information</li>
                  <li>To improve our website, games, and services</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To send promotional communications and updates</li>
                  <li>To detect and prevent fraudulent or unauthorized activity</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-gray-300">
                  We implement appropriate security measures to protect your personal information from unauthorized
                  access, alteration, disclosure, or destruction. However, no method of transmission over the Internet
                  or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
                <p className="text-gray-300">
                  We may use third-party services to support our website and games, such as analytics providers, payment
                  processors, and advertising networks. These third parties may collect information about you as
                  required for their services. We encourage you to review their privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <p className="text-gray-300 mb-4">Depending on your location, you may have the following rights:</p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate or incomplete information</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to restrict or object to processing of your data</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                <p className="text-gray-300">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                  new policy on this page and updating the effective date. We encourage you to review this Privacy
                  Policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions or concerns about this Privacy Policy, please contact us at:
                  hi@rockrexgames.com
                </p>
              </section>

              <div className="border-t border-gray-700 pt-6">
                <p className="text-gray-400 text-sm">Last updated: May 17, 2025</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
