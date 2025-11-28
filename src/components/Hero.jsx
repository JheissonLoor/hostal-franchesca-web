import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Star, MapPin, Award, Users, Sparkles } from 'lucide-react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()

  // Efecto parallax
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background con gradiente mejorado y textura */}
      <motion.div
        className="absolute inset-0 bg-gradient-hero"
        style={{ y: y1 }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
      </motion.div>

      {/* Imagen de fondo con parallax */}
      <motion.div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070')] bg-cover bg-center"
        style={{
          y: y2,
          opacity: 0.15,
          scale: 1.1
        }}
      ></motion.div>

      {/* Formas decorativas con movimiento */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-accent-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-secondary-300/20 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 relative z-10"
        style={{ opacity }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-white space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge con animación */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-5 h-5 text-yellow-300 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-sm font-medium">Hospedaje de Calidad Premium</span>
            </motion.div>

            {/* Título principal con efecto de gradiente */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block mb-2">Tu Hogar</span>
                <span className="block bg-gradient-to-r from-white via-accent-100 to-white bg-clip-text text-transparent">
                  Lejos de Casa
                </span>
              </h1>
            </motion.div>

            {/* Subtítulo */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed max-w-xl"
            >
              Experimenta la <span className="font-semibold text-accent-200">comodidad</span> y{' '}
              <span className="font-semibold text-accent-200">calidez</span> de un verdadero hogar en{' '}
              <span className="font-bold text-white">Sihuas, Áncash</span>.
              <br />
              <span className="text-base md:text-lg text-white/80 mt-2 block">
                En el <span className="font-bold text-accent-100">Hostal Franchesca</span>,
                cada huésped es parte de nuestra familia.
              </span>
            </motion.p>

            {/* Botones CTA con animaciones */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={() => scrollToSection('#habitaciones')}
                className="group relative bg-white text-primary-600 hover:bg-accent-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-accent-200/50 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Ver Habitaciones
                  <Star className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-100 to-accent-200"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('#contacto')}
                className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Reservar Ahora
                  <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </motion.button>
            </motion.div>

            {/* Stats con animaciones individuales */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { icon: Users, value: "500+", label: "Huéspedes Felices", delay: 0 },
                { icon: Star, value: "4.9", label: "Calificación", delay: 0.1, fill: true },
                { icon: Award, value: "10+", label: "Años Experiencia", delay: 0.2 }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + stat.delay, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <stat.icon
                        className={`w-6 h-6 text-yellow-300 ${stat.fill ? 'fill-yellow-300' : ''}`}
                      />
                    </motion.div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Elemento decorativo lado derecho con animación */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="relative"
              style={{
                x: mousePosition.x,
                y: mousePosition.y
              }}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/30"
                animate={{ rotate: 6 }}
                whileHover={{ rotate: 3, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              ></motion.div>

              <motion.div
                className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-2xl"
                variants={floatingVariants}
                animate="animate"
              >
                <div className="aspect-square bg-gradient-to-br from-white/40 via-accent-200/30 to-secondary-400/30 rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="text-center space-y-4 p-8">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <MapPin className="w-16 h-16 mx-auto text-white drop-shadow-lg" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      Ubicación Privilegiada
                    </h3>
                    <p className="text-white/90 font-medium">
                      En el corazón de Sihuas
                    </p>
                    <div className="flex items-center justify-center gap-1 pt-2">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + i * 0.1 }}
                        >
                          <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator mejorado */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center cursor-pointer hover:border-white transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={() => scrollToSection('#nosotros')}
        >
          <motion.div
            className="w-1.5 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
