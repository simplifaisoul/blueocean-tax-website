import { motion } from 'framer-motion'
import { FileText, Calendar, ArrowRight } from 'lucide-react'

const Blog = () => {
  const blogPosts = [
    {
      title: 'Who Should File a Tax Return',
      excerpt: 'Understanding when you need to file a tax return and what your obligations are.',
      category: 'Personal Tax',
      date: '2025-01-15'
    },
    {
      title: 'Reporting Income: A Complete Guide',
      excerpt: 'Learn about different types of income and how to report them correctly on your tax return.',
      category: 'Tax Tips',
      date: '2025-01-10'
    },
    {
      title: 'Deductions, Credits, and Expenses Explained',
      excerpt: 'Maximize your tax savings by understanding available deductions and credits.',
      category: 'Tax Planning',
      date: '2025-01-05'
    },
    {
      title: 'COVID-19 Benefits and Your Taxes',
      excerpt: 'Important information about how COVID-19 benefits affect your tax situation.',
      category: 'Updates',
      date: '2024-12-28'
    },
    {
      title: 'Due Dates and Payment Dates for 2025',
      excerpt: 'Stay on top of important tax deadlines to avoid penalties and interest.',
      category: 'Important Dates',
      date: '2024-12-20'
    },
    {
      title: 'New for Personal Taxes in 2025',
      excerpt: 'Discover what\'s new in personal tax filing for the current tax year.',
      category: 'Updates',
      date: '2024-12-15'
    },
  ]

  return (
    <section id="blog" className="py-20 bg-white">
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
            Blog & <span className="text-ocean-600">Resources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest tax tips, updates, and resources to help you 
            make better financial decisions.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-ocean-100 text-ocean-700 rounded-full text-xs font-semibold">
                  {post.category}
                </span>
                <div className="flex items-center text-gray-400 text-xs">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
              
              <div className="w-12 h-12 bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-ocean-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-ocean-600 font-medium group-hover:translate-x-2 transition-transform">
                <span className="text-sm">Read More</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.article>
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
            <h3 className="text-3xl font-bold mb-4">Have Tax Questions?</h3>
            <p className="text-xl mb-8 text-ocean-50">
              Our experts are here to help. Schedule a consultation to get personalized advice.
            </p>
            <motion.button
              onClick={() => window.open('https://calendly.com/blueoceantax/one-to-one-meeting?embed_domain=blueocean.tax&embed_type=Inline&month=2025-12&date=2025-12-30', '_blank')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-ocean-600 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Book a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
