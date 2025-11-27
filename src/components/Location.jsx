import React from 'react'
import { MapPin, Navigation, Phone, Mail, Clock } from 'lucide-react'

const Location = () => {
  return (
    <section id="ubicacion" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Nuestra <span className="text-gradient">Ubicación</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Estamos ubicados en el corazón de la ciudad, con fácil acceso a las principales
            atracciones turísticas, transporte público y zonas comerciales.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] group">
              {/* Google Maps embed con ubicación de Sihuas, Áncash */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31483.5!2d-77.617!3d-8.567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzQnMDEuMiJTIDc3wrAzNycwMS4yIlc!5e0!3m2!1ses!2spe!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
                title="Ubicación Hostal Franchesca en Sihuas"
              ></iframe>

              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 bg-white rounded-xl shadow-lg p-4 group-hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Encuéntranos aquí</p>
                    <p className="font-bold text-gray-900">Hostal Franchesca</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <div className="mt-6">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=-8.567,-77.617"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full btn-primary"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Cómo Llegar
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="bg-gradient-to-br from-primary-50 to-green-50 rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Dirección</h4>
                  <p className="text-gray-700">
                    Jirón Antonio Raymondi s/n<br />
                    Sihuas, Áncash<br />
                    CP 02220
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                  <a
                    href="tel:+51993215661"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    +51 993 215 661
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    WhatsApp disponible
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a
                    href="mailto:info@hostalfranchesca.com"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    info@hostalfranchesca.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Horario de Atención</h4>
                  <div className="text-gray-700 space-y-1">
                    <p>Lunes - Domingo: 24 horas</p>
                    <p className="text-sm text-gray-600">Check-in: 14:00 hrs</p>
                    <p className="text-sm text-gray-600">Check-out: 12:00 hrs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border-2 border-primary-100 rounded-xl p-4 text-center hover:border-primary-300 transition-colors">
                <p className="text-sm text-gray-600 mb-1">A 5 min del</p>
                <p className="font-bold text-gray-900">Centro Histórico</p>
              </div>
              <div className="bg-white border-2 border-primary-100 rounded-xl p-4 text-center hover:border-primary-300 transition-colors">
                <p className="text-sm text-gray-600 mb-1">A 10 min del</p>
                <p className="font-bold text-gray-900">Aeropuerto</p>
              </div>
              <div className="bg-white border-2 border-primary-100 rounded-xl p-4 text-center hover:border-primary-300 transition-colors">
                <p className="text-sm text-gray-600 mb-1">A 2 min de</p>
                <p className="font-bold text-gray-900">Transporte Público</p>
              </div>
              <div className="bg-white border-2 border-primary-100 rounded-xl p-4 text-center hover:border-primary-300 transition-colors">
                <p className="text-sm text-gray-600 mb-1">Cerca de</p>
                <p className="font-bold text-gray-900">Restaurantes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
