import React, { useState } from 'react';
import { 
  Plus, 
  PenSquare, 
  Trash2, 
  Eye, 
  Upload, 
  DollarSign, 
  Calendar, 
  Users,
  Package,
  Image
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useData } from '../contexts/DataContext';
import { ProductsTable } from '../components/ProductsTable';
import { GalleryTable } from '../components/GalleryTable';
import { AddItemModal } from '../components/AddItemModal';
import toast from 'react-hot-toast';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'bookings' | 'products' | 'gallery' | 'adventures' | 'accommodations'>('bookings');
  const { isAuthenticated, logout } = useAuth();
  const { 
    products, 
    galleryItems, 
    bookings, 
    orders,
    addProduct,
    addGalleryItem,
    deleteItem 
  } = useData();
  const navigate = useNavigate();
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddNew = () => {
    setShowAddModal(true);
  };

  const handleDelete = async (id: string, type: string) => {
    try {
      await deleteItem(id, type);
      toast.success('Item deleted successfully');
    } catch (error) {
      toast.error('Failed to delete item');
    }
  };

  const renderBookings = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{booking.customerName}</div>
                <div className="text-sm text-gray-500">{booking.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {booking.type}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {booking.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${booking.amount}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  booking.status === 'confirmed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {booking.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900 mr-2">
                  View
                </button>
                <button className="text-red-600 hover:text-red-900">
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderOrders = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Order ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Items
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                #{order.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{order.customerName}</div>
                <div className="text-sm text-gray-500">{order.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {order.items.length} items
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${order.total}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  order.status === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {order.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex gap-4">
            <button 
              onClick={handleAddNew}
              className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <Plus className="h-5 w-5" />
              Add New Item
            </button>
            <button
              onClick={() => {
                logout();
                navigate('/admin/login');
              }}
              className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="border-b">
            <nav className="flex">
              <TabButton
                active={activeTab === 'bookings'}
                onClick={() => setActiveTab('bookings')}
                icon={<Calendar className="h-4 w-4" />}
                label="Bookings"
              />
              <TabButton
                active={activeTab === 'products'}
                onClick={() => setActiveTab('products')}
                icon={<Package className="h-4 w-4" />}
                label="Products"
              />
              <TabButton
                active={activeTab === 'gallery'}
                onClick={() => setActiveTab('gallery')}
                icon={<Image className="h-4 w-4" />}
                label="Gallery"
              />
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'bookings' && renderBookings()}
            {activeTab === 'products' && (
              <ProductsTable
                products={products}
                onDelete={(id) => handleDelete(id, 'product')}
              />
            )}
            {activeTab === 'gallery' && (
              <GalleryTable
                items={galleryItems}
                onDelete={(id) => handleDelete(id, 'gallery')}
              />
            )}
          </div>
        </div>
      </div>

      {showAddModal && (
        <AddItemModal
          type={activeTab}
          onClose={() => setShowAddModal(false)}
          onAdd={async (data) => {
            try {
              if (activeTab === 'products') {
                await addProduct(data);
              } else if (activeTab === 'gallery') {
                await addGalleryItem(data);
              }
              setShowAddModal(false);
              toast.success('Item added successfully');
            } catch (error) {
              toast.error('Failed to add item');
            }
          }}
        />
      )}
    </div>
  );
}

function TabButton({ active, onClick, icon, label }: { 
  active: boolean; 
  onClick: () => void; 
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      className={`flex items-center gap-2 px-6 py-4 text-sm font-medium ${
        active
          ? 'border-b-2 border-green-600 text-green-600'
          : 'text-gray-500 hover:text-gray-700'
      }`}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
}

export default AdminDashboard;