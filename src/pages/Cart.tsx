import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { PaymentModal } from '../components/PaymentModal';
import toast from 'react-hot-toast';

function Cart() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();
  const [showPayment, setShowPayment] = useState(false);

  const handlePaymentSuccess = () => {
    clearCart();
    setShowPayment(false);
    toast.success('Order placed successfully!');
  };

  if (items.length === 0) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center">
            <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-4">Looks like you haven't added any items yet</p>
            <Link
              to="/shop"
              className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          {items.map((item) => (
            <div key={item.id} className="flex items-center py-4 border-b last:border-b-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-grow ml-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-4">
                <select
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="border rounded-md p-1"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 pt-6 border-t">
            <div className="flex justify-between mb-6">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold text-green-600">
                ${total.toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => setShowPayment(true)}
              className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>

        <Link
          to="/shop"
          className="inline-block text-green-600 hover:text-green-700"
        >
          ← Continue Shopping
        </Link>
      </div>

      {showPayment && (
        <PaymentModal
          amount={total}
          onClose={() => setShowPayment(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
}

export default Cart;