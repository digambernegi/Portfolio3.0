import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes';
import Menu from './Menu';

export default function Header() {
    const location = useLocation();
    const router = location.pathname.replace('/', '');
    const { theme, setTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky z-50 flex items-center justify-between w-full top-6 sm:top-8 lg:top-10">
            <Link to="/">
                <img
                    loading='lazy'
                    decoding='async'
                    className="rounded-full h-11 w-11 object-cover outline-none hover:outline-1 hover:outline-orange-400 transition-all ease-primary duration-[0.25s]"
                    src="/assets/headerprofile.jpeg"
                    alt="Digamber Negi"
                    width={500}
                    height={500}
                />
            </Link>
            <nav className="flex-wrap items-center justify-center border border-neutral-200 backdrop-blur px-6 py-2.5 gap-4 rounded-full dark:bg-[var(--dark-navbar)] dark:border-0 hidden sm:flex">
                <ul className="flex gap-4">
                    <li className="font-normal tracking-normal text-[var(--primary-text)] dark:text-[var(--dark-primary-text)] hover:text-orange-400"><Link className={`${router == "about" ? 'text-orange-400' : ''}`} to="/about">About</Link></li>
                    <li className="font-normal tracking-normal text-[var(--primary-text)] dark:text-[var(--dark-primary-text)] hover:text-orange-400"><Link className={`${router == "project" ? 'text-orange-400' : ''}`} to="/project">Project</Link></li>
                    <li className="font-normal tracking-normal text-[var(--primary-text)] dark:text-[var(--dark-primary-text)] hover:text-orange-400"><Link className={`${router == "contact" ? 'text-orange-400' : ''}`} to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="flex items-center gap-4">
                <div className="sm:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="font-medium relative flex items-center justify-center py-2.5 px-6 rounded-3xl transition-all ease-primary duration-[0.25s] border border-neutral-gray-2 dark:border-neutral-gray-2-dark bg-white dark:bg-neutral-dark hover:bg-neutral-gray-3 dark:hover:bg-neutral-gray-3-dark backdrop-blur bg-white/90 dark:bg-[var(--dark-navbar)] dark:border-[var(--dark-navbar)]">
                        <div className="">
                            <div className="flex items-center gap-2">
                                <div>Menu</div>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="translate-y-[1px] text-content-secondary dark:text-content-secondary-dark" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </div>
                        </div>
                    </button>
                </div>
                {theme == "dark" ?
                    <button
                        onClick={() => setTheme('light')}
                        className="border border-neutral-200 hover:cursor-pointer backdrop-blur p-3.5 rounded-full h-11 w-11 text-gray-200 dark:bg-[var(--dark-navbar)] dark:border-0"
                        aria-label="Switch to light mode"
                    >
                        <MoonIcon />
                    </button> :
                    <button
                        onClick={() => setTheme('dark')}
                        className="border border-neutral-200 hover:cursor-pointer backdrop-blur p-2.5 rounded-full h-11 w-11 text-orange-400 hover:bg-gray-100 dark:bg-[var(--dark-navbar)] dark:border-0"
                        aria-label="Switch to dark mode"
                    >
                        <SunIcon />
                    </button>
                }
            </div>
            {isMenuOpen && <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />}
        </header >
    )
}

