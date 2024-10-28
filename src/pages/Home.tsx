import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Tent, Hotel, Mountain } from 'lucide-react';

function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Discover Your Next Adventure</h1>
            <p className="text-xl md:text-2xl mb-8">Experience nature's wonders with our guided tours and luxury accommodations</p>
            <Link 
              to="/adventures" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Compass className="w-12 h-12 text-green-600" />}
              title="Safari Tours"
              description="Experience wildlife in their natural habitat with our expert guides"
            />
            <ServiceCard 
              icon={<Mountain className="w-12 h-12 text-green-600" />}
              title="Hiking Adventures"
              description="Trek through scenic trails and reach breathtaking summits"
            />
            <ServiceCard 
              icon={<Tent className="w-12 h-12 text-green-600" />}
              title="Camping"
              description="Connect with nature in our premium camping facilities"
            />
            <ServiceCard 
              icon={<Hotel className="w-12 h-12 text-green-600" />}
              title="Luxury Lodging"
              description="Rest in comfort at our world-class accommodations"
            />
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DestinationCard 
              image="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80"
              title="Serengeti Safari"
              description="Witness the great migration and abundant wildlife"
              price="From $299/day"
            />
            <DestinationCard 
              image="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80"
              title="Mountain Expedition"
              description="Challenge yourself with guided climbing adventures"
              price="From $199/day"
            />
            <DestinationCard 
              image="https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&q=80"
              title="Luxury Camping"
              description="Experience glamping in pristine wilderness"
              price="From $249/night"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function DestinationCard({ image, title, description, price }: { image: string; title: string; description: string; price: string }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-green-600 font-semibold">{price}</span>
          <Link 
            to={`/booking/adventure/${title.toLowerCase().replace(' ', '-')}`}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;