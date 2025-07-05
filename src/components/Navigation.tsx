'use client'

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { ImageAssets } from '@/images/imageassets'

const Navigation = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/investment-advisory', label: 'Investment Advisory' },
    { path: '/corporate-services', label: 'Corporate Services' },
    { path: '/about', label: 'About Us' },
    { path: '/knowledge', label: 'Knowledge Hub' },
  ]

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-teal-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img src={ImageAssets.Svastiya} width={60} height={60} alt="Svastiya Logo" />
            <span className="text-xl font-semibold text-teal-800">Svastiya</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  location.pathname === item.path
                    ? 'text-teal-700 bg-teal-50'
                    : 'text-gray-600 hover:text-teal-700 hover:bg-teal-50'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-teal-800 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className={cn(
                  'block px-4 py-2 rounded-md text-base font-medium transition-colors',
                  location.pathname === item.path
                    ? 'text-teal-700 bg-teal-50'
                    : 'text-gray-600 hover:text-teal-700 hover:bg-teal-50'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
