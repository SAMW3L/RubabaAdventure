import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';

function About() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Connecting adventurers with extraordinary experiences since 2010
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're dedicated to providing unforgettable adventures while promoting sustainable tourism 
              and supporting local communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<Users className="h-8 w-8 text-green-600" />}
              title="Community First"
              description="Supporting and empowering local communities through sustainable tourism"
            />
            <ValueCard 
              icon={<Award className="h-8 w-8 text-green-600" />}
              title="Excellence"
              description="Delivering exceptional experiences and maintaining the highest standards"
            />
            <ValueCard 
              icon={<Globe className="h-8 w-8 text-green-600" />}
              title="Sustainability"
              description="Promoting responsible tourism and environmental conservation"
            />
            <ValueCard 
              icon={<Heart className="h-8 w-8 text-green-600" />}
              title="Passion"
              description="Sharing our love for adventure and cultural exploration"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals who make your adventures possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember 
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
              name="Enock Rubaba"
              position="Founder & CEO"
              bio="Adventure enthusiast with 15+ years of experience in expedition planning"
            />
            <TeamMember 
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
              name="Catarina Rubaba"
              position="Head of Operations"
              bio="Expert in sustainable tourism and community development"
            />
            <TeamMember 
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
              name="Jack Jackeys"
              position="Lead Guide"
              bio="Certified wilderness guide with extensive knowledge of local terrain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="text-center p-6">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TeamMember({ image, name, position, bio }: { 
  image: string; 
  name: string; 
  position: string; 
  bio: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-green-600 font-medium mb-2">{position}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
}

export default About;