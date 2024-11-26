import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Compass, ShoppingCart, User } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();
  const { isAuthenticated, logout } = useAuth();

  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-green-600" />
              <span className="font-bold text-xl text-gray-800">RubabaAdventures</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/adventures">Adventures</NavLink>
            <NavLink to="/accommodation">Accommodation</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            {isAuthenticated ? (
              <>
                <NavLink to="/admin">Dashboard</NavLink>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink to="/admin/login" className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>Login</span>
              </NavLink>
            )}
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-green-600" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
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
            <MobileNavLink to="/services">Services</MobileNavLink>
            <MobileNavLink to="/about">About</MobileNavLink>
            <MobileNavLink to="/contact">Contact</MobileNavLink>
            <MobileNavLink to="/shop">Shop</MobileNavLink>
            <MobileNavLink to="/shop">Shop</MobileNavLink>
            <MobileNavLink to="/gallery">Gallery</MobileNavLink>
            {isAuthenticated ? (
              <>
                <MobileNavLink to="/admin">Dashboard</MobileNavLink>
                <button
                  onClick={logout}
                  className="w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-green-600 hover:bg-gray-50 rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <MobileNavLink to="/admin/login">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </div>
              </MobileNavLink>
            )}
            <MobileNavLink to="/cart">Cart ({cartItemCount})</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, children, className = '' }: { to: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      to={to}
      className={`text-gray-600 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors ${className}`}
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