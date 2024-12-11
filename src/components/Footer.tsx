import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-1 py-12">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-1">Rubaba Adventures</h3>
            <p className="text-gray-400 mb-1">
              Your gateway to extraordinary outdoor experiences and adventures.
            </p>
            <div className="flex space-x-1">
              <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-1">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/adventures">Adventures</FooterLink>
              <FooterLink to="/accommodation">Accommodation</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-1">Services</h3>
            <ul className="space-y-2">
              <FooterLink to="/adventures">Safari Tours</FooterLink>
              <FooterLink to="/hiking">Hiking Trips</FooterLink>
              <FooterLink to="/camping">Camping</FooterLink>
              <FooterLink to="/accommodation">Luxury Lodging</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-1">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-green-500" />
                <span>+255 700 000</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-green-500" />
                <span>info@rubabaadventures.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-green-500" />
                <span>Iringa, Tanzania</span>
              </li>
            </ul>
          </div>
        </div>

      <div className="border-t border-gray-800 mt-2 pt-9 text-center text-gray-400">
         <p>&copy; {new Date().getFullYear()} Rubaba Adventure. All rights reserved.</p>
         <p>
          <a href="https://samuel-portifolio-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
      Designed by SAMUEL(0613004338)
        </a>
         </p>
  </div>
</div>
</footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className="text-gray-400 hover:text-white transition-colors"
        onClick={() => window.scrollTo(0, 0)}
      >
        {children}
      </Link>
    </li>
  );
}

export default Footer;
