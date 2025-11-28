import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
      title: 'Recepción',
      category: 'Instalaciones',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070',
      title: 'Habitación Individual',
      category: 'Habitaciones',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070',
      title: 'Habitación Doble',
      category: 'Habitaciones',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070',
      title: 'Suite Familiar',
      category: 'Habitaciones',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070',
      title: 'Área Común',
      category: 'Instalaciones',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070',
      title: 'Comedor',
      category: 'Instalaciones',
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070',
      title: 'Baño Moderno',
      category: 'Habitaciones',
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1521783593447-5702b9bfd267?q=80&w=2070',
      title: 'Terraza',
      category: 'Instalaciones',
    },
  ]

  return (
    <section id="galeria" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-4">
            Nuestra Galería
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Descubre nuestras instalaciones y habitaciones. Cada espacio ha sido diseñado
            pensando en tu comodidad y bienestar.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              } ${index === 3 ? 'lg:col-span-2' : ''}`}
              onClick={() => setSelectedImage(image)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
            >
              <motion.div
                className={`w-full bg-cover bg-center ${
                  index === 0 ? 'h-96 sm:h-full' : 'h-64'
                }`}
                style={{ backgroundImage: `url(${image.url})` }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              ></motion.div>

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/50 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm font-medium text-primary-300 mb-1">
                    {image.category}
                  </p>
                  <h3 className="text-xl font-bold">{image.title}</h3>
                </motion.div>

                {/* Zoom icon */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-4"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <ZoomIn className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>

              {/* Border on hover */}
              <motion.div
                className="absolute inset-0 border-4 border-primary-500 rounded-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors p-2 bg-white/10 backdrop-blur-sm rounded-full"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-8 h-8" />
              </motion.button>

              <motion.div
                className="max-w-6xl w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg shadow-2xl"
                  layoutId={`image-${selectedImage.id}`}
                />
                <motion.div
                  className="text-center mt-6 text-white"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-primary-400 font-medium mb-2">
                    {selectedImage.category}
                  </p>
                  <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Gallery
