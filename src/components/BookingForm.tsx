import React, { useState } from 'react';
import { Calendar, Users, CreditCard } from 'lucide-react';

interface BookingFormProps {
  onSubmit: (formData: BookingFormData) => void;
  price: number;
}

export interface BookingFormData {
  date: string;
  guests: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequirements: string;
}

export function BookingForm({ onSubmit, price }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    date: '',
    guests: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Booking Details</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tour Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                name="date"
                required
                className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Guests
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                name="guests"
                required
                className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                value={formData.guests}
                onChange={handleChange}
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              required
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              required
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Special Requirements
          </label>
          <textarea
            name="specialRequirements"
            rows={3}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
            value={formData.specialRequirements}
            onChange={handleChange}
          />
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium">Total Price:</span>
            <span className="text-xl font-bold text-green-600">
              ${price * formData.guests}
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            <CreditCard className="h-5 w-5" />
            Proceed to Payment
          </button>
        </div>
      </div>
    </form>
  );
}