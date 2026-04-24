import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {

  return (
    <div className="grid w-full max-w-5xl grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="animate-fadeUp flex flex-col items-center w-full gap-[5rem] my-[5rem] lg:gap-[10rem] lg:my-[10rem]">
        <div className="flex flex-col items-center max-w-3xl gap-1 text-center">
          <span className="text-3xl md:text-4xl lg:text-6xl font-bold text-[var(--primary-text)] dark:text-[var(--dark-primary-text)] text-cursor">Hey, I'm Digamber!</span>
          <span className="text-3xl md:text-4xl lg:text-6xl font-bold text-[var(--primary-text)] dark:text-[var(--dark-primary-text)] text-cursor">Building the Web</span>
          <span className="text-3xl md:text-4xl lg:text-6xl font-bold text-[var(--primary-text)] dark:text-[var(--dark-primary-text)] text-cursor">One Line at a Time</span>
          <span className="grid w-full max-w-5xl grid-rows-[auto_1fr_auto] text-xs md:text-sm text-[var(--text)] dark:text-[var(--dark-secondary-text)] my-10 lg:w-4/5 text-cursor">Frontend Engineer passionate about React ecosystems, performance optimization, and modern web architecture. Building production apps that users love.</span>          <div className="flex items-center justify-center gap-4">
            <a href="https://github.com/digambernegi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                title="GitHub"
                className="flex items-center justify-center w-6 h-6 dark:invert"
                src="/assets/git.svg"
                alt="gitHub"
                width={50}
                height={50}
              /></a>
            <a href="https://www.linkedin.com/in/digamber-negi-5b2296135/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                title="LinkedIn"
                className="flex items-center justify-center w-6 h-6 dark:invert"
                src="/assets/linkedIn.svg"
                alt="linkedIn"
                width={50}
                height={50}
              /></a>
          </div>
        </div>

        <div className="flex flex-col items-center w-full gap-6 lg:gap-10">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-2xl text-[var(--primary-text)] dark:text-[var(--dark-primary-text)] text-cursor">Featured Projects</h3>
            <Link to="/project" className="text-sm text-[var(--primary-text)] dark:text-[var(--dark-primary-text)] hover:text-orange-400">View All</Link>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            <a href="https://github.com/aptlogica/sereni-base" target="_blank" rel="noopener noreferrer" className="flex flex-col w-full gap-4">
              <div className="group h-full relative overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
                <div className="h-[200px] bg-neutral-50 dark:bg-neutral-800 overflow-hidden cursor-pointer">
                  <img
                    loading='lazy'
                    decoding='async'
                    src="/assets/serenibase.png"
                    alt="SereniBase-no-code-database-platform"
                    className="h-full w-full object-cover transition-all duration-700 ease-in-out filter grayscale hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col justify-between p-4">
                  <div>
                    <h4 className="font-medium text-[var(--primary-text)] dark:text-[var(--dark-primary-text)] text-cursor">Sereni Base - No code database platform <a href="https://demo.serenibase.com/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-orange-400 border-2 border-orange-100 px-3 py-1 ml-1.5 text-xs text-white cursor-pointer">Preview</a></h4>
                    <p className="mt-2 text-sm text-[var(--secondary-text)] dark:text-[var(--dark-secondary-text)] text-cursor">Sereni Base is an open-source No code database platform built with React.js & TypeScript. A comprehensive React admin panel and admin dashboard UI providing plugin-extensible UI architecture with advanced field types, multiple view layouts, and real-time collaboration capabilities for modern data management.</p>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <span className="rounded-full bg-neutral-100 dark:bg-[var(--dark-background)] px-3 py-1 text-xs dark:text-[var(--dark-secondary-text)] text-cursor">ReactJS</span>
                    <span className="rounded-full bg-neutral-100 dark:bg-[var(--dark-background)] px-3 py-1 text-xs dark:text-[var(--dark-secondary-text)] text-cursor">Typescript</span>
                    <span className="rounded-full bg-neutral-100 dark:bg-[var(--dark-background)] px-3 py-1 text-xs dark:text-[var(--dark-secondary-text)] text-cursor">Tailwind</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://github.com/digambernegi/Seedcolor" target="_blank" rel="noopener noreferrer" className="flex flex-col w-full gap-4">
              <div className="group h-full relative overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
                <div className="h-[200px] bg-neutral-50 dark:bg-neutral-800 overflow-hidden cursor-pointer">
                  <img
                    loading='lazy'
                    decoding='async'
                    src="/assets/seedcolor.png"
                    alt="SeedColor"
                    className="h-full w-full object-cover transition-all duration-700 ease-in-out filter grayscale hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col justify-between p-4">
                  <div>
                    <h4 className="font-medium text-[var(--primary-text)] dark:text-[var(--dark-primary-text)] text-cursor">SeedColor <a href="https://seedcolor.netlify.app/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-orange-400 border-2 border-orange-100 px-3 py-1 ml-1.5 text-xs text-white cursor-pointer">Preview</a></h4>
                    <p className="mt-2 text-sm text-[var(--secondary-text)] dark:text-[var(--dark-secondary-text)] text-cursor">A free, open-source design token generator that turns any brand color into a complete, export-ready token system — with custom naming conventions, multiple export formats, and instant URL sharing. No login. No paywall. No backend.</p>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <span className="rounded-full bg-neutral-100 dark:bg-[var(--dark-background)] px-3 py-1 text-xs dark:text-[var(--dark-secondary-text)] text-cursor">ReactJS</span>
                    <span className="rounded-full bg-neutral-100 dark:bg-[var(--dark-background)] px-3 py-1 text-xs dark:text-[var(--dark-secondary-text)] text-cursor">Zustand</span>
                    <span className="rounded-full bg-neutral-100 dark:bg-[var(--dark-background)] px-3 py-1 text-xs dark:text-[var(--dark-secondary-text)] text-cursor">Tailwind</span>
                    <span className="rounded-full bg-neutral-100 dark:bg-[var(--dark-background)] px-3 py-1 text-xs dark:text-[var(--dark-secondary-text)] text-cursor">react-colorful</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

