import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import LenisScrollProvider from './providers/LenisScrollProvider';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';

function App() {
  return (
      <ThemeProvider attribute="data-mode" defaultTheme="light" enableSystem={false} storageKey="portfolio-theme">
        <LenisScrollProvider>
        <BrowserRouter>
          <div className="p-6 sm:p-8 lg:p-10 flex justify-center min-h-dvh w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project" element={<Project />} />
            </Routes>
          </div>
          <Toaster
            position="bottom-right"
            reverseOrder={false}
          />
        </BrowserRouter>
        </LenisScrollProvider>
      </ThemeProvider>
  )
}

export default App
