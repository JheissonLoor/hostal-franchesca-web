import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Send, User, Mail, Phone, Calendar, Users, MessageSquare, CheckCircle, Bed, AlertCircle } from 'lucide-react'

const Contact = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roomType: 'simple',
    checkIn: '',
    checkOut: '',
    guests: '1',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // IMPORTANTE: Configura tus credenciales de EmailJS
      // 1. Crea una cuenta en https://www.emailjs.com/
      // 2. Crea un servicio de email (ej: Gmail, Outlook)
      // 3. Crea una plantilla de email
      // 4. Obtén tu Public Key, Service ID y Template ID
      // 5. Reemplaza los valores a continuación

      const templateParams = {
        to_email: 'jheisson_acuario96@hotmail.com', // Email del hostal
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        room_type: formData.roomType === 'simple' ? 'Habitación Simple' :
                   formData.roomType === 'doble' ? 'Habitación Doble' : 'Habitación Matrimonial',
        check_in: formData.checkIn,
        check_out: formData.checkOut,
        guests: formData.guests,
        message: formData.message || 'Sin mensaje adicional',
        reply_to: formData.email,
      }

      // CONFIGURACIÓN DE EMAILJS
      // Reemplaza estos valores con los tuyos de https://www.emailjs.com/
      const serviceId = 'YOUR_SERVICE_ID'     // ej: 'service_abc123'
      const templateId = 'YOUR_TEMPLATE_ID'   // ej: 'template_xyz789'
      const publicKey = 'YOUR_PUBLIC_KEY'     // ej: 'user_abcdef123456'

      // Enviar email usando EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      // Si todo sale bien, mostrar mensaje de éxito
      setIsSubmitted(true)
      setIsSubmitting(false)

      // Reset form después de 5 segundos
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          roomType: 'simple',
          checkIn: '',
          checkOut: '',
          guests: '1',
          message: '',
        })
      }, 5000)

    } catch (err) {
      console.error('Error al enviar el formulario:', err)
      setError('Hubo un error al enviar tu solicitud. Por favor, intenta nuevamente o contáctanos directamente.')
      setIsSubmitting(false)

      // Limpiar error después de 5 segundos
      setTimeout(() => setError(''), 5000)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="contacto" className="py-20 bg-gradient-warm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-4">
            Reserva Tu Habitación
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            ¿Listo para vivir una experiencia única? Completa el formulario y nos pondremos
            en contacto contigo lo antes posible para confirmar tu reserva.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info Sidebar */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={itemVariants}
                className="bg-gradient-primary text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <CheckCircle className="w-7 h-7" />
                  ¿Por Qué Elegirnos?
                </h3>
                <div className="space-y-4">
                  {[
                    { title: 'Mejor Precio Garantizado', desc: 'Reserva directamente y obtén las mejores tarifas' },
                    { title: 'Cancelación Flexible', desc: 'Cancela hasta 24 horas antes sin costo' },
                    { title: 'Atención 24/7', desc: 'Estamos disponibles en cualquier momento' },
                    { title: 'Desayuno Incluido', desc: 'Comienza tu día con un delicioso desayuno' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-white/80 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-lg border border-accent-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary-500" />
                  Contacto Directo
                </h4>
                <div className="space-y-3 text-sm">
                  <motion.div
                    className="flex items-center space-x-3 text-neutral-700"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Phone className="w-5 h-5 text-primary-600" />
                    <a
                      href="tel:+51993215661"
                      className="hover:text-primary-600 transition-colors font-medium"
                    >
                      +51 993 215 661
                    </a>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-3 text-neutral-700"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="w-5 h-5 text-primary-600" />
                    <a
                      href="mailto:jheisson_acuario96@hotmail.com"
                      className="hover:text-primary-600 transition-colors font-medium"
                    >
                      jheisson_acuario96@hotmail.com
                    </a>
                  </motion.div>
                </div>
              </motion.div>

              {/* Nota de EmailJS */}
              <motion.div
                variants={itemVariants}
                className="bg-accent-100 border border-accent-300 rounded-xl p-4"
              >
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-neutral-700">
                    <p className="font-semibold mb-1">Configuración EmailJS</p>
                    <p>Para activar el envío automático de correos, configura tus credenciales de EmailJS en Contact.jsx (líneas 52-54).</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-accent-200"
              >
                {isSubmitted ? (
                  <motion.div
                    className="py-12 text-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                    >
                      <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-neutral-900 mb-2">
                      ¡Solicitud Enviada!
                    </h3>
                    <p className="text-neutral-600 text-lg">
                      Hemos recibido tu solicitud de reserva.
                    </p>
                    <p className="text-neutral-500 mt-2">
                      Nos pondremos en contacto contigo pronto para confirmar tu reserva.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {/* Error message */}
                    {error && (
                      <motion.div
                        className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-700">{error}</p>
                      </motion.div>
                    )}

                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Nombre Completo *
                      </label>
                      <div className="relative group">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-primary-500 transition-colors" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all hover:border-primary-300"
                          placeholder="Tu nombre completo"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          Email *
                        </label>
                        <div className="relative group">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-primary-500 transition-colors" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all hover:border-primary-300"
                            placeholder="tu@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          Teléfono *
                        </label>
                        <div className="relative group">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-primary-500 transition-colors" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all hover:border-primary-300"
                            placeholder="+51 999 999 999"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Room Type */}
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Tipo de Habitación *
                      </label>
                      <div className="relative group">
                        <Bed className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-primary-500 transition-colors" />
                        <select
                          name="roomType"
                          value={formData.roomType}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none hover:border-primary-300"
                        >
                          <option value="simple">Habitación Simple - S/ 30/noche</option>
                          <option value="doble">Habitación Doble - S/ 40/noche</option>
                          <option value="matrimonial">Habitación Matrimonial - S/ 50/noche</option>
                        </select>
                      </div>
                    </div>

                    {/* Check-in & Check-out */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          Fecha de Entrada *
                        </label>
                        <div className="relative group">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-primary-500 transition-colors" />
                          <input
                            type="date"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleChange}
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all hover:border-primary-300"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          Fecha de Salida *
                        </label>
                        <div className="relative group">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-primary-500 transition-colors" />
                          <input
                            type="date"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleChange}
                            required
                            min={formData.checkIn || new Date().toISOString().split('T')[0]}
                            className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all hover:border-primary-300"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Guests */}
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Número de Huéspedes *
                      </label>
                      <div className="relative group">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-primary-500 transition-colors" />
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none hover:border-primary-300"
                        >
                          <option value="1">1 Huésped</option>
                          <option value="2">2 Huéspedes</option>
                          <option value="3">3 Huéspedes</option>
                          <option value="4">4 Huéspedes</option>
                          <option value="5+">5+ Huéspedes</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Mensaje o Solicitudes Especiales
                      </label>
                      <div className="relative group">
                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-neutral-400 group-focus-within:text-primary-500 transition-colors" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none hover:border-primary-300"
                          placeholder="¿Tienes alguna solicitud especial? Cuéntanos..."
                        ></textarea>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Enviar Solicitud de Reserva
                        </>
                      )}
                    </motion.button>

                    <p className="text-xs text-neutral-500 text-center">
                      Al enviar este formulario, aceptas nuestros términos y condiciones.
                      Te contactaremos dentro de las próximas 24 horas.
                    </p>
                  </>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
