import React from 'react'
import { motion } from 'framer-motion'
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="nosotros" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-4">
            Sobre Hostal Franchesca
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Más que un lugar para dormir, somos tu segundo hogar. Con años de experiencia
            brindando hospitalidad de calidad, nos enorgullece ser el refugio perfecto
            para viajeros que buscan comodidad, calidez y excelente servicio.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-neutral-900">
              Nuestra Historia
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Fundado hace más de una década, el Hostal Franchesca nació del sueño de
              crear un espacio donde los viajeros pudieran sentirse como en casa. Lo que
              comenzó como una pequeña casa familiar, hoy es un hostal reconocido por
              su calidez humana y excelente servicio.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Cada rincón de nuestro hostal ha sido diseñado pensando en tu comodidad.
              Desde las habitaciones acogedoras hasta las áreas comunes, todo refleja
              nuestro compromiso con la calidad y la atención al detalle.
            </p>
            <motion.div
              className="flex items-center space-x-4 pt-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="h-1 w-20 bg-gradient-primary rounded"></div>
              <p className="text-primary-600 font-bold italic text-lg">
                "Tu comodidad es nuestra pasión"
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl"
              whileHover={{ scale: 1.02, rotate: 2 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <div className="text-center space-y-4 bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-sm border border-accent-200">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-16 h-16 mx-auto text-primary-600" />
                </motion.div>
                <h4 className="text-2xl font-bold text-neutral-900">
                  Más de 500 huéspedes satisfechos
                </h4>
                <p className="text-neutral-600">
                  Cada año recibimos viajeros de todo el mundo que se convierten en parte de nuestra familia
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 bg-gradient-to-br from-accent-50 to-white rounded-2xl border border-accent-200 hover:border-primary-400 hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default About
