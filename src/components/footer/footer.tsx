'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { ImageAssets } from '@/images/imageassets'

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={ImageAssets.SvastiyaLogoWhite} width={80} height={80} alt="Svastiya Logo" />
              <span className="text-lg font-semibold">Svastiya Financial Advisors LLP</span>
            </div>
            <p className="text-white">
              Growing wealth through expert guidance and sustainable investment strategies.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-white">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@svastiya.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 98202 25970</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-white hover:font-semibold transition-colors">
                About Us
              </Link>
              <Link to="/knowledge" className="block text-white hover:font-semibold transition-colors">
                Knowledge Hub
              </Link>
              <Link to="/contact" className="block text-white hover:font-semibold transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-8 pt-8 text-center text-white">
          <p>&copy; 2025 Traverse TEC Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
