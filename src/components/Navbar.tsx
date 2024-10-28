import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Compass } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-green-600" />
              <span className="font-bold text-xl text-gray-800">Rubaba Adventure</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/adventures">Adventures</NavLink>
            <NavLink to="/accommodation">Accommodation</NavLink>
            <NavLink to="/booking/new">Book Now</NavLink>
            <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/adventures">Adventures</MobileNavLink>
            <MobileNavLink to="/accommodation">Accommodation</MobileNavLink>
            <MobileNavLink to="/booking/new">Book Now</MobileNavLink>
            <button className="w-full text-left block px-3 py-2 text-base font-medium text-white bg-green-600 rounded-md">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-gray-600 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-green-600 hover:bg-gray-50 rounded-md"
    >
      {children}
    </Link>
  );
}

export default Navbar;