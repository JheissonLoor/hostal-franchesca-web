import React from 'react'
import { Users, Bed, Wifi, Coffee, Tv, Wind, Check } from 'lucide-react'

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Habitación Individual',
      description: 'Perfecta para viajeros solitarios que buscan comodidad y privacidad.',
      price: 35,
      capacity: 1,
      beds: '1 Cama Individual',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070',
      amenities: ['WiFi Gratis', 'TV Cable', 'Baño Privado', 'Escritorio', 'Aire Acondicionado'],
      featured: false,
    },
    {
      id: 2,
      name: 'Habitación Doble',
      description: 'Ideal para parejas o amigos que viajan juntos. Espaciosa y confortable.',
      price: 50,
      capacity: 2,
      beds: '1 Cama Matrimonial',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070',
      amenities: ['WiFi Gratis', 'TV Cable', 'Baño Privado', 'Mini Nevera', 'Aire Acondicionado', 'Balcón'],
      featured: true,
    },
    {
      id: 3,
      name: 'Habitación Familiar',
      description: 'Amplia habitación para familias. Diseñada para máximo confort de todos.',
      price: 75,
      capacity: 4,
      beds: '1 Cama Matrimonial + 2 Individuales',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070',
      amenities: ['WiFi Gratis', 'TV Cable', 'Baño Privado', 'Mini Nevera', 'Aire Acondicionado', 'Sala de Estar'],
      featured: false,
    },
  ]

  return (
    <section id="habitaciones" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Nuestras <span className="text-gradient">Habitaciones</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Cada habitación está cuidadosamente diseñada para brindarte el máximo confort.
            Elige la que mejor se adapte a tus necesidades y disfruta de una estadía inolvidable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`card group ${
                room.featured ? 'ring-2 ring-primary-500 ring-offset-4' : ''
              }`}
            >
              {room.featured && (
                <div className="absolute top-4 right-4 bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg z-10">
                  Más Popular
                </div>
              )}

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${room.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5" />
                      <span className="text-sm font-medium">Hasta {room.capacity} personas</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {room.name}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Bed className="w-4 h-4 mr-2" />
                    <span className="text-sm">{room.beds}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {room.description}
                  </p>
                </div>

                {/* Amenities */}
                <div className="space-y-2">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <Check className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Desde</p>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-primary-600">
                          ${room.price}
                        </span>
                        <span className="text-gray-600 ml-2">/noche</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full btn-primary">
                    Reservar Ahora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Wifi className="w-10 h-10 mx-auto text-primary-600 mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">WiFi Gratis</h4>
            <p className="text-sm text-gray-600">En todas las habitaciones</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Coffee className="w-10 h-10 mx-auto text-primary-600 mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Desayuno</h4>
            <p className="text-sm text-gray-600">Incluido cada mañana</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Tv className="w-10 h-10 mx-auto text-primary-600 mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">TV Cable</h4>
            <p className="text-sm text-gray-600">Canales premium</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Wind className="w-10 h-10 mx-auto text-primary-600 mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Clima</h4>
            <p className="text-sm text-gray-600">Aire acondicionado</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rooms
