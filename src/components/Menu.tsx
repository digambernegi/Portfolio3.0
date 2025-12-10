import { Link } from 'react-router-dom'
import React from 'react'

const Menu = ({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: (isOpen: boolean) => void}) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 z-50 right-0 bg-[#27272A]/40 dark:bg-black/80 backdrop-blur-sm">
      <div className="absolute top-8 left-4 right-4 flex flex-col gap-6 p-8 bg-white dark:bg-neutral-900 rounded-[24px] border border-neutral-gray-2 dark:border-neutral-800">
        <div className="flex items-center justify-between gap-4">
          <div className="text-[var(--secondary-text)]">Navigation</div>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="flex items-center justify-center w-6 h-6 cursor-pointer text-content-secondary dark:text-content-secondary-dark"
            aria-label="Close menu"
          >
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div className="flex flex-col">
          <Link className="text-[var(--primary-text)] border-b border-[var(--dark-border)] dark:text-[var(--dark-primary-text)] dark:border-[var(--border)] py-3 flex items-center w-full" to="/about">About</Link>
          <Link className="text-[var(--primary-text)] border-b border-[var(--dark-border)] dark:text-[var(--dark-primary-text)] dark:border-[var(--border)] py-3 flex items-center w-full" to="/project">Project</Link>
          <Link className="text-[var(--primary-text)] border-b border-[var(--dark-border)] dark:text-[var(--dark-primary-text)] dark:border-[var(--border)] py-3 flex items-center w-full border-none" to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Menu

