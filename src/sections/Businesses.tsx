import { motion } from 'framer-motion'
import { Stethoscope, Truck, Briefcase, Store, Home, DollarSign, UtensilsCrossed, Scale, Building } from 'lucide-react'

const Businesses = () => {
  const industries = [
    {
      icon: Stethoscope,
      title: 'Dental Office',
      description: 'Specialized accounting services for dental practices. Get the right expertise at the most reasonable pricing.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Truck,
      title: 'Trucking',
      description: 'We understand that your company may already have a strong internal accounting team. We complement your existing operations.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Briefcase,
      title: 'Consultants',
      description: 'Profound understanding of the unique requirements of family businesses and the issues that come up frequently.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Store,
      title: 'Franchises',
      description: 'Accountants help those that have assets to protect. The more assets you have, the more imperative protective systems become.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Proper bookkeeping and accounting systems ensure that real estate businesses use financial resources effectively.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: DollarSign,
      title: 'Mortgage Broker',
      description: 'Our services give you and your business the confidence to operate knowing that your accounting is handled professionally.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: UtensilsCrossed,
      title: 'Restaurants',
      description: 'Accountants help those that have assets to protect. The more assets people and companies have, the more imperative protective systems are.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Scale,
      title: 'Law Offices',
      description: 'Proper bookkeeping and accounting systems ensure that law practices use financial resources according to their mission.',
      color: 'from-gray-500 to-gray-600'
    },
    {
      icon: Building,
      title: 'Medical Clinics',
      description: 'Our services give you and your medical practice the confidence to operate knowing that your accounting is in expert hands.',
      color: 'from-teal-500 to-teal-600'
    },
  ]

  return (
    <section id="businesses" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services for <span className="text-ocean-600">Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-specific accounting and tax services tailored to your business needs. 
            We understand the unique challenges of your industry.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <industry.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.title}</h3>
              <p className="text-gray-600 leading-relaxed">{industry.description}</p>
              
              <div className="mt-4 flex items-center text-ocean-600 font-medium group-hover:translate-x-2 transition-transform">
                <span className="text-sm">Learn More</span>
                <span className="ml-2">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-white border-2 border-ocean-200 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Don't See Your Industry Listed?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              We serve businesses across all industries. Contact us to discuss your specific needs.
            </p>
            <motion.button
              onClick={() => window.open('https://calendly.com/blueocean-tax', '_blank')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-ocean-500 to-ocean-600 text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Businesses
