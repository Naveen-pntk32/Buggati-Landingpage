"use client"

import { Button } from "@/components/ui/button"
import { Menu, ArrowLeft, Plus } from "lucide-react"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

export default function ModelPage() {
  const params = useParams()
  const modelName = params.model as string
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [titleOpacity, setTitleOpacity] = useState(1)

  // Model data with multiple images and specifications
  const modelData: Record<string, any> = {
    chiron: {
      name: "CHIRON",
      wordmark: "/images/chiron-wordmark.png",
      fullName: "BUGATTI CHIRON SPORT",
      images: ["/images/bugatti-chiron.jpg", "/images/bugatti-hero.jpg", "/images/bugatti-tourbillon.jpg"],
      specs: {
        maxSpeed: "420 km/h",
        acceleration: "2.4 s",
        horsepower: "1479 HP",
        torque: "1600 Nm",
      },
      features: [
        {
          title: "One-Piece Taillight",
          description:
            "Created as one single unbroken piece, the striking taillight is the embodiment of 'Form Follows Performance', allowing light to be emitted and form beneath it, a seamless blending of style and innovation.",
          images: ["/images/bugatti-chiron.jpg", "/images/bugatti-hero.jpg"],
        },
        {
          title: "Beauty Underneath",
          description:
            "Nothing is too beautiful. The pursuit of beauty begins beneath the design of Tourbillon's chassis — a stunning work of art, hidden from view, that's not only exquisitely formed but enormously strong.",
          images: ["/images/bugatti-tourbillon.jpg", "/images/bugatti-divo.jpg"],
        },
      ],
    },
    mistral: {
      name: "MISTRAL",
      wordmark: "/images/mistral-wordmark.png",
      fullName: "BUGATTI W16 MISTRAL",
      images: ["/images/bugatti-mistral.jpg", "/images/bugatti-chiron.jpg", "/images/bugatti-divo.jpg"],
      specs: {
        maxSpeed: "420 km/h",
        acceleration: "2.4 s",
        horsepower: "1577 HP",
        torque: "1600 Nm",
      },
      features: [
        {
          title: "Iconic Silhouette",
          description:
            "The W16 Mistral redefines open-top motoring with its distinctive silhouette and uncompromising performance, a fitting tribute to Bugatti's legendary W16 engine.",
          images: ["/images/bugatti-mistral.jpg", "/images/bugatti-chiron.jpg"],
        },
        {
          title: "Engineering Excellence",
          description:
            "Every detail of the W16 Mistral has been meticulously crafted to deliver the ultimate driving experience, combining breathtaking speed with unparalleled luxury.",
          images: ["/images/bugatti-divo.jpg", "/images/bugatti-hero.jpg"],
        },
      ],
    },
    divo: {
      name: "DIVO",
      wordmark: "/images/divo-wordmark.png",
      fullName: "BUGATTI DIVO",
      images: ["/images/bugatti-divo.jpg", "/images/bugatti-tourbillon.jpg", "/images/bugatti-mistral.jpg"],
      specs: {
        maxSpeed: "380 km/h",
        acceleration: "2.4 s",
        horsepower: "1479 HP",
        torque: "1600 Nm",
      },
      features: [
        {
          title: "Agile Masterpiece",
          description:
            "The Divo represents a new chapter in Bugatti's history, focusing on extreme agility and corner dynamics while maintaining the brand's signature luxury and exclusivity.",
          images: ["/images/bugatti-divo.jpg", "/images/bugatti-tourbillon.jpg"],
        },
        {
          title: "Aerodynamic Perfection",
          description:
            "Every curve and surface of the Divo has been engineered to optimize airflow and downforce, resulting in a 90kg increase in downforce compared to the Chiron.",
          images: ["/images/bugatti-mistral.jpg", "/images/bugatti-hero.jpg"],
        },
      ],
    },
    tourbillon: {
      name: "TOURBILLON",
      wordmark: "/images/tourbillon-wordmark.png",
      fullName: "BUGATTI TOURBILLON",
      images: ["/images/bugatti-tourbillon.jpg", "/images/bugatti-divo.jpg", "/images/bugatti-chiron.jpg"],
      specs: {
        maxSpeed: "445 km/h",
        acceleration: "2.0 s",
        horsepower: "1775 HP",
        torque: "1800 Nm",
      },
      features: [
        {
          title: "Revolutionary Design",
          description:
            "The Tourbillon represents Bugatti's vision for the future, combining cutting-edge technology with timeless elegance in a package that pushes the boundaries of automotive design.",
          images: ["/images/bugatti-tourbillon.jpg", "/images/bugatti-divo.jpg"],
        },
        {
          title: "Unmatched Performance",
          description:
            "With its groundbreaking powertrain and advanced aerodynamics, the Tourbillon delivers performance figures that redefine what's possible in a production hypercar.",
          images: ["/images/bugatti-chiron.jpg", "/images/bugatti-hero.jpg"],
        },
      ],
    },
    centodieci: {
      name: "CENTODIECI",
      wordmark: "/images/centodieci-wordmark.png",
      fullName: "BUGATTI CENTODIECI",
      images: ["/images/bugatti-chiron.jpg", "/images/bugatti-hero.jpg", "/images/bugatti-tourbillon.jpg"],
      specs: {
        maxSpeed: "380 km/h",
        acceleration: "2.4 s",
        horsepower: "1577 HP",
        torque: "1600 Nm",
      },
      features: [
        {
          title: "Limited Edition Excellence",
          description:
            "The Centodieci represents the pinnacle of Bugatti's craftsmanship, with only 10 units ever produced, making it one of the most exclusive hypercars in the world.",
          images: ["/images/bugatti-chiron.jpg", "/images/bugatti-hero.jpg"],
        },
        {
          title: "Heritage Reimagined",
          description:
            "Paying homage to the legendary EB110, the Centodieci combines modern engineering with classic design elements, creating a truly unique automotive masterpiece.",
          images: ["/images/bugatti-tourbillon.jpg", "/images/bugatti-divo.jpg"],
        },
      ],
    },
    bolide: {
      name: "BOLIDE",
      wordmark: "/images/bolide-wordmark.png",
      fullName: "BUGATTI BOLIDE",
      images: ["/images/bugatti-divo.jpg", "/images/bugatti-mistral.jpg", "/images/bugatti-chiron.jpg"],
      specs: {
        maxSpeed: "500 km/h",
        acceleration: "2.17 s",
        horsepower: "1825 HP",
        torque: "1850 Nm",
      },
      features: [
        {
          title: "Track-Focused Beast",
          description:
            "The Bolide is Bugatti's most extreme creation, designed purely for track performance with uncompromising aerodynamics and lightweight construction.",
          images: ["/images/bugatti-divo.jpg", "/images/bugatti-mistral.jpg"],
        },
        {
          title: "Ultimate Performance",
          description:
            "With its radical design and extreme power-to-weight ratio, the Bolide represents the absolute pinnacle of what's possible in automotive engineering.",
          images: ["/images/bugatti-chiron.jpg", "/images/bugatti-hero.jpg"],
        },
      ],
    },
  }

  const currentModel = modelData[modelName] || modelData.chiron

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const imageIndex = Math.min(Math.floor(scrollPosition / (windowHeight * 0.8)), 2)
      setCurrentImageIndex(imageIndex)

      // Calculate opacity based on proximity to performance section
      const performanceSection = document.getElementById("performance-section")
      if (performanceSection) {
        const performanceTop = performanceSection.offsetTop
        const fadeDistance = 200 // Distance over which to fade
        const distanceToPerformance = performanceTop - scrollPosition - 200 // Adjust for fixed title position

        if (distanceToPerformance <= fadeDistance) {
          const opacity = Math.max(0, distanceToPerformance / fadeDistance)
          setTitleOpacity(opacity)
        } else {
          setTitleOpacity(1)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const goBack = () => {
    window.history.back()
  }

  return (
    <div className="bg-black text-white relative">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="flex items-center justify-between p-6 lg:px-12">
          <div className="flex items-center space-x-6">
            <Button
              onClick={goBack}
              variant="ghost"
              size="sm"
              className="text-white hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
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
          </div>

          <Button variant="ghost" size="sm" className="text-white hover:text-gray-300">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Fixed Model Name with Fade Effect - Now using wordmark images */}
      <div
        className="fixed top-24 left-0 right-0 z-30 text-center py-8 transition-opacity duration-300"
        style={{ opacity: titleOpacity }}
      >
        <img
          src={currentModel.wordmark || "/placeholder.svg"}
          alt={currentModel.name}
          className="h-16 md:h-24 lg:h-32 mx-auto filter invert"
          style={{
            textShadow: "0 4px 8px rgba(0,0,0,0.5)",
            filter: "invert(1) drop-shadow(0 4px 8px rgba(0,0,0,0.5))",
          }}
        />
      </div>

      {/* Hero Sections with Background Scrolling - Keep existing functionality but make transparent */}
      <div className="relative">
        {currentModel.images.map((image: string, index: number) => (
          <section
            key={index}
            className="h-screen relative overflow-hidden"
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="absolute inset-0 bg-black/20" />
          </section>
        ))}

        {/* Overlay Content - First Section (Two Images with Content Box) */}
        <section className="min-h-screen bg-transparent absolute top-[100vh] left-0 right-0 z-20 py-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[80vh] items-center">
            {/* Left Video Container */}
            <div className="h-96 lg:h-[500px] relative group">
              <video
                className="w-full h-full object-cover rounded-lg shadow-2xl"
                muted
                loop
                playsInline
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              >
                <source src="/videos/bugatti-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Video Overlay Indicator */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Image with Content Box */}
            <div className="relative h-96 lg:h-[500px]">
              <img
                src={currentModel.images[1] || "/placeholder.svg"}
                alt={currentModel.name}
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />

              {/* Small Content Box positioned in bottom right */}
              <div className="absolute bottom-8 right-8 p-6 w-48 h-32">
                <h4
                  className="text-sm font-bold mb-2 text-white"
                  style={{ fontFamily: 'Futura, "Futura Bold", Arial, sans-serif' }}
                >
                  CONTENT
                </h4>
                <p className="text-gray-300 text-xs leading-relaxed">Design excellence meets performance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Overlay Content - Second Section (Content Left + Image Center + Stacked Images Right) */}
        <section className="min-h-screen bg-transparent absolute top-[200vh] left-0 right-0 z-20 py-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 items-start min-h-[80vh]">
            {/* Content Area - Left Side */}
            <div className="lg:col-span-1">
              <h3
                className="text-xl font-bold mb-4 text-white"
                style={{ fontFamily: 'Futura, "Futura Bold", Arial, sans-serif' }}
              >
                CONTENT
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                Uncompromising power meets precision engineering. The {currentModel.name} delivers an extraordinary
                driving experience that redefines what's possible.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-2xl font-bold text-white">{currentModel.specs.horsepower}</p>
                  <p className="text-gray-400 text-xs">HORSEPOWER</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{currentModel.specs.maxSpeed}</p>
                  <p className="text-gray-400 text-xs">MAX SPEED</p>
                </div>
              </div>
            </div>

            {/* Main Image - Center */}
            <div className="lg:col-span-2 h-96 lg:h-[500px]">
              <img
                src={currentModel.images[2] || "/placeholder.svg"}
                alt={currentModel.name}
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>

            {/* Stacked Images - Right Side */}
            <div className="lg:col-span-1 space-y-4">
              <div className="h-44 lg:h-60">
                <img
                  src={currentModel.images[0] || "/placeholder.svg"}
                  alt={currentModel.name}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="h-44 lg:h-60">
                <img
                  src={currentModel.images[1] || "/placeholder.svg"}
                  alt={currentModel.name}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Feature Sections - Dark Premium Style */}
      {currentModel.features.map((feature: any, index: number) => (
        <section key={index} className="min-h-screen bg-black py-16 px-6 lg:px-12 relative z-20">
          <div className="max-w-7xl mx-auto">
            {/* Feature Header */}
            <div className="mb-16 lg:mb-24">
              <h2
                className="text-4xl lg:text-5xl font-bold mb-6"
                style={{ fontFamily: "Horizon, 'Arial Black', Arial, sans-serif" }}
              >
                {feature.title}
              </h2>
              <p className="text-gray-400 max-w-2xl leading-relaxed">{feature.description}</p>
            </div>

            {/* Feature Images - Alternating Layout */}
            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${index % 2 === 0 ? "" : "lg:grid-flow-dense"}`}>
              {/* Main Image */}
              <div className={`lg:col-span-2 ${index % 2 === 0 ? "" : "lg:col-start-2"}`}>
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={feature.images[0] || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Secondary Image */}
              <div className={`${index % 2 === 0 ? "" : "lg:col-start-1 lg:row-start-1"}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={feature.images[1] || "/placeholder.svg"}
                    alt={`${feature.title} detail`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Performance Section (Horizontal) */}
      <section id="performance-section" className="bg-black py-16 px-6 lg:px-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="border-r border-gray-800 pr-8">
              <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Max Speed</p>
              <p
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "Horizon, 'Arial Black', Arial, sans-serif" }}
              >
                {currentModel.specs.maxSpeed}
              </p>
            </div>

            <div className="border-r border-gray-800 pr-8">
              <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">0-100 km/h</p>
              <p
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "Horizon, 'Arial Black', Arial, sans-serif" }}
              >
                {currentModel.specs.acceleration}
              </p>
            </div>

            <div className="border-r border-gray-800 pr-8">
              <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Horsepower</p>
              <p
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "Horizon, 'Arial Black', Arial, sans-serif" }}
              >
                {currentModel.specs.horsepower}
              </p>
            </div>

            <div className="flex items-center justify-center">
              <Button variant="ghost" size="lg" className="text-white hover:text-cyan-400 transition-colors p-4">
                <Plus className="h-8 w-8" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className="text-4xl font-bold tracking-[0.2em] mb-6"
            style={{
              fontFamily: 'Futura, "Futura Bold", Arial, sans-serif',
              letterSpacing: "0.2em",
            }}
          >
            BUGATTI
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Experience the extraordinary. Configure your {currentModel.name} and discover what it means to own a piece
            of automotive history.
          </p>

          <div className="mt-8">
            <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:from-cyan-300 hover:to-blue-400 px-12 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Configure Your {currentModel.name}
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
