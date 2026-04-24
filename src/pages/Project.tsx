import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Project() {
  return (
    <div className="grid w-full max-w-5xl grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="animate-fadeUp flex flex-col items-center w-full gap-[5rem] my-[5rem] lg:gap-[10rem] lg:my-[8rem]">
        <div className="flex flex-col gap-8 md:gap-14">
          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="relative block">
              <span>
                <span className="relative block text-5xl text-[var(--primary-text)] dark:text-[var(--dark-primary-text)] text-cursor">Projects</span>
              </span>
            </h2>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            <a href="https://demo.serenibase.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col w-full gap-4">
              <div className="overflow-hidden w-full aspect-[4/3] relative rounded-lg flex items-center justify-center">
                <div className="w-full h-full will-change-auto">
                  <img
                    loading='lazy'
                    decoding='async'
                    src="/assets/grid-view.png"
                    alt="SereniBase-no-code-database-platform"
                    className="h-full w-full object-cover transition-all duration-700 ease-in-out filter grayscale hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
                <div className="absolute z-10 flex items-center justify-center w-12 h-12 bg-white border rounded-full text-[var(--primary-text)] dark:text-white dark:bg-neutral-900 border-neutral-gray-2 dark:border-neutral-gray-2-dark">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
                </div>
              </div>
              <div className="flex flex-col gap-1 px-2">
                <h4 className='text-sm text-[var(--primary-text)] dark:text-[var(--dark-primary-text)]'>Sereni Base - No code database platform</h4>
                <p className="font-medium text-[var(--secondary-text)] group-hover:text-content-primary dark:group-hover:text-content-primary-dark dark:text-[var(--dark-secondary-text)] ease-primary duration-[0.25s]">Sereni Base is an open-source No code database platform built with React.js & TypeScript. A comprehensive React admin panel and admin dashboard UI providing plugin-extensible UI architecture with advanced field types, multiple view layouts, and real-time collaboration capabilities for modern data management.</p>
              </div>
            </a>

            <a href="https://seedcolor.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex flex-col w-full gap-4">
              <div className="overflow-hidden w-full aspect-[4/3] relative rounded-lg flex items-center justify-center">
                <div className="w-full h-full will-change-auto">
                  <img
                    loading='lazy'
                    decoding='async'
                    src="/assets/seedcolor.png"
                    alt="SeedColor"
                    className="h-full w-full object-cover transition-all duration-700 ease-in-out filter grayscale hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
                <div className="absolute z-10 flex items-center justify-center w-12 h-12 bg-white border rounded-full text-[var(--primary-text)] dark:text-white dark:bg-neutral-900 border-neutral-gray-2 dark:border-neutral-gray-2-dark">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
                </div>
              </div>
              <div className="flex flex-col gap-1 px-2">
                <h4 className='text-sm text-[var(--primary-text)] dark:text-[var(--dark-primary-text)]'>SeedColor</h4>
                <p className="font-medium text-[var(--secondary-text)] group-hover:text-content-primary dark:group-hover:text-content-primary-dark dark:text-[var(--dark-secondary-text)] ease-primary duration-[0.25s]">SeedColor helps you go from a single base color to a complete, export-ready palette with accessibility checks, live component previews, and shareable URL state.</p>
              </div>
            </a>

            <a href="https://digambernegi.github.io/Netflixonly/" target="_blank" rel="noopener noreferrer" className="flex flex-col w-full gap-4">
              <div className="overflow-hidden w-full aspect-[4/3] relative rounded-lg flex items-center justify-center">
                <div className="w-full h-full will-change-auto">
                  <img
                    loading='lazy'
                    decoding='async'
                    src="/assets/netflix.png"
                    alt="Netflix clone"
                    className="h-full w-full object-cover transition-all duration-700 ease-in-out filter grayscale hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
                <div className="absolute z-10 flex items-center justify-center w-12 h-12 bg-white border rounded-full text-[var(--primary-text)] dark:text-white dark:bg-neutral-900 border-neutral-gray-2 dark:border-neutral-gray-2-dark">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
                </div>
              </div>
              <div className="flex flex-col gap-1 px-2">
                <h4 className='text-sm text-[var(--primary-text)] dark:text-[var(--dark-primary-text)]'>Netflix - UI</h4>
                <p className="font-medium text-[var(--secondary-text)] group-hover:text-content-primary dark:group-hover:text-content-primary-dark dark:text-[var(--dark-secondary-text)] ease-primary duration-[0.25s]">A Netflix UI clone featuring responsive design, dynamic content loading, and seamless user experience with modern web technologies.</p>
              </div>
            </a>

            <a href="https://photixa.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex flex-col w-full gap-4 group">
              <div className="overflow-hidden w-full aspect-[4/3] relative rounded-lg flex items-center justify-center">
                <div className="w-full h-full will-change-auto">
                  <img
                    loading='lazy'
                    decoding='async'
                    src="/assets/photixa.png"
                    alt="Photixa"
                    className="h-full w-full object-cover transition-all duration-700 ease-in-out filter grayscale hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
                <div className="absolute z-10 flex items-center justify-center w-12 h-12 bg-white border rounded-full text-[var(--primary-text)] dark:text-white dark:bg-neutral-900 border-neutral-gray-2 dark:border-neutral-gray-2-dark">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
                </div>
              </div>
              <div className="flex flex-col gap-1 px-2">
                <h4 className='text-sm text-[var(--primary-text)] dark:text-[var(--dark-primary-text)]'>Photixa - Gallery</h4>
                <p className="font-medium text-[var(--secondary-text)] group-hover:text-content-primary dark:group-hover:text-content-primary-dark dark:text-[var(--dark-secondary-text)] ease-primary duration-[0.25s]">A modern image gallery application built with React.js and Firebase. Features include image upload, real-time updates, responsive design, and efficient data retrieval using Firebase Storage and Firestore.</p>
              </div>
            </a>

            <a href="https://gooogleclone.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex flex-col w-full gap-4 group">
              <div className="overflow-hidden w-full aspect-[4/3] relative rounded-lg flex items-center justify-center">
                <div className="w-full h-full will-change-auto">
                  <img
                    loading='lazy'
                    decoding='async'
                    src="/assets/google.png"
                    alt="Google clone"
                    className="h-full w-full object-cover transition-all duration-700 ease-in-out filter grayscale hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
                <div className="absolute z-10 flex items-center justify-center w-12 h-12 bg-white border rounded-full text-[var(--primary-text)] dark:text-white dark:bg-neutral-900 border-neutral-gray-2 dark:border-neutral-gray-2-dark">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
                </div>
              </div>
              <div className="flex flex-col gap-1 px-2">
                <h4 className='text-sm text-[var(--primary-text)] dark:text-[var(--dark-primary-text)]'>Google - Clone</h4>
                <p className="font-medium text-[var(--secondary-text)] group-hover:text-content-primary dark:group-hover:text-content-primary-dark dark:text-[var(--dark-secondary-text)] ease-primary duration-[0.25s]">A Google search engine clone with real API integration, search functionality, and responsive design matching Google's aesthetic.</p>
              </div>
            </a>

            <a href="https://zomato0clone.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex flex-col w-full gap-4 group">
              <div className="overflow-hidden w-full aspect-[4/3] relative rounded-lg flex items-center justify-center">
                <div className="w-full h-full will-change-auto">
                  <img
                    loading='lazy'
                    decoding='async'
                    src="/assets/zomato.png"
                    alt="Zomato UI clone"
                    className="h-full w-full object-cover transition-all duration-700 ease-in-out filter grayscale hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
                <div className="absolute z-10 flex items-center justify-center w-12 h-12 bg-white border rounded-full text-[var(--primary-text)] dark:text-white dark:bg-neutral-900 border-neutral-gray-2 dark:border-neutral-gray-2-dark">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
                </div>
              </div>
              <div className="flex flex-col gap-1 px-2">
                <h4 className='text-sm text-[var(--primary-text)] dark:text-[var(--dark-primary-text)]'>Zomato - Clone</h4>
                <p className="font-medium text-[var(--secondary-text)] group-hover:text-content-primary dark:group-hover:text-content-primary-dark dark:text-[var(--dark-secondary-text)] ease-primary duration-[0.25s]">A food delivery platform UI clone featuring restaurant listings, menu displays, and ordering interface with modern design principles.</p>
              </div>
            </a>

            <a href="https://travellbuddy.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex flex-col w-full gap-4 group">
              <div className="overflow-hidden w-full aspect-[4/3] relative rounded-lg flex items-center justify-center">
                <div className="w-full h-full will-change-auto">
                  <img
                    loading='lazy'
                    decoding='async'
                    src="/assets/travel-buddy.png"
                    alt="Travel Buddy"
                    className="h-full w-full object-cover transition-all duration-700 ease-in-out filter grayscale hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
                <div className="absolute z-10 flex items-center justify-center w-12 h-12 bg-white border rounded-full text-[var(--primary-text)] dark:text-white dark:bg-neutral-900 border-neutral-gray-2 dark:border-neutral-gray-2-dark">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
                </div>
              </div>
              <div className="flex flex-col gap-1 px-2">
                <h4 className='text-sm text-[var(--primary-text)] dark:text-[var(--dark-primary-text)]'>Travel Buddy - Find Places Nearby</h4>
                <p className="font-medium text-[var(--secondary-text)] group-hover:text-content-primary dark:group-hover:text-content-primary-dark dark:text-[var(--dark-secondary-text)] ease-primary duration-[0.25s]">An interactive travel assistance application using React.js, Google Maps API, and Travel Advisor API. Features location-based services, place discovery, real-time weather conditions, and filtering capabilities.</p>
              </div>
            </a>

            <a href="https://dashboard10.netlify.app/login" target="_blank" rel="noopener noreferrer" className="flex flex-col w-full gap-4 group">
              <div className="overflow-hidden w-full aspect-[4/3] relative rounded-lg flex items-center justify-center">
                <div className="w-full h-full will-change-auto">
                  <img
                    loading='lazy'
                    decoding='async'
                    src="/assets/dashboard.png"
                    alt="Dashboard UI"
                    className="h-full w-full object-cover transition-all duration-700 ease-in-out filter grayscale hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
                <div className="absolute z-10 flex items-center justify-center w-12 h-12 bg-white border rounded-full text-[var(--primary-text)] dark:text-white dark:bg-neutral-900 border-neutral-gray-2 dark:border-neutral-gray-2-dark">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
                </div>
              </div>
              <div className="flex flex-col gap-1 px-2">
                <h4 className='text-sm text-[var(--primary-text)] dark:text-[var(--dark-primary-text)]'>Dashboard - UI</h4>
                <p className="font-medium text-[var(--secondary-text)] group-hover:text-content-primary dark:group-hover:text-content-primary-dark dark:text-[var(--dark-secondary-text)] ease-primary duration-[0.25s]">A modern admin dashboard with data visualization, user management, and comprehensive analytics tools for business intelligence.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

