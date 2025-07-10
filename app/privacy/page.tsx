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
              src="/banner.png"
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
          <div className="bg-gray-800/30 p-8 rounded-lg space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p>RockRex Games ("RockRex Games," "we," "us," or "our") is committed to protecting the privacy of our users ("user" or "you"). This Privacy Policy explains how we collect, use, disclose, and safeguard information when you access or use our mobile games, websites, and other online services (collectively, the "Services"). Please read this Privacy Policy carefully to understand our practices regarding your information and how we will treat it.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p>We do not directly collect any personal information from you when you use our Services. We do not require you to create an account or provide any personal details to access our games or services. The data collected by third parties is non-personally identifiable whenever possible, which can reassure users about their privacy.</p>
              <p>While we do not collect personal information directly, we do work with trusted third-party analytics and advertising partners who may collect certain information automatically as you interact with our Services. This information may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Device Information:</strong> Data about the device you use to access our Services, such as device type, operating system, unique device identifiers, IP address, mobile network information, and information about the device's interaction with our Services.</li>
                <li><strong>Usage Information:</strong> Data about how you interact with and use our Services, including gameplay data, session lengths, levels reached, in-game purchases, and other usage metrics.</li>
                <li><strong>Location Information:</strong> Approximate geolocation data based on your IP address or mobile network information to provide you with location-based services or content.</li>
                <li><strong>Advertising Data:</strong> Information about your interactions with advertisements displayed within our Services, including the type of advertisements viewed and whether you interacted with them.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To improve and optimize our Services by analyzing usage trends, tracking performance metrics, and identifying areas for enhancement or bug fixes.</li>
                <li>To deliver customized content and personalized gaming experiences tailored to your preferences and gameplay behaviors.</li>
                <li>To serve targeted advertisements within our Services that may be more relevant to your interests and preferences based on your device information and interactions with our games.</li>
                <li>To comply with legal obligations, resolve disputes, prevent fraud or abuse, and enforce our Terms of Service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Third-Party Analytics and Advertising Partners</h2>
              <p>We work with trusted third-party analytics and advertising partners to help us understand how our Services are being used, to provide targeted advertising, and to assist with other analytics and marketing efforts. These partners may collect and process information about your use of our Services as described above.</p>
              <p>Please note that these third-party partners may have their own privacy policies governing their collection, use, and disclosure of information. We encourage you to review their privacy policies to understand their practices.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Advertising</h2>
              <p>We display advertisements within our games through third-party advertising partners. These advertisements may be targeted based on information collected about your device, gameplay data, and interactions with the advertisements.</p>
              <p>Our advertising partners may use cookies, web beacons, and other tracking technologies to collect information about your interactions with the advertisements and your device. This information may be used to provide you with more relevant advertising content and to measure the effectiveness of advertising campaigns. Please note that these tracking technologies are used exclusively by our third-party partners and not directly by us.</p>
              <p>We encourage you to review the privacy policies of our advertising partners to understand how they collect and use your information for advertising purposes. You may have options to control or block such tracking technologies through your device settings or by opting out directly on their websites.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Children's Privacy</h2>
              <p>Our Services are not directed towards children under the age of 13, and we do not knowingly collect personal information from children under 13.</p>
              <p>If we become aware that we have inadvertently collected personal information from a child under 13 without parental consent, we will take reasonable steps to delete such information from our records as soon as possible.</p>
              <p>If you believe we may have collected personal information from a child under 13, please contact us at <strong>rockrexgames@gmail.com</strong>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Data Security</h2>
              <p>We take reasonable measures to protect the information we collect from unauthorized access, use, or disclosure. However, no method of data transmission or storage is 100% secure, and we cannot guarantee the absolute security of your information. By using our Services, you acknowledge and accept that we cannot ensure or warrant the security of any information transmitted to or from our Services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
              <p>We retain the information collected for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. We may retain certain information in aggregated or de-identified form for analytics and statistical purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Your Choices and Rights</h2>
              <p>Depending on your location and applicable laws, you may have certain rights regarding your information, such as the right to access, correct, delete, or object to the processing of your information. If you would like to exercise any of these rights, please contact us at <strong>rockrexgames@gmail.com</strong>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. The updated version will be effective as soon as it is accessible, and we encourage you to review this Privacy Policy periodically for any changes.</p>
              <p>Your continued use of our Services after the effective date of the revised Privacy Policy constitutes your acceptance of the updated terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
              <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
              <p><strong>RockRex Games</strong><br />Email: <strong>rockrexgames@gmail.com</strong></p>
              <p>By using our Services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms and conditions.</p>
            </section>

            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 text-sm">Last updated: July 10, 2025</p>
            </div>
          </div>

        </div>

        <Footer />
      </div>
    </main>
  )
}
