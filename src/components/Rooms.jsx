import React from 'react'
import { motion } from 'framer-motion'
import { Users, Bed, Wifi, Coffee, Tv, Wind, Check, Star, Sparkles } from 'lucide-react'

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Habitación Simple',
      description: 'Perfecta para viajeros solitarios que buscan comodidad y privacidad.',
      price: 30,
      capacity: 1,
      beds: '1 Cama Individual',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070',
      amenities: ['WiFi Gratis', 'TV Cable', 'Baño Privado', 'Escritorio', 'Agua Caliente'],
      featured: false,
    },
    {
      id: 2,
      name: 'Habitación Doble',
      description: 'Ideal para parejas o amigos que viajan juntos. Espaciosa y confortable.',
      price: 40,
      capacity: 2,
      beds: '2 Camas Individuales',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070',
      amenities: ['WiFi Gratis', 'TV Cable', 'Baño Privado', 'Agua Caliente', 'Escritorio'],
      featured: true,
    },
    {
      id: 3,
      name: 'Habitación Matrimonial',
      description: 'Amplia y cómoda habitación ideal para parejas. Diseñada para tu máximo confort.',
      price: 50,
      capacity: 2,
      beds: '1 Cama Matrimonial',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070',
      amenities: ['WiFi Gratis', 'TV Cable', 'Baño Privado', 'Agua Caliente', 'Escritorio', 'Vista Panorámica'],
      featured: false,
    },
  ]

  const amenitiesIcons = [
    { icon: Wifi, title: 'WiFi Gratis', desc: 'En todas las habitaciones' },
    { icon: Coffee, title: 'Desayuno', desc: 'Incluido cada mañana' },
    { icon: Tv, title: 'TV Cable', desc: 'Canales premium' },
    { icon: Wind, title: 'Clima', desc: 'Aire acondicionado' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section id="habitaciones" className="py-20 bg-gradient-warm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-4">
            Nuestras Habitaciones
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Cada habitación está cuidadosamente diseñada para brindarte el máximo confort.
            Elige la que mejor se adapte a tus necesidades y disfruta de una estadía inolvidable.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              variants={cardVariants}
              className="relative group"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`card h-full flex flex-col ${
                  room.featured ? 'ring-2 ring-primary-400 ring-offset-4 ring-offset-accent-50' : ''
                }`}
              >
                {room.featured && (
                  <motion.div
                    className="absolute -top-3 right-6 bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl z-10 flex items-center gap-1.5"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  >
                    <Sparkles className="w-4 h-4" />
                    Más Popular
                  </motion.div>
                )}

                {/* Image */}
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  <motion.div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${room.image})` }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  ></motion.div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent"></div>

                  {/* Image info overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <motion.div
                      className="flex items-center justify-between text-white"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
                        <Users className="w-4 h-4" />
                        <span className="text-sm font-medium">Hasta {room.capacity} {room.capacity === 1 ? 'persona' : 'personas'}</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {room.name}
                    </h3>
                    <div className="flex items-center text-neutral-600 mb-3">
                      <Bed className="w-4 h-4 mr-2 text-primary-500" />
                      <span className="text-sm font-medium">{room.beds}</span>
                    </div>
                    <p className="text-neutral-600 leading-relaxed">
                      {room.description}
                    </p>
                  </div>

                  {/* Amenities */}
                  <div className="space-y-2 flex-1">
                    {room.amenities.map((amenity, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center text-sm text-neutral-700"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + idx * 0.05 }}
                      >
                        <Check className="w-4 h-4 text-secondary-600 mr-2 flex-shrink-0" />
                        <span>{amenity}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="pt-4 border-t border-accent-300">
                    <div className="flex items-end justify-between mb-4">
                      <div>
                        <p className="text-sm text-neutral-600">Desde</p>
                        <div className="flex items-baseline">
                          <span className="text-4xl font-bold text-primary-600">
                            S/ {room.price}
                          </span>
                          <span className="text-neutral-600 ml-2 font-medium">/noche</span>
                        </div>
                      </div>
                    </div>
                    <motion.button
                      className="w-full btn-primary"
                      onClick={() => scrollToSection('#contacto')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Reservar Ahora
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info - Amenities Grid */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {amenitiesIcons.map((amenity, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="text-center p-6 bg-white rounded-xl shadow-lg border border-accent-200 hover:shadow-2xl hover:border-primary-300 transition-all duration-300 group cursor-pointer"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <amenity.icon className="w-8 h-8 text-primary-600" />
              </motion.div>
              <h4 className="font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                {amenity.title}
              </h4>
              <p className="text-sm text-neutral-600">{amenity.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Rooms
