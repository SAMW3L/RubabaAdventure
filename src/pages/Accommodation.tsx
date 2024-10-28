import React, { useState } from 'react';
import { AccommodationCard, type Accommodation } from '../components/AccommodationCard';
import { FilterBar } from '../components/FilterBar';

const SAMPLE_ACCOMMODATIONS: Accommodation[] = [
  {
    id: 'luxury-safari-lodge',
    title: 'Luxury Safari Lodge',
    description: 'Experience ultimate comfort with stunning views of the savanna.',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80',
    pricePerNight: 299,
    maxGuests: 4,
    amenities: ['wifi', 'parking', 'breakfast'],
    type: 'lodge'
  },
  {
    id: 'riverside-cabin',
    title: 'Riverside Cabin',
    description: 'Cozy cabin nestled by the river with private deck.',
    image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&q=80',
    pricePerNight: 199,
    maxGuests: 2,
    amenities: ['parking', 'wifi'],
    type: 'cabin'
  },
  {
    id: 'glamping-tent',
    title: 'Luxury Glamping Tent',
    description: 'Premium camping experience with modern amenities.',
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80',
    pricePerNight: 149,
    maxGuests: 2,
    amenities: ['breakfast'],
    type: 'tent'
  }
];

function Accommodation() {
  const [accommodations, setAccommodations] = useState<Accommodation[]>(SAMPLE_ACCOMMODATIONS);

  const handleSearch = (term: string) => {
    const filtered = SAMPLE_ACCOMMODATIONS.filter(accommodation =>
      accommodation.title.toLowerCase().includes(term.toLowerCase()) ||
      accommodation.description.toLowerCase().includes(term.toLowerCase())
    );
    setAccommodations(filtered);
  };

  const handleFilter = (filters: any) => {
    // Implement filtering logic here
    console.log('Applying filters:', filters);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Luxury Accommodations</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of premium lodging options, from luxury lodges to glamping experiences.
          </p>
        </div>

        <FilterBar onSearch={handleSearch} onFilter={handleFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation) => (
            <AccommodationCard key={accommodation.id} accommodation={accommodation} />
          ))}
        </div>

        {accommodations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No accommodations found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Accommodation;