import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header, Footer, Spinner } from './components'

const LandingPageWithMeteors = lazy(() => import('./HOC/MeteorBackgroundWrapper'))
const Episodes = lazy(() => import('./pages/Episodes'))
const Characters = lazy(() => import('./pages/Characters'))
const Planets = lazy(() => import('./pages/Planets'))
const Species = lazy(() => import('./pages/Species'))
const Vehicles = lazy(() => import('./pages/Vehicles'))
const Starships = lazy(() => import('./pages/Starships'))
const SinglePage = lazy(() => import('./pages/SinglePage'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Contacts = lazy(() => import('./pages/Contacts'))
const Help = lazy(() => import('./pages/Help'))

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <main className="flex-grow md:px-16 p-4 bg-custom-white">
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<LandingPageWithMeteors />} />
              <Route path="/contacts" element={<Episodes />} />
              <Route path="/contacts/:id" element={<SinglePage />} />
              <Route path="/skills" element={<Characters />} />
              <Route path="/skills/:id" element={<SinglePage />} />
              <Route path="/experience" element={<Planets />} />
              <Route path="/experience/:id" element={<SinglePage />} />
              <Route path="/education" element={<Species />} />
              <Route path="/education/:id" element={<SinglePage />} />
              <Route path="/private" element={<Vehicles />} />
              <Route path="/private/:id" element={<SinglePage />} />
              <Route path="/starships" element={<Starships />} />
              <Route path="/starships/:id" element={<SinglePage />} />
              <Route path="/help" element={<Help />} />
              <Route path="/write" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </div>
  )
}
