import React from 'react'
import { Heart, Shield, Clock, Coffee, Wifi, Sparkles } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Atención Personalizada',
      description: 'Cada huésped recibe un trato familiar y cercano, haciendo de tu estadía una experiencia única.',
    },
    {
      icon: Shield,
      title: 'Seguridad 24/7',
      description: 'Tu tranquilidad es nuestra prioridad. Contamos con vigilancia y sistemas de seguridad las 24 horas.',
    },
    {
      icon: Clock,
      title: 'Disponibilidad Total',
      description: 'Check-in flexible y atención continua. Estamos aquí para ayudarte en cualquier momento.',
    },
    {
      icon: Coffee,
      title: 'Desayuno Incluido',
      description: 'Comienza tu día con un delicioso desayuno casero incluido en tu estadía.',
    },
    {
      icon: Wifi,
      title: 'WiFi de Alta Velocidad',
      description: 'Mantente conectado con internet de alta velocidad en todas las áreas del hostal.',
    },
    {
      icon: Sparkles,
      title: 'Limpieza Impecable',
      description: 'Habitaciones y áreas comunes siempre limpias y desinfectadas para tu comodidad.',
    },
  ]

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Sobre <span className="text-gradient">Hostal Franchesca</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Más que un lugar para dormir, somos tu segundo hogar. Con años de experiencia
            brindando hospitalidad de calidad, nos enorgullece ser el refugio perfecto
            para viajeros que buscan comodidad, calidez y excelente servicio.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Nuestra Historia
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Fundado hace más de una década, el Hostal Franchesca nació del sueño de
              crear un espacio donde los viajeros pudieran sentirse como en casa. Lo que
              comenzó como una pequeña casa familiar, hoy es un hostal reconocido por
              su calidez humana y excelente servicio.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Cada rincón de nuestro hostal ha sido diseñado pensando en tu comodidad.
              Desde las habitaciones acogedoras hasta las áreas comunes, todo refleja
              nuestro compromiso con la calidad y la atención al detalle.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="h-1 w-20 bg-gradient-primary"></div>
              <p className="text-primary-600 font-semibold italic">
                "Tu comodidad es nuestra pasión"
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4 bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
                <Heart className="w-16 h-16 mx-auto text-primary-600" />
                <h4 className="text-2xl font-bold text-gray-900">
                  Más de 500 huéspedes satisfechos
                </h4>
                <p className="text-gray-600">
                  Cada año recibimos viajeros de todo el mundo que se convierten en parte de nuestra familia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-primary-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
