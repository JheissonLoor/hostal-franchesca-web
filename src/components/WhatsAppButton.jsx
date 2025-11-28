import React, { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  // Número de WhatsApp del Hostal Franchesca
  const whatsappNumber = '51993215661'
  const message = encodeURIComponent(
    'Hola, me gustaría reservar una habitación en Hostal Franchesca'
  )

  useEffect(() => {
    // Mostrar el botón después de un pequeño delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    // Mostrar tooltip después de 3 segundos
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true)
      // Ocultar tooltip después de 5 segundos
      setTimeout(() => setShowTooltip(false), 5000)
    }, 3000)

    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
    }
  }, [])

  const handleClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-4 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-2xl p-4 max-w-xs relative">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    ¿Necesitas ayuda?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Chatea con nosotros por WhatsApp. ¡Estamos aquí para ayudarte!
                  </p>
                </div>
              </div>
              {/* Arrow */}
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45"></div>
            </div>
          </div>
        )}

        {/* Button */}
        <button
          onClick={handleClick}
          className="group relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center animate-pulse hover:animate-none hover:scale-110"
          aria-label="Contactar por WhatsApp"
        >
          {/* Ripple effect */}
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>

          {/* Icon */}
          <MessageCircle className="w-8 h-8 text-white relative z-10" />

          {/* Badge notification */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </div>
    </>
  )
}

export default WhatsAppButton
