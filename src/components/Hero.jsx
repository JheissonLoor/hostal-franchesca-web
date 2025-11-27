import React from 'react'
import { Star, MapPin, Award, Users } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-orange-500 opacity-95"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
              <span className="text-sm font-medium">Hospedaje de Calidad</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Tu Hogar Lejos de Casa
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Experimenta la comodidad y calidez de un verdadero hogar en el
              <span className="font-semibold"> Hostal Franchesca</span>.
              Donde cada huésped es parte de nuestra familia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('#habitaciones')}
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
              >
                Ver Habitaciones
              </button>
              <button
                onClick={() => scrollToSection('#contacto')}
                className="btn-secondary border-white text-white hover:bg-white/10"
              >
                Contactar Ahora
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-yellow-300" />
                </div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-white/80">Huéspedes Felices</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                </div>
                <div className="text-3xl font-bold">4.9</div>
                <div className="text-sm text-white/80">Calificación</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-yellow-300" />
                </div>
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm text-white/80">Años Experiencia</div>
              </div>
            </div>
          </div>

          {/* Image placeholder / decorative element */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white/20 backdrop-blur-lg rounded-3xl p-8 border border-white/30">
                <div className="aspect-square bg-gradient-to-br from-white/40 to-white/10 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MapPin className="w-16 h-16 mx-auto text-white" />
                    <h3 className="text-2xl font-bold text-white">Ubicación Privilegiada</h3>
                    <p className="text-white/90">En el corazón de la ciudad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
