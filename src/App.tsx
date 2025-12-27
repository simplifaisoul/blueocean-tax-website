import { lazy, Suspense } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'

const Hero = lazy(() => import('./sections/Hero'))
const Services = lazy(() => import('./sections/Services'))
const Businesses = lazy(() => import('./sections/Businesses'))
const About = lazy(() => import('./sections/About'))
const Reviews = lazy(() => import('./sections/Reviews'))
const Blog = lazy(() => import('./sections/Blog'))

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navigation />
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
        <Services />
        <Businesses />
        <About />
        <Reviews />
        <Blog />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
