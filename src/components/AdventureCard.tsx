import React from 'react';
import { Calendar, Clock, Users, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface Adventure {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  groupSize: string;
  price: number;
  startDate: string;
}

interface AdventureCardProps {
  adventure: Adventure;
}

export function AdventureCard({ adventure }: AdventureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={adventure.image} 
        alt={adventure.title} 
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{adventure.title}</h3>
        <p className="text-gray-600 mb-4">{adventure.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-green-600" />
            <span className="text-sm text-gray-600">{adventure.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-green-600" />
            <span className="text-sm text-gray-600">{adventure.groupSize}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-green-600" />
            <span className="text-sm text-gray-600">{adventure.startDate}</span>
          </div>
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4 text-green-600" />
            <span className="text-sm text-gray-600">${adventure.price}/person</span>
          </div>
        </div>
        
        <Link
          to={`/booking/adventure/${adventure.id}`}
          className="block w-full text-center bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}