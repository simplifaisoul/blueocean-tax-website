import { motion } from 'framer-motion'
import { Calendar, ArrowRight, TrendingDown, Shield, Users } from 'lucide-react'

const Hero = () => {
  const handleBookAppointment = () => {
    window.open('https://calendly.com/blueoceantax/one-to-one-meeting?embed_domain=blueocean.tax&embed_type=Inline&month=2025-12&date=2025-12-30', '_blank')
  }

  const features = [
    { icon: TrendingDown, text: 'Minimize Tax Returns' },
    { icon: Shield, text: 'Expert CPA Team' },
    { icon: Users, text: 'Trusted Partner' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-ocean-50 via-white to-blue-50 pt-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-ocean-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Tax Services That{' '}
                <span className="text-ocean-600">Minimize Your Returns</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed"
            >
              Leaving you with as much as possible to invest in your business. 
              We go beyond traditional accounting to be your trusted financial partner.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-md border border-gray-100"
                >
                  <feature.icon className="w-5 h-5 text-ocean-600" />
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={handleBookAppointment}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-ocean-500 to-ocean-600 text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <Calendar size={24} className="group-hover:rotate-12 transition-transform" />
                <span>Book an Appointment</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-ocean-600 rounded-lg font-semibold text-lg border-2 border-ocean-600 hover:bg-ocean-50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Our Services</span>
                <ArrowRight size={20} />
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="pt-8 border-t border-gray-200"
            >
              <p className="text-sm text-gray-500 mb-3">Serving clients across</p>
              <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-700">
                <span>Toronto</span>
                <span>•</span>
                <span>Brampton</span>
                <span>•</span>
                <span>Mississauga</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual/Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-ocean-600 mb-2">360°</div>
                  <p className="text-gray-600">Complete Tax Services</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-ocean-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-ocean-600 mb-1">100%</div>
                    <p className="text-sm text-gray-600">Certified Team</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-ocean-600 mb-1">24/7</div>
                    <p className="text-sm text-gray-600">Support Available</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center mb-3">
                    "Blue Ocean goes beyond traditional accounting and tax services, 
                    working one-on-one with you as a trusted financial and business partner."
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-ocean-200 border-2 border-white"
                        ></div>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700">500+ Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
