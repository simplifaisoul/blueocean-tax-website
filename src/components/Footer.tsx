import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Calendar } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Businesses', href: '#businesses' },
    { name: 'About Us', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Blog/Resources', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'Personal Tax Filing',
    'Small Business Tax',
    'GST/HST Services',
    'Payroll Service',
    'Business Insurance',
    'Cloud Accounting',
  ]

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-ocean-500 to-ocean-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BO</span>
              </div>
              <span className="text-xl font-bold">
                Blue Ocean <span className="text-ocean-400">Tax</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Blue Ocean Accounting & Tax Services offers complete 360-degree, 
              custom tailored range of personal and small business tax services.
            </p>
            <motion.button
              onClick={() => window.open('https://calendly.com/blueocean-tax', '_blank')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-ocean-600 hover:bg-ocean-700 rounded-lg transition-colors text-sm font-semibold"
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
            </motion.button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-ocean-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-ocean-400 transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-ocean-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  250 Dundas Street West, Unit #401<br />
                  Mississauga, ON L5B 1J2
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-ocean-400 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <a href="tel:4168287462" className="hover:text-ocean-400 transition-colors">
                    416 828 7462
                  </a>
                  <br />
                  <a href="tel:18339091234" className="hover:text-ocean-400 transition-colors">
                    1-833-909-1234
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-ocean-400 flex-shrink-0" />
                <a
                  href="mailto:info@blueocean.tax"
                  className="text-gray-400 hover:text-ocean-400 transition-colors text-sm"
                >
                  info@blueocean.tax
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              Copyright © {new Date().getFullYear()} Blueoceanpc. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-ocean-400 transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-ocean-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-ocean-400 transition-colors">
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
