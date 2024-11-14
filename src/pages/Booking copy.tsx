import React from 'react';
import { useParams } from 'react-router-dom';
import { BookingForm, type BookingFormData } from '../components/BookingForm';

function Booking() {
  const { type, id } = useParams();

  const handleBookingSubmit = async (formData: BookingFormData) => {
    try {
      // Here you would typically make an API call to process the booking
      console.log('Processing booking:', formData);
      // Redirect to payment processing
    } catch (error) {
      console.error('Booking failed:', error);
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Complete Your Booking</h1>
          <p className="text-gray-600">
            Fill in your details below to secure your adventure
          </p>
        </div>

        <BookingForm 
          onSubmit={handleBookingSubmit}
          price={1299} // This would typically come from your backend
        />
      </div>
    </div>
  );
}

export default Booking;