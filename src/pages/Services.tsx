import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mountain, Tent, Hotel, Camera, Coffee } from 'lucide-react';

function Services() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&q=80")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Comprehensive adventure and accommodation solutions for every explorer
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Compass className="h-12 w-12 text-green-600" />}
              title="Guided Tours"
              description="Expert-led adventures through the most breathtaking landscapes"
              link="/adventures"
            />
            <ServiceCard 
              icon={<Mountain className="h-12 w-12 text-green-600" />}
              title="Mountain Expeditions"
              description="Challenging climbs and treks for all skill levels"
              link="/adventures"
            />
            <ServiceCard 
              icon={<Tent className="h-12 w-12 text-green-600" />}
              title="Camping"
              description="Immersive outdoor experiences in pristine locations"
              link="/accommodation"
            />
            <ServiceCard 
              icon={<Hotel className="h-12 w-12 text-green-600" />}
              title="Luxury Lodging"
              description="Comfortable accommodations in stunning settings"
              link="/accommodation"
            />
            <ServiceCard 
              icon={<Camera className="h-12 w-12 text-green-600" />}
              title="Photography Tours"
              description="Capture the beauty of nature with professional guidance"
              link="/adventures"
            />
            <ServiceCard 
              icon={<Coffee className="h-12 w-12 text-green-600" />}
              title="Cultural Experiences"
              description="Authentic interactions with local communities"
              link="/adventures"
            />
          </div>
        </div>
      </section>

      {/* Featured Experience */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Custom Adventure Planning</h2>
              <p className="text-gray-600 mb-6">
                Looking for something unique? Our team specializes in creating custom adventure 
                packages tailored to your preferences and skill level. From private guided tours 
                to specialized expeditions, we'll help you plan the perfect adventure.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&q=80"
                alt="Custom Adventure Planning"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, link }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  link: string;
}) {
  return (
    <Link to={link} className="group">
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}

export default Services;