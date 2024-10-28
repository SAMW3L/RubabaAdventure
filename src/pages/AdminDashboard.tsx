import React, { useState } from 'react';
import { Plus, PenSquare, Trash2, Eye } from 'lucide-react';

interface ListingItem {
  id: string;
  title: string;
  type: 'adventure' | 'accommodation';
  status: 'active' | 'draft';
  price: number;
  bookings: number;
}

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'adventures' | 'accommodations'>('adventures');
  const [listings] = useState<ListingItem[]>([
    {
      id: '1',
      title: 'Serengeti Safari',
      type: 'adventure',
      status: 'active',
      price: 1299,
      bookings: 24
    },
    {
      id: '2',
      title: 'Luxury Lodge',
      type: 'accommodation',
      status: 'active',
      price: 299,
      bookings: 156
    }
  ]);

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Add New Listing
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="border-b">
            <nav className="flex">
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'adventures'
                    ? 'border-b-2 border-green-600 text-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('adventures')}
              >
                Adventures
              </button>
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'accommodations'
                    ? 'border-b-2 border-green-600 text-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('accommodations')}
              >
                Accommodations
              </button>
            </nav>
          </div>

          <div className="p-6">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500">
                  <th className="pb-4">Title</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Price</th>
                  <th className="pb-4">Bookings</th>
                  <th className="pb-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {listings
                  .filter((item) => 
                    activeTab === 'adventures' 
                      ? item.type === 'adventure' 
                      : item.type === 'accommodation'
                  )
                  .map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="py-4">{item.title}</td>
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          item.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-4">${item.price}</td>
                      <td className="py-4">{item.bookings}</td>
                      <td className="py-4">
                        <div className="flex space-x-2">
                          <button className="p-1 hover:text-green-600">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-1 hover:text-blue-600">
                            <PenSquare className="h-4 w-4" />
                          </button>
                          <button className="p-1 hover:text-red-600">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;