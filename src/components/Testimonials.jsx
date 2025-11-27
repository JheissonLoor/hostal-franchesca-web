import React, { useState, useEffect } from 'react'
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
    <section id="testimonios" className="py-20 bg-gradient-to-br from-primary-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Lo Que Dicen Nuestros <span className="text-gradient">Huéspedes</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            La satisfacción de nuestros huéspedes es nuestra mayor recompensa.
            Lee lo que dicen quienes ya nos visitaron.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-500 ${
                  index === 0 ? 'md:scale-105 md:z-10' : 'md:scale-95 md:opacity-75'
                }`}
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-primary-300" />
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 min-h-[120px]">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-primary-50 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-primary-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-primary-600'
                      : 'w-2 bg-primary-300 hover:bg-primary-400'
                  }`}
                ></button>
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-primary-50 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-primary-600" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-5xl font-bold text-gradient mb-2">500+</div>
            <div className="text-gray-600 font-medium">Huéspedes Satisfechos</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-5xl font-bold text-gradient mb-2">4.9</div>
            <div className="text-gray-600 font-medium">Calificación Promedio</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-5xl font-bold text-gradient mb-2">98%</div>
            <div className="text-gray-600 font-medium">Recomendaciones</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
