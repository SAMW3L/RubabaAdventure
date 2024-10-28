import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Users, Calendar, Wifi, Coffee, Car } from 'lucide-react';

export interface Accommodation {
  id: string;
  title: string;
  description: string;
  image: string;
  pricePerNight: number;
  maxGuests: number;
  amenities: string[];
  type: 'lodge' | 'cabin' | 'tent' | 'villa';
}

interface AccommodationCardProps {
  accommodation: Accommodation;
}

export function AccommodationCard({ accommodation }: AccommodationCardProps) {
  const amenityIcons = {
    wifi: <Wifi className="h-4 w-4" />,
    parking: <Car className="h-4 w-4" />,
    breakfast: <Coffee className="h-4 w-4" />,
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={accommodation.image} 
        alt={accommodation.title} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{accommodation.title}</h3>
        <p className="text-gray-600 mb-4">{accommodation.description}</p>
        
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4 text-green-600" />
            <span className="text-sm text-gray-600">Up to {accommodation.maxGuests} guests</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bed className="h-4 w-4 text-green-600" />
            <span className="text-sm text-gray-600">{accommodation.type}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {accommodation.amenities.map((amenity) => (
            <span 
              key={amenity}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 flex items-center gap-1"
            >
              {amenityIcons[amenity as keyof typeof amenityIcons]}
              {amenity}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div className="text-green-600">
            <span className="text-2xl font-bold">${accommodation.pricePerNight}</span>
            <span className="text-sm text-gray-600">/night</span>
          </div>
          <Link
            to={`/booking/accommodation/${accommodation.id}`}
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}