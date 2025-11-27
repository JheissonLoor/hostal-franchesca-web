import React from 'react'
import { Home, Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Home className="w-8 h-8 text-primary-500" />
              <span className="text-2xl font-bold text-white">
                Hostal Franchesca
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Tu hogar lejos de casa. Brindando hospitalidad de calidad y experiencias
              inolvidables desde hace más de 10 años.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {[
                { name: 'Inicio', href: '#inicio' },
                { name: 'Nosotros', href: '#nosotros' },
                { name: 'Habitaciones', href: '#habitaciones' },
                { name: 'Galería', href: '#galeria' },
                { name: 'Testimonios', href: '#testimonios' },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                <span>WiFi Gratis</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                <span>Desayuno Incluido</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                <span>Atención 24/7</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                <span>Seguridad</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                <span>Limpieza Diaria</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                <span>Área Común</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  Calle Principal #123<br />
                  Centro de la Ciudad<br />
                  CP 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a
                  href="tel:+123456789"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a
                  href="mailto:info@hostalfranchesca.com"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  info@hostalfranchesca.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} Hostal Franchesca. Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-400 flex items-center">
              Hecho con <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" /> para nuestros huéspedes
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-primary-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
