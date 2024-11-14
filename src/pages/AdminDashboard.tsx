import React, { useState } from 'react';
import { Plus, PenSquare, Trash2, Eye, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ListingItem {
  id: string;
  title: string;
  type: 'product' | 'gallery';
  status: 'active' | 'draft';
  price?: number;
  views: number;
  date: string;
}

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'products' | 'gallery'>('products');
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [showAddModal, setShowAddModal] = useState(false);
  const [listings] = useState<ListingItem[]>([
    {
      id: '1',
      title: 'Traditional Craft',
      type: 'product',
      status: 'active',
      price: 49.99,
      views: 24,
      date: '2024-03-15'
    },
    {
      id: '2',
      title: 'Cultural Festival',
      type: 'gallery',
      status: 'active',
      views: 156,
      date: '2024-03-14'
    }
  ]);

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  const handleAddNew = () => {
    setShowAddModal(true);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button 
            onClick={handleAddNew}
            className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <Plus className="h-5 w-5" />
            Add New Item
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="border-b">
            <nav className="flex">
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'products'
                    ? 'border-b-2 border-green-600 text-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('products')}
              >
                Products
              </button>
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'gallery'
                    ? 'border-b-2 border-green-600 text-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('gallery')}
              >
                Gallery
              </button>
            </nav>
          </div>

          <div className="p-6">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500">
                  <th className="pb-4">Title</th>
                  <th className="pb-4">Status</th>
                  {activeTab === 'products' && <th className="pb-4">Price</th>}
                  <th className="pb-4">Views</th>
                  <th className="pb-4">Date Added</th>
                  <th className="pb-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {listings
                  .filter((item) => 
                    activeTab === 'products' 
                      ? item.type === 'product' 
                      : item.type === 'gallery'
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
                      {activeTab === 'products' && (
                        <td className="py-4">${item.price?.toFixed(2)}</td>
                      )}
                      <td className="py-4">{item.views}</td>
                      <td className="py-4">{item.date}</td>
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

      {/* Add New Item Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Add New Item</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type
                </label>
                <select className="w-full p-2 border rounded-md">
                  <option value="product">Product</option>
                  <option value="gallery">Gallery Item</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input type="text" className="w-full p-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea className="w-full p-2 border rounded-md" rows={3} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Media
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">
                    Drop files here or click to upload
                  </p>
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                  Add Item
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;