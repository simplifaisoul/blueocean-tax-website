import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Reviews = () => {
  const reviews = [
    {
      name: 'John Doe',
      role: 'CEO, Tech Startup',
      rating: 5,
      text: 'Blue Ocean goes beyond traditional accounting and tax services. They work one-on-one with you as a trusted financial and business partner. Highly recommended!'
    },
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      rating: 5,
      text: 'The team at Blue Ocean has been instrumental in helping us minimize our tax burden. Their expertise and personalized service make all the difference.'
    },
    {
      name: 'Michael Chen',
      role: 'Real Estate Professional',
      rating: 5,
      text: 'As a real estate professional, I needed specialized PREC services. Blue Ocean provided exactly what I needed with expert guidance and ongoing support.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Dental Practice Owner',
      rating: 5,
      text: 'The right expertise at the most reasonable pricing. Blue Ocean understands our industry and provides tailored solutions that work for our practice.'
    },
  ]

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-white to-gray-50">
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
            Reviews From <span className="text-ocean-600">Best Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our clients say about working with Blue Ocean Professional Corporation
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              <Quote className="w-12 h-12 text-ocean-200 absolute top-6 right-6" />
              
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{review.text}"
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 inline-block">
            <p className="text-lg text-gray-700 mb-4">
              Read more reviews on Google
            </p>
            <motion.a
              href="https://www.google.com/search?q=blue+ocean+tax+reviews"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-ocean-600 text-white rounded-lg font-semibold hover:bg-ocean-700 transition-colors"
            >
              <Star className="w-5 h-5 fill-white" />
              <span>View Google Reviews</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Reviews
