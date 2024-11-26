import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FilterBar } from '../components/FilterBar';
import { ProductCard } from '../components/ProductCard';
import { useData } from '../contexts/DataContext';


function Shop() {
  const { products, incrementViews } = useData();
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  useEffect(() => {
    setFilteredProducts(products.filter(p => p.status === 'active'));
  }, [products]);

  const handleSearch = (term: string) => {
    const filtered = products.filter(
      product =>
        product.status === 'active' &&
        (product.title.toLowerCase().includes(term.toLowerCase()) ||
          product.description.toLowerCase().includes(term.toLowerCase()))
    );
    setFilteredProducts(filtered);
  };

  const handleFilter = (filters: any) => {
    let filtered = products.filter(p => p.status === 'active');

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    setFilteredProducts(filtered);
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
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onView={() => incrementViews(product.id, 'product')}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;