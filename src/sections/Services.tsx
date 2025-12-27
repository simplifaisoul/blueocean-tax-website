import { motion } from 'framer-motion'
import { FileText, Calculator, Receipt, Building2, User, Shield, TrendingUp, Cloud } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'Personal Tax Filing',
      description: 'Expert personal tax services to maximize your deductions and minimize your tax burden.',
      features: ['Tax Return Preparation', 'Deductions & Credits', 'Tax Planning', 'CRA Representation']
    },
    {
      icon: Building2,
      title: 'Small Business Tax Filing',
      description: 'Comprehensive tax solutions tailored for small businesses to help you grow.',
      features: ['Business Tax Returns', 'GST/HST Services', 'Payroll Services', 'Tax Planning']
    },
    {
      icon: Calculator,
      title: 'Income Taxes',
      description: 'Strategic income tax planning and filing to optimize your financial position.',
      features: ['Tax Optimization', 'Year-round Planning', 'Compliance', 'Audit Support']
    },
    {
      icon: Receipt,
      title: 'GST/HST Services',
      description: 'Complete GST/HST registration, filing, and compliance services.',
      features: ['Registration', 'Regular Filing', 'Compliance', 'Refund Claims']
    },
    {
      icon: User,
      title: 'Personal Real Estate Corporation (PREC)',
      description: 'Specialized services for real estate professionals and PREC structures.',
      features: ['PREC Setup', 'Tax Optimization', 'Compliance', 'Ongoing Support']
    },
    {
      icon: Shield,
      title: 'Business Insurance',
      description: 'Protect your business with comprehensive insurance solutions.',
      features: ['Risk Assessment', 'Policy Selection', 'Claims Support', 'Annual Reviews']
    },
    {
      icon: TrendingUp,
      title: 'Starting A Business',
      description: 'Complete guidance from business registration to ongoing compliance.',
      features: ['Company Registration', 'NUANS Reports', 'CRA Registration', 'Business Setup']
    },
    {
      icon: Cloud,
      title: 'Cloud Accounting',
      description: 'Modern cloud-based accounting solutions to manage your business anywhere, anytime.',
      features: ['Real-time Access', 'Automated Processes', 'Integration', 'Secure Storage']
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
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
            Our <span className="text-ocean-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tax and accounting services designed to help you minimize taxes 
            and maximize your financial potential.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-ocean-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
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
          <div className="bg-gradient-to-r from-ocean-500 to-ocean-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-8 text-ocean-50">
              Let's discuss how we can help minimize your taxes and maximize your financial success.
            </p>
            <motion.button
              onClick={() => window.open('https://calendly.com/blueocean-tax', '_blank')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-ocean-600 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Book a Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
