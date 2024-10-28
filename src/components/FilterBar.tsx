import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface FilterBarProps {
  onSearch: (term: string) => void;
  onFilter: (filters: any) => void;
}

export function FilterBar({ onSearch, onFilter }: FilterBarProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search adventures..."
            className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        
        <div className="flex gap-4">
          <select 
            className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => onFilter({ duration: e.target.value })}
          >
            <option value="">Duration</option>
            <option value="1-3">1-3 Days</option>
            <option value="4-7">4-7 Days</option>
            <option value="8+">8+ Days</option>
          </select>
          
          <select 
            className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => onFilter({ price: e.target.value })}
          >
            <option value="">Price Range</option>
            <option value="0-500">$0 - $500</option>
            <option value="501-1000">$501 - $1000</option>
            <option value="1001+">$1001+</option>
          </select>
          
          <button 
            className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-50"
            onClick={() => onFilter({})}
          >
            <SlidersHorizontal className="h-4 w-4" />
            More Filters
          </button>
        </div>
      </div>
    </div>
  );
}