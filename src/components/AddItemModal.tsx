import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';

interface AddItemModalProps {
  type: string;
  onClose: () => void;
  onAdd: (data: any) => Promise<void>;
}

export function AddItemModal({ type, onClose, onAdd }: AddItemModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
    status: 'active'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onAdd({
        ...formData,
        price: parseFloat(formData.price)
      });
    } catch (error) {
      console.error('Failed to add item:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Add New {type}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              required
              className="w-full p-2 border rounded-md"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              required
              rows={3}
              className="w-full p-2 border rounded-md"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {type === 'products' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <input
                type="number"
                name="price"
                required
                step="0.01"
                min="0"
                className="w-full p-2 border rounded-md"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              required
              className="w-full p-2 border rounded-md"
              value={formData.image}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              name="status"
              required
              className="w-full p-2 border rounded-md"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="active">Active</option>
              <option value="draft">Draft</option>
            </select>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center gap-2"
            >
              <Upload className="h-4 w-4" />
              Add {type}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}