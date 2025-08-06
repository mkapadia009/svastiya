'use client'

import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { ImageAssets } from '@/images/imageassets'

const Navigation = () => {
  const location = useLocation()
  const navigate = useNavigate()
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

  const handleNavClick = (path: string) => {
    navigate(path)
    closeMobileMenu()
  }

  return (
    <nav className="bg-gradient-to-br from-slate-50 to-teal-50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div onClick={() => handleNavClick('/')} className="flex items-center cursor-pointer">
            <img src={ImageAssets.SvastiyaTree} width={80} height={80} alt="Svastiya Logo" />
            <img src={ImageAssets.SvastiyaLogo} width={150} height={200} className='mt-4 -ml-4' alt="Svastiya Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer',
                  location.pathname === item.path
                    ? 'text-[#559187] bg-[#CDF9EF]'
                    : 'text-gray-600 hover:text-[#559187] hover:bg-[#CDF9EF]'
                )}
              >
                {item.label}
              </div>
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
          <div className="md:hidden mt-2 space-y-2 pb-4" style={{ backgroundColor: 'transparent' }}>
            {navItems.map((item) => (
              <div
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={cn(
                  'block px-4 py-2 rounded-md text-base font-medium transition-colors cursor-pointer',
                  location.pathname === item.path
                    ? 'text-[#559187] bg-[#CDF9EF]'
                    : 'text-gray-600 hover:text-[#559187] hover:bg-[#CDF9EF]'
                )}
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
