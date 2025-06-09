"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [videoError, setVideoError] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  const scrollToModels = () => {
    const modelsSection = document.getElementById("models-section")
    modelsSection?.scrollIntoView({ behavior: "smooth" })
  }

  const navigateToModel = (modelName: string) => {
    // This would typically use Next.js router
    window.location.href = `/models/${modelName.toLowerCase()}`
  }

  const models = [
    { name: "Chiron", image: "/img/chiron/chiron-frontview.jpg", description: "The Ultimate Hypercar" },
    { name: "Mistral", image: "/img/mistral/mistral-frontview.jpg", description: "Open-Top Excellence" },
    { name: "Divo", image: "/img/divo/divo-frontview.jpg", description: "Agile & Lightweight" },
    { name: "Tourbillon", image: "/img/tourbillion/Tourbillon-frontview.jpg", description: "Engineering Masterpiece" },
    { name: "Centodieci", image: "/img/centodecie/Centodieci-frontview.jpg", description: "Limited Edition" },
    { name: "Bolide", image: "/img/bolide/bolide-frontview.jpg", description: "Track-Focused Beast" },
  ]

  return (
    <div className="bg-black text-white relative">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="flex items-center justify-between py-3 px-6 lg:px-12">
          <div
            className="text-3xl font-bold tracking-[0.2em]"
            style={{
              fontFamily: 'Futura, "Futura Bold", Arial, sans-serif',
              letterSpacing: "0.2em",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            BUGATTI
          </div>

          <Button variant="ghost" size="sm" className="text-white hover:text-gray-300">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section min-h-screen bg-black text-white relative overflow-hidden">
        {/* First Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/img/bugatti-hero.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>

        
        

        {/* Main Content */}
        <main className="relative z-10 flex flex-col items-start justify-end pb-8 mt-auto min-h-screen text-left px-6 absolute top-0 left-0 mb-10">
          <div className="absolute bottom-0 left-0 pl-5 ">
            <div className="h-12 mt-8">
              <h2
                className="text-3xl md:text-4xl mt-2"
                style={{
                  fontFamily: "Horizon, 'Arial Black', Arial, sans-serif",
                  fontWeight: 100,
                  opacity: 0.1,
                }}
              >
                THE ULTIMATE HYPERCAR
              </h2>
            </div>

            <div className="flex flex-row sm:flex-col gap-6">
              <Button
                onClick={scrollToModels}
                variant="outline"
                className="group relative overflow-hidden border-2 border-cyan-400 text-cyan-400 hover:text-black px-2 py-1 rounded-lg font-semibold min-w-[50px] transition-all duration-300 transform hover:scale-105 w-[200px] hover:shadow-2xl hover:shadow-blue-500/25 bg-transparent mb-0 tracking-widest"
              >
                <span className="relative z-10 transition-colors duration-300">CONFIGURE &#x2192;</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
            </div>
          </div>
        </main>

        {/* Bottom Navigation Dots */}
        
      </section>

      {/* Models Section */}
      <section id="models-section" className="py-20 px-6 lg:px-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl  text-center mb-16 tracking-[0.5em]">
            OUR MODELS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <div
                key={model.name}
                onClick={() => navigateToModel(model.name)}
                className="relative overflow-hidden bg-gray-800 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={model.image || "/placeholder.svg"}
                    alt={model.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={`/png/${model.name.toLowerCase()}-wordmark.png`}
                    alt={model.name}
                    className="h-8 md:h-10 filter invert"
                    style={{
                      filter: "invert(1) drop-shadow(0 2px 4px rgba(0,0,0,0.8))",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
