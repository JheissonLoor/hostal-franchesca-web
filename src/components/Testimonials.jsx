import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'María González',
      location: 'Madrid, España',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=1',
      text: 'Una experiencia increíble. El Hostal Franchesca superó todas mis expectativas. La atención es excepcional y las habitaciones son muy cómodas. Sin duda volveré en mi próxima visita.',
      date: 'Marzo 2024',
    },
    {
      id: 2,
      name: 'Carlos Ramírez',
      location: 'Buenos Aires, Argentina',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=13',
      text: 'Excelente lugar para hospedarse. La ubicación es perfecta y el personal te hace sentir como en casa. El desayuno casero es delicioso. 100% recomendado para cualquier viajero.',
      date: 'Febrero 2024',
    },
    {
      id: 3,
      name: 'Ana Martínez',
      location: 'Ciudad de México, México',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=5',
      text: 'Me encantó todo sobre este hostal. Desde el momento en que llegué me sentí bienvenida. Las instalaciones están impecables y la relación calidad-precio es insuperable.',
      date: 'Enero 2024',
    },
    {
      id: 4,
      name: 'Jorge Silva',
      location: 'Lima, Perú',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=12',
      text: 'Un lugar maravilloso para descansar. La habitación era muy limpia y cómoda. El WiFi funciona perfectamente y la ubicación es excelente. Definitivamente regresaré.',
      date: 'Diciembre 2023',
    },
    {
      id: 5,
      name: 'Laura Fernández',
      location: 'Barcelona, España',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=9',
      text: 'Fantástico hostal con un ambiente familiar único. Los dueños son muy amables y siempre dispuestos a ayudar. Las habitaciones son espaciosas y muy bien equipadas.',
      date: 'Noviembre 2023',
    },
    {
      id: 6,
      name: 'Roberto Castro',
      location: 'Bogotá, Colombia',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=14',
      text: 'La mejor experiencia de hospedaje que he tenido. Todo está pensado para tu comodidad. El desayuno incluido es excelente y la limpieza es impecable. Muy recomendable.',
      date: 'Octubre 2023',
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ]

  return (
    <section id="testimonios" className="py-20 bg-gradient-warm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-4">
            Lo Que Dicen Nuestros Huéspedes
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            La satisfacción de nuestros huéspedes es nuestra mayor recompensa.
            Lee lo que dicen quienes ya nos visitaron.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className={`bg-white rounded-2xl shadow-xl p-8 border border-accent-200 ${
                    index === 0 ? 'md:scale-105 md:z-10 ring-2 ring-primary-300' : 'md:scale-95 md:opacity-90'
                  }`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: index === 0 ? 1 : 0.9, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: index === 0 ? 1.07 : 1, opacity: 1 }}
                >
                  {/* Quote Icon */}
                  <motion.div
                    className="mb-6"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Quote className="w-10 h-10 text-primary-400" />
                  </motion.div>

                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i, type: "spring" }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-neutral-700 leading-relaxed mb-6 min-h-[120px]">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4 pt-6 border-t border-accent-200">
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-primary-200"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div>
                      <h4 className="font-bold text-neutral-900">{testimonial.name}</h4>
                      <p className="text-sm text-neutral-600">{testimonial.location}</p>
                      <p className="text-xs text-neutral-500 mt-1">{testimonial.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl border border-accent-200 transition-all duration-300 group"
              whileHover={{ scale: 1.1, backgroundColor: '#E07A5F' }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-primary-600 group-hover:text-white" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-10 bg-primary-600'
                      : 'w-2.5 bg-primary-300 hover:bg-primary-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                ></motion.button>
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl border border-accent-200 transition-all duration-300 group"
              whileHover={{ scale: 1.1, backgroundColor: '#E07A5F' }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-primary-600 group-hover:text-white" />
            </motion.button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { value: '500+', label: 'Huéspedes Satisfechos' },
            { value: '4.9', label: 'Calificación Promedio' },
            { value: '98%', label: 'Recomendaciones' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border border-accent-200 hover:shadow-2xl hover:border-primary-300 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="text-5xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-neutral-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
