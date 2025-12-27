import { motion } from 'framer-motion'
import { Award, Users, Target, CheckCircle2 } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Knowledge and Experience',
      description: 'Our fully certified Blue Ocean team has been hand-picked for their wealth of experience and knowledge of Canadian tax laws, for both business and individuals.'
    },
    {
      icon: Users,
      title: 'Trusted Partnership',
      description: 'We go beyond traditional accounting and tax services, working one-on-one with you as more than an accounting service, but as a trusted financial and business partner.'
    },
    {
      icon: Target,
      title: 'Business Growth Focus',
      description: 'Our Business Consultants understand business, not just accounting. We actively help you grow your business.'
    },
    {
      icon: CheckCircle2,
      title: '360° Services',
      description: 'Complete 360-degree, custom tailored range of personal and small business tax services designed specifically for your needs.'
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Welcome To <span className="text-ocean-600">Blue Ocean Professional Corporation</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Blue Ocean Accounting & Tax Services offers our clients a complete 360-degree, 
              custom tailored range of personal and small business tax services.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Our clients all agree, Blue Ocean goes beyond traditional accounting and tax services, 
              and works one-on-one with you as more than an accounting and tax service, but as a 
              trusted financial and business partner.
            </p>

            <div className="pt-6">
              <motion.button
                onClick={() => window.open('https://calendly.com/blueocean-tax', '_blank')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-ocean-500 to-ocean-600 text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Discover More About Us
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-ocean-50 to-blue-50 rounded-xl p-6 border border-ocean-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
