import React, { useState } from 'react';
import { CreditCard, Smartphone } from 'lucide-react';
import toast from 'react-hot-toast';

interface PaymentModalProps {
  amount: number;
  onClose: () => void;
  onSuccess: () => void;
}

export function PaymentModal({ amount, onClose, onSuccess }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'mobile'>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Implement actual payment processing here
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Payment successful!');
      onSuccess();
    } catch (error) {
      toast.error('Payment failed. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
        <div className="mb-6">
          <p className="text-gray-600">Total Amount:</p>
          <p className="text-3xl font-bold text-green-600">${amount.toFixed(2)}</p>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            className={`flex-1 py-2 rounded-md flex items-center justify-center gap-2 ${
              paymentMethod === 'card'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
            onClick={() => setPaymentMethod('card')}
          >
            <CreditCard className="h-5 w-5" />
            Card
          </button>
          <button
            className={`flex-1 py-2 rounded-md flex items-center justify-center gap-2 ${
              paymentMethod === 'mobile'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
            onClick={() => setPaymentMethod('mobile')}
          >
            <Smartphone className="h-5 w-5" />
            Mobile
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {paymentMethod === 'card' ? (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  required
                  placeholder="1234 5678 9012 3456"
                  className="w-full p-2 border rounded-md"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="MM/YY"
                    className="w-full p-2 border rounded-md"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="123"
                    className="w-full p-2 border rounded-md"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </div>
              </div>
            </>
          ) : (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                required
                placeholder="Enter mobile number"
                className="w-full p-2 border rounded-md"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
          )}

          <div className="flex justify-end space-x-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 9c15c56387fc6ad0a2bbb367094caaa28346cc51
