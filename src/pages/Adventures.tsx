import React, { useState } from 'react';
import { AdventureCard, type Adventure } from '../components/AdventureCard';
import { FilterBar } from '../components/FilterBar';

const SAMPLE_ADVENTURES: Adventure[] = [
  {
    id: 'serengeti-safari',
    title: 'Serengeti Wildlife Safari',
    description: 'Experience the incredible wildlife of the Serengeti National Park.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80',
    duration: '5 Days',
    groupSize: '4-8 People',
    price: 1299,
    startDate: 'Multiple Dates'
  },
  {
    id: 'kilimanjaro-trek',
    title: 'Kilimanjaro Trek',
    description: 'Climb to the roof of Africa on this challenging mountain expedition.',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80',
    duration: '7 Days',
    groupSize: '6-12 People',
    price: 2499,
    startDate: 'Weekly Tours'
  },
  {
    id: 'amazon-expedition',
    title: 'Amazon Rainforest Expedition',
    description: 'Explore the biodiversity of the Amazon rainforest.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80',
    duration: '4 Days',
    groupSize: '4-6 People',
    price: 999,
    startDate: 'Flexible Dates'
  }
];

function Adventures() {
  const [adventures, setAdventures] = useState<Adventure[]>(SAMPLE_ADVENTURES);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = SAMPLE_ADVENTURES.filter(adventure =>
      adventure.title.toLowerCase().includes(term.toLowerCase()) ||
      adventure.description.toLowerCase().includes(term.toLowerCase())
    );
    setAdventures(filtered);
  };

  const handleFilter = (filters: any) => {
    // Implement filtering logic here
    console.log('Applying filters:', filters);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Adventure Tours</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of adventure tours, 
            from wildlife safaris to mountain expeditions.
          </p>
        </div>

        <FilterBar onSearch={handleSearch} onFilter={handleFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adventures.map((adventure) => (
            <AdventureCard key={adventure.id} adventure={adventure} />
          ))}
        </div>

        {adventures.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No adventures found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Adventures;