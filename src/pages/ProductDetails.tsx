import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Star } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

// This would typically come from an API or database
const SAMPLE_PRODUCT = {
  id: '1',
  title: 'Traditional Handwoven Basket',
  description: 'Authentic handcrafted basket made by local artisans using traditional techniques passed down through generations. Each piece is unique and tells a story of cultural heritage.',
  price: 49.99,
  image: 'https://images.unsplash.com/photo-1595408076683-5d0a838a3f17?auto=format&fit=crop&q=80',
  category: 'handicrafts',
  details: [
    'Handmade by skilled artisans',
    'Natural, sustainable materials',
    'Fair trade certified',
    'Dimensions: 12" x 12" x 8"'
  ],
  rating: 4.8,
  reviews: 24
};

function ProductDetails() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = SAMPLE_PRODUCT; // In a real app, fetch based on id

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      image: product.image
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link
          to="/shop"
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Shop
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="space-y-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="grid grid-cols-4 gap-2">
                <img
                  src={product.image}
                  alt="Product thumbnail"
                  className="w-full h-24 object-cover rounded cursor-pointer"
                />
                {/* Add more thumbnail images here */}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center text-yellow-400">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="ml-1 text-gray-600">{product.rating}</span>
                  </div>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-600">{product.reviews} reviews</span>
                </div>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Product Details</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="text-3xl font-bold text-green-600">
                  ${product.price.toFixed(2)}
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;