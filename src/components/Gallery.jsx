import React, { useState } from 'react'
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
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Nuestra <span className="text-gradient">Galería</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Descubre nuestras instalaciones y habitaciones. Cada espacio ha sido diseñado
            pensando en tu comodidad y bienestar.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              } ${index === 3 ? 'lg:col-span-2' : ''}`}
              onClick={() => setSelectedImage(image)}
            >
              <div
                className={`w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? 'h-96 sm:h-full' : 'h-64'
                }`}
                style={{ backgroundImage: `url(${image.url})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium text-primary-300 mb-1">
                    {image.category}
                  </p>
                  <h3 className="text-xl font-bold">{image.title}</h3>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <ZoomIn className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <div className="max-w-6xl w-full">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="text-center mt-6 text-white">
                <p className="text-primary-400 font-medium mb-2">
                  {selectedImage.category}
                </p>
                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
