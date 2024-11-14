import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FilterBar } from '../components/FilterBar';
import { ProductCard } from '../components/ProductCard';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Traditional Handwoven Basket',
    description: 'Authentic handcrafted basket made by local artisans',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1595408076683-5d0a838a3f17?auto=format&fit=crop&q=80',
    category: 'handicrafts'
  },
  {
    id: '2',
    title: 'Tribal Art Print',
    description: 'Limited edition print featuring traditional tribal patterns',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&q=80',
    category: 'art'
  },
  {
    id: '3',
    title: 'Local Spice Collection',
    description: 'Set of authentic local spices and seasonings',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80',
    category: 'food'
  }
];

function Shop() {
  const [products, setProducts] = useState<Product[]>(SAMPLE_PRODUCTS);

  const handleSearch = (term: string) => {
    const filtered = SAMPLE_PRODUCTS.filter(product =>
      product.title.toLowerCase().includes(term.toLowerCase()) ||
      product.description.toLowerCase().includes(term.toLowerCase())
    );
    setProducts(filtered);
  };

  const handleFilter = (filters: any) => {
    // Implement filtering logic
    console.log('Applying filters:', filters);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Cultural Shop</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover authentic local handicrafts, art, and cultural items
          </p>
        </div>

        <FilterBar onSearch={handleSearch} onFilter={handleFilter} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;