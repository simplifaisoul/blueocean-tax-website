import { useState, useEffect } from 'react'
import { Menu, X, Calendar } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleBookAppointment = () => {
    window.open('https://calendly.com/blueoceantax/one-to-one-meeting?embed_domain=blueocean.tax&embed_type=Inline&month=2025-12&date=2025-12-30', '_blank')
    // Or you could scroll to a contact section
    // const contactSection = document.getElementById('contact')
    // if (contactSection) {
    //   contactSection.scrollIntoView({ behavior: 'smooth' })
    // }
  }

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Businesses', href: '#businesses' },
    { name: 'Blog/Resources', href: '#blog' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-ocean-500 to-ocean-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BO</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Blue Ocean <span className="text-ocean-600">Tax</span>
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-gray-700 hover:text-ocean-600 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ocean-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* Book Appointment CTA Button */}
            <motion.button
              onClick={handleBookAppointment}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-ocean-500 to-ocean-600 text-white rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group"
            >
              <Calendar size={18} className="group-hover:rotate-12 transition-transform" />
              <span>Book an Appointment</span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <motion.button
              onClick={handleBookAppointment}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-ocean-600 text-white rounded-lg font-semibold text-xs flex items-center space-x-1"
            >
              <Calendar size={16} />
              <span>Book</span>
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-ocean-600 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block text-base font-medium text-gray-700 hover:text-ocean-600 transition-colors py-2"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                onClick={handleBookAppointment}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-ocean-500 to-ocean-600 text-white rounded-lg font-semibold flex items-center justify-center space-x-2"
              >
                <Calendar size={20} />
                <span>Book an Appointment</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
