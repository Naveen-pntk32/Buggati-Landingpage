"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, ArrowLeft, Plus } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { useParams } from "next/navigation"
import FadeContent from "@/app/blocks/Animations/FadeContent/FadeContent"
import AnimatedContent from "@/app/blocks/Animations/AnimatedContent/AnimatedContent"
import { BlurFade } from "@/app/components/magicui/blur-fade"

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
      images: [
        "https://res.cloudinary.com/dhxlh70zi/video/upload/v1749488345/chiron-video_r0hccx.mp4",
        "/img/chiron/chiron-bg1.jpg",
        "/img/chiron/chiron-bg2.jpg"
      ],
      specs: {
        maxSpeed: "420 km/h",
        acceleration: "2.4s",
        horsepower: "1479 HP",
        torque: "1600 Nm",
        engineType: "W16"
      },
      sideViewImage: "/sideview-img/chiron.png",
      features: [
        {
          title: "One-Piece Taillight",
          description:
            "Created as one single unbroken piece, the striking taillight is the embodiment of 'Form Follows Performance', allowing light to be emitted and form beneath it, a seamless blending of style and innovation.",
          images: ["/img/chiron/chiron-2ndsec.jpg", "/img/chiron/chiron-frontview.jpg"],
        },
        {
          title: "Beauty Underneath",
          description:
            "Nothing is too beautiful. The pursuit of beauty begins beneath the design of Tourbillon's chassis — a stunning work of art, hidden from view, that's not only exquisitely formed but enormously strong.",
          images: ["/img/chiron/chiron-3rdsec.jpg", "/img/chiron/chiron-frontview.jpg"],
        },
      ],
    },
    mistral: {
      name: "MISTRAL",
      wordmark: "/png/mistral-wordmark.png",
      fullName: "BUGATTI W16 MISTRAL",
      images: [
        "https://res.cloudinary.com/dhxlh70zi/video/upload/v1749488345/chiron-video_r0hccx.mp4",
        "/img/mistral/mistral-bg1.jpg",
        "/img/mistral/mistral-bg2.jpg"
      ],
      specs: {
        maxSpeed: "420 km/h",
        acceleration: "2.4s",
        horsepower: "1577 HP",
        torque: "1600 Nm",
        engineType: "W16"
      },
      sideViewImage: "/sideview-img/mistral.png",
      features: [
        {
          title: "Iconic Silhouette",
          description:
            "The W16 Mistral redefines open-top motoring with its distinctive silhouette and uncompromising performance, a fitting tribute to Bugatti's legendary W16 engine.",
          images: ["/img/mistral/mistral-2ndsec.jpg", "/img/mistral/mistral-frontview.jpg"],
        },
        {
          title: "Engineering Excellence",
          description:
            "Every detail of the W16 Mistral has been meticulously crafted to deliver the ultimate driving experience, combining breathtaking speed with unparalleled luxury.",
          images: ["/img/mistral/mistral-3rd.jpg", "/img/mistral/mistral-frontview.jpg"],
        },
      ],
    },
    divo: {
      name: "DIVO",
      wordmark: "/png/divo-wordmark.png",
      fullName: "BUGATTI DIVO",
      images: [
        "https://res.cloudinary.com/dhxlh70zi/video/upload/v1749488345/chiron-video_r0hccx.mp4",
        "/img/divo/divo-bg1.jpg",
        "/img/divo/divo-bg2.jpg"
      ],
      specs: {
        maxSpeed: "380 km/h",
        acceleration: "2.4s",
        horsepower: "1500 HP",
        torque: "1600 Nm",
        engineType: "W16"
      },
      sideViewImage: "/sideview-img/divo.png",
      features: [
        {
          title: "Agile Masterpiece",
          description:
            "The Divo represents a new chapter in Bugatti's history, focusing on extreme agility and corner dynamics while maintaining the brand's signature luxury and exclusivity.",
          images: ["/img/divo/divo-2ndsec.jpg", "/img/divo/divo-frontview.jpg"],
        },
        {
          title: "Aerodynamic Perfection",
          description:
            "Every curve and surface of the Divo has been engineered to optimize airflow and downforce, resulting in a 90kg increase in downforce compared to the Chiron.",
          images: ["/img/divo/divo-3rdsec.jpg", "/img/divo/divo-frontview.jpg"],
        },
      ],
    },
    tourbillon: {
      name: "TOURBILLON",
      wordmark: "/png/tourbillon-wordmark.png",
      fullName: "BUGATTI TOURBILLON",
      images: [
        "https://res.cloudinary.com/dhxlh70zi/video/upload/v1749488345/chiron-video_r0hccx.mp4",
        "/img/tourbillion/Tourbillon-bg1.jpg",
        "/img/tourbillion/Tourbillon-bg2.jpg"
      ],
      specs: {
        maxSpeed: "440 km/h",
        acceleration: "2.3s",
        horsepower: "1600 HP",
        torque: "1700 Nm",
        engineType: "W16"
      },
      sideViewImage: "/sideview-img/tourbillion.png",
      features: [
        {
          title: "Revolutionary Design",
          description:
            "The Tourbillon represents Bugatti's vision for the future, combining cutting-edge technology with timeless elegance in a package that pushes the boundaries of automotive design.",
          images: ["/img/tourbillion/Tourbillon-2ndsec.jpg", "/img/tourbillion/Tourbillon-frontview.jpg"],
        },
        {
          title: "Unmatched Performance",
          description:
            "With its groundbreaking powertrain and advanced aerodynamics, the Tourbillon delivers performance figures that redefine what's possible in a production hypercar.",
          images: ["/img/tourbillion/Tourbillon-3rdsec.jpg", "/img/tourbillion/Tourbillon-frontview.jpg"],
        },
      ],
    },
    centodieci: {
      name: "CENTODIECI",
      wordmark: "/png/centodieci-wordmark.png",
      fullName: "BUGATTI CENTODIECI",
      images: [
        "https://res.cloudinary.com/dhxlh70zi/video/upload/v1749488345/chiron-video_r0hccx.mp4",
        "/img/centodecie/Centodieci-bg1.jpg",
        "/img/centodecie/Centodieci-bg2.jpg"
      ],
      specs: {
        maxSpeed: "380 km/h",
        acceleration: "2.4s",
        horsepower: "1600 HP",
        torque: "1600 Nm",
        engineType: "W16"
      },
      sideViewImage: "/sideview-img/centodecie.png",
      features: [
        {
          title: "Limited Edition Excellence",
          description:
            "The Centodieci represents the pinnacle of Bugatti's craftsmanship, with only 10 units ever produced, making it one of the most exclusive hypercars in the world.",
          images: ["/img/centodecie/Centodieci-2ndsec.jpg", "/img/centodecie/Centodieci-frontview.jpg"],
        },
        {
          title: "Heritage Reimagined",
          description:
            "Paying homage to the legendary EB110, the Centodieci combines modern engineering with classic design elements, creating a truly unique automotive masterpiece.",
          images: ["/img/centodecie/Centodieci-3rdsec.jpg", "/img/centodecie/Centodieci-frontview.jpg"],
        },
      ],
    },
    bolide: {
      name: "BOLIDE",
      wordmark: "/png/bolide-wordmark.png",
      fullName: "BUGATTI BOLIDE",
      images: [
        "https://res.cloudinary.com/dhxlh70zi/video/upload/v1749488345/chiron-video_r0hccx.mp4",
        "/img/bolide/bolide-bg1.jpg",
        "/img/bolide/bolide-bg2.jpg"
      ],
      specs: {
        maxSpeed: "500 km/h",
        acceleration: "2.17s",
        horsepower: "1825 HP",
        torque: "1850 Nm",
        engineType: "W16"
      },
      sideViewImage: "/sideview-img/sideview-bolide.png",
      features: [
        {
          title: "Track-Focused Beast",
          description:
            "The Bolide is Bugatti's most extreme creation, designed purely for track performance with uncompromising aerodynamics and lightweight construction.",
          images: ["/img/bolide/bolide-2ndsec.jpg", "/img/bolide/bolide-frontview.jpg"],
        },
        {
          title: "Ultimate Performance",
          description:
            "With its radical design and extreme power-to-weight ratio, the Bolide represents the absolute pinnacle of what's possible in automotive engineering.",
          images: ["/img/bolide/bolide-3rdsec.jpg", "/img/bolide/bolide-frontview.jpg"],
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
  <FadeContent duration={3000} threshold={0.1}>
    <video
      className="w-full h-full object-cover scale-[1.4] origin-center"
      muted
      loop
      playsInline
      autoPlay
    >
      <source
        src="https://res.cloudinary.com/dhxlh70zi/video/upload/v1749488345/chiron-video_r0hccx.mp4"
        type="video/mp4"
      />
    </video>
    <div className="absolute inset-0 bg-black/20" />
  </FadeContent>
</div>

            ) : (
              // Image Background for other sections with content
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundAttachment: "fixed",
                }}
              >
                <div className="absolute inset-0 bg-black/60" />
                {index === 1 && (
                  // Second section content - Image Left, Content Right
                  <div className="absolute inset-0 flex items-center px-6 lg:px-12">
                    <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12">
                      {/* Left Image Container */}
                      <div className="w-full lg:w-1/2">
                        <AnimatedContent
                          direction="horizontal"
                          distance={100}
                          duration={1}
                          ease="power3.out"
                          delay={0.5}
                        >
                          
                          
                            <Image
                              src={currentModel.features[0].images[0]}
                              alt={currentModel.features[0].title}
                              width={600}
                              height={400}
                              className="w-full h-[300px] md:h-[400px] object-cover"
                              style={{
                                filter: "drop-shadow(0 0 20px rgba(0,0,0,0.5))",
                              }}
                            />
                          
                        </AnimatedContent>
                      </div>
                      
                      {/* Right Content Container */}
                      <div className="w-full lg:w-1/2">
                        <AnimatedContent
                          direction="horizontal"
                          distance={100}
                          duration={1}
                          ease="power3.out"
                          delay={0.5}
                        >
                          <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            {currentModel.features[0].title}
                          </h2>
                          <p className="text-gray-200 text-lg leading-relaxed">
                            {currentModel.features[0].description}
                          </p>
                        </AnimatedContent>
                      </div>
                    </div>
                  </div>
                )}
                {index === 2 && (
                  // Third section content - Content Left, Image Right
                  <div className="absolute inset-0 flex items-center px-6 lg:px-12">
                    <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row-reverse items-center gap-12">
                      {/* Right Image Container */}
                      <div className="w-full lg:w-1/2">
                        <AnimatedContent
                          direction="horizontal"
                          distance={100}
                          duration={1}
                          ease="power3.out"
                          delay={0.2}
                        >
                          <BlurFade
                            direction="right"
                            duration={0.8}
                            delay={0.3}
                            blur="8px"
                          >
                            <Image
                              src={currentModel.features[1].images[0]}
                              alt={currentModel.features[1].title}
                              width={600}
                              height={400}
                              className="w-full h-[300px] md:h-[400px] object-cover"
                              style={{
                                filter: "drop-shadow(0 0 20px rgba(0,0,0,0.5))",
                              }}
                            />
                          </BlurFade>
                        </AnimatedContent>
                      </div>
                      
                      {/* Left Content Container */}
                      <div className="w-full lg:w-1/2">
                        <AnimatedContent
                          direction="horizontal"
                          distance={100}
                          duration={1}
                          ease="power3.out"
                          delay={0.4}
                        >
                          <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            {currentModel.features[1].title}
                          </h2>
                          <p className="text-gray-200 text-lg leading-relaxed">
                            {currentModel.features[1].description}
                          </p>
                        </AnimatedContent>
                      </div>
                    </div>
                  </div>
                )}
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
          <div className="side-view-container">
            <div 
              className={`image-wrapper transform transition-all duration-1000 ease-out
                  ${isImageVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
              <AnimatedContent
                direction="vertical"
                distance={100}
                duration={3}
                ease="power3.out"
                delay={0.2}
              >
                <BlurFade
                  direction="up"
                  duration={1.5}
                  delay={0.3}
                  blur="8px"
                >
                  <Image
                    src={currentModel.sideViewImage}
                    alt={`${currentModel.name} Side View`}
                    width={1200}
                    height={600}
                    className="select-none"
                    style={{
                      filter: "drop-shadow(0 0 20px rgba(0,0,0,0.5))",
                    }}
                    priority
                  />
                </BlurFade>
              </AnimatedContent>
            </div>
          </div>

          {/* Performance Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 text-center transform transition-all duration-1000 delay-500 ease-out
            ${isImageVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          >
            <div className="border-r border-gray-800 pr-8">
              <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Top Speed</p>
              <p
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                style={{ fontFamily: "Horizon, 'Arial Black', Arial, sans-serif" }}
              >
                {currentModel.specs.maxSpeed}
              </p>
            </div>

            <div className="border-r border-gray-800 pr-8">
              <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide flex items-center justify-center gap-1">
                <span style={{ fontFamily: "Horizon, sans-serif,arial" }}>0 -100</span>
                <span>KM/H</span>
              </p>
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

            <div className="border-r border-gray-800 pr-8">
              <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Engine Type</p>
              <p
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                style={{ fontFamily: "Horizon, 'Arial Black', Arial, sans-serif" }}
              >
                {currentModel.specs.engineType}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
