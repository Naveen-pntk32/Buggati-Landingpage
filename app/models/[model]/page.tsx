"use client"

import { Button } from "@/components/ui/button"
import { Menu, ArrowLeft, Plus } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { useParams } from "next/navigation"

export default function ModelPage() {
  const params = useParams()
  const modelName = params.model as string
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [titleOpacity, setTitleOpacity] = useState(1)
  const [isImageVisible, setIsImageVisible] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const performanceRef = useRef<HTMLDivElement>(null)

  // Model data with multiple images and specifications
  const modelData: Record<string, any> = {
    chiron: {
      name: "CHIRON",
      wordmark: "/png/chiron-wordmark.png",
      fullName: "BUGATTI CHIRON SPORT",
      images: ["/img/bugatti-chiron.jpg", "/img/bugatti-hero.jpg", "/img/bugatti-tourbillon.jpg"],
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
          images: ["/img/bugatti-chiron.jpg", "/img/bugatti-hero.jpg"],
        },
        {
          title: "Beauty Underneath",
          description:
            "Nothing is too beautiful. The pursuit of beauty begins beneath the design of Tourbillon's chassis — a stunning work of art, hidden from view, that's not only exquisitely formed but enormously strong.",
          images: ["/img/bugatti-tourbillon.jpg", "/img/bugatti-divo.jpg"],
        },
      ],
    },
    mistral: {
      name: "MISTRAL",
      wordmark: "/png/mistral-wordmark.png",
      fullName: "BUGATTI W16 MISTRAL",
      images: ["/img/bugatti-mistral.jpg", "/img/bugatti-chiron.jpg", "/img/bugatti-divo.jpg"],
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
          images: ["/img/bugatti-mistral.jpg", "/img/bugatti-chiron.jpg"],
        },
        {
          title: "Engineering Excellence",
          description:
            "Every detail of the W16 Mistral has been meticulously crafted to deliver the ultimate driving experience, combining breathtaking speed with unparalleled luxury.",
          images: ["/img/bugatti-divo.jpg", "/img/bugatti-hero.jpg"],
        },
      ],
    },
    divo: {
      name: "DIVO",
      wordmark: "/png/divo-wordmark.png",
      fullName: "BUGATTI DIVO",
      images: ["/img/bugatti-divo.jpg", "/img/bugatti-tourbillon.jpg", "/img/bugatti-mistral.jpg"],
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
          images: ["/img/bugatti-divo.jpg", "/img/bugatti-tourbillon.jpg"],
        },
        {
          title: "Aerodynamic Perfection",
          description:
            "Every curve and surface of the Divo has been engineered to optimize airflow and downforce, resulting in a 90kg increase in downforce compared to the Chiron.",
          images: ["/img/bugatti-mistral.jpg", "/img/bugatti-hero.jpg"],
        },
      ],
    },
    tourbillon: {
      name: "TOURBILLON",
      wordmark: "/png/tourbillon-wordmark.png",
      fullName: "BUGATTI TOURBILLON",
      images: ["/img/bugatti-tourbillon.jpg", "/img/bugatti-divo.jpg", "/img/bugatti-chiron.jpg"],
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
          images: ["/img/bugatti-tourbillon.jpg", "/img/bugatti-divo.jpg"],
        },
        {
          title: "Unmatched Performance",
          description:
            "With its groundbreaking powertrain and advanced aerodynamics, the Tourbillon delivers performance figures that redefine what's possible in a production hypercar.",
          images: ["/img/bugatti-chiron.jpg", "/img/bugatti-hero.jpg"],
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
        const distanceToPerformance = performanceTop - scrollPosition - 300 // Adjust for fixed title position

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsImageVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (performanceRef.current) {
      observer.observe(performanceRef.current)
    }

    return () => observer.disconnect()
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
          className="h-4 md:h-6 lg:h-10 w-auto mx-auto filter invert"
          style={{
            textShadow: "0 4px 8px rgba(0,0,0,0.5)",
            filter: "invert(1) drop-shadow(0 4px 8px rgba(0,0,0,0.5))",
          }}
        />
      </div>

      {/* Hero Sections with Background Scrolling */}
      <div className="relative">
        {currentModel.images.map((image: string, index: number) => (
          <section
            key={index}
            className="h-screen relative overflow-hidden"
          >
            {index === 0 ? (
              // Video Background for first section
              <div className="absolute inset-0">
                <video
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                >
                  <source src="/videos/bugatti-demo.webm" type="video/webm" />
                </video>
                <div className="absolute inset-0 bg-black/20" />
              </div>
            ) : (
              // Image Background for other sections
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundAttachment: "fixed",
                }}
              >
                <div className="absolute inset-0 bg-black/20" />
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Performance Section (Horizontal) */}
      <section 
        id="performance-section" 
        className="bg-gradient-to-b from-black via-gray-900 to-black py-16 px-6 lg:px-12 border-t border-gray-800"
        ref={performanceRef}
      >
        <div className="max-w-7xl mx-auto">
          {/* Side View Image Container */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-16 overflow-hidden">
            <div 
              className={`absolute inset-0 flex items-center justify-center transform transition-all duration-1000 ease-out
                ${isImageVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
              <img
                src="/sideview-img/sideview-bolide.png"
                alt={`${currentModel.name} Side View`}
                className="w-full h-full object-contain"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(0,0,0,0.5))",
                }}
              />
            </div>
          </div>

          {/* Performance Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 text-center transform transition-all duration-1000 delay-500 ease-out
            ${isImageVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          >
            <div className="border-r border-gray-800 pr-8">
              <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Max Speed</p>
              <p
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                style={{ fontFamily: "Horizon, 'Arial Black', Arial, sans-serif" }}
              >
                {currentModel.specs.maxSpeed}
              </p>
            </div>

            <div className="border-r border-gray-800 pr-8">
              <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">0-100 km/h</p>
              <p
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                style={{ fontFamily: "Horizon, 'Arial Black', Arial, sans-serif" }}
              >
                {currentModel.specs.acceleration}
              </p>
            </div>

            <div className="border-r border-gray-800 pr-8">
              <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Horsepower</p>
              <p
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
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
