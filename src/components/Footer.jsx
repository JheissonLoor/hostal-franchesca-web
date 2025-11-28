import React from 'react'
import { motion } from 'framer-motion'
import { Home, Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

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
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <footer className="bg-neutral-900 text-gray-300 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Home className="w-8 h-8 text-primary-500" />
              </motion.div>
              <span className="text-2xl font-bold text-white">
                Hostal Franchesca
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Tu hogar lejos de casa. Brindando hospitalidad de calidad y experiencias
              inolvidables desde hace más de 10 años.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: 'https://facebook.com' },
                { icon: Instagram, href: 'https://instagram.com' },
                { icon: Twitter, href: 'https://twitter.com' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold text-lg mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {[
                { name: 'Inicio', href: '#inicio' },
                { name: 'Nosotros', href: '#nosotros' },
                { name: 'Habitaciones', href: '#habitaciones' },
                { name: 'Galería', href: '#galeria' },
                { name: 'Testimonios', href: '#testimonios' },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-primary-400 transition-colors relative group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="absolute left-0 w-0 h-0.5 bg-primary-500 bottom-0 group-hover:w-full transition-all duration-300"></span>
                    {link.name}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold text-lg mb-6">Servicios</h3>
            <ul className="space-y-3">
              {[
                'WiFi Gratis',
                'Desayuno Incluido',
                'Atención 24/7',
                'Seguridad',
                'Limpieza Diaria',
                'Área Común'
              ].map((service, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ x: 5 }}
                >
                  <motion.span
                    className="w-1.5 h-1.5 bg-primary-500 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  ></motion.span>
                  <span>{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold text-lg mb-6">Contacto</h3>
            <ul className="space-y-4">
              <motion.li
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  Jirón Antonio Raymondi s/n<br />
                  Sihuas, Áncash<br />
                  CP 02220
                </span>
              </motion.li>
              <motion.li
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a
                  href="tel:+51993215661"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  +51 993 215 661
                </a>
              </motion.li>
              <motion.li
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a
                  href="mailto:jheisson_acuario96@hotmail.com"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  jheisson_acuario96@hotmail.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} Hostal Franchesca. Todos los derechos reservados.
            </p>
            <motion.p
              className="text-sm text-gray-400 flex items-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              Hecho con{' '}
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" />
              </motion.span>{' '}
              para nuestros huéspedes
            </motion.p>
            <div className="flex space-x-6 text-sm">
              {['Política de Privacidad', 'Términos de Uso'].map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="hover:text-primary-400 transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {link}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
