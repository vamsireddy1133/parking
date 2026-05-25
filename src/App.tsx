import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PageLoader from './components/ui/PageLoader'
import PageTransition from './components/ui/PageTransition'
import ScrollProgress from './components/ui/ScrollProgress'
import WhatsAppButton from './components/ui/WhatsAppButton'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Projects from './pages/Projects'
import ClientDetail from './pages/ClientDetail'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"         element={<PageTransition><Home /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/about"    element={<PageTransition><About /></PageTransition>} />
        <Route path="/clients"     element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/clients/:id" element={<PageTransition><ClientDetail /></PageTransition>} />
        <Route path="/careers"  element={<PageTransition><Careers /></PageTransition>} />
        <Route path="/contact"  element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(t)
  }, [])

  return (
    <BrowserRouter>
      <AnimatePresence>
        {loading && <PageLoader key="loader" />}
      </AnimatePresence>
      {!loading && <Layout />}
    </BrowserRouter>
  )
}
