import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  type: 'product';
  status: 'active' | 'draft';
  views: number;
  date: string;
}

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  type: 'gallery';
  status: 'active' | 'draft';
  views: number;
  date: string;
}

interface Order {
  id: string;
  customerName: string;
  email: string;
  items: Array<{
    id: string;
    title: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: 'pending' | 'completed';
  date: string;
}

interface Booking {
  id: string;
  customerName: string;
  email: string;
  type: 'adventure' | 'accommodation';
  itemId: string;
  itemTitle: string;
  date: string;
  guests: number;
  amount: number;
  status: 'pending' | 'confirmed';
}

interface DataContextType {
  products: Product[];
  galleryItems: GalleryItem[];
  orders: Order[];
  bookings: Booking[];
  addProduct: (product: Omit<Product, 'id' | 'views' | 'date'>) => Promise<void>;
  addGalleryItem: (item: Omit<GalleryItem, 'id' | 'views' | 'date'>) => Promise<void>;
  addOrder: (order: Omit<Order, 'id' | 'date' | 'status'>) => Promise<void>;
  addBooking: (booking: Omit<Booking, 'id' | 'date' | 'status'>) => Promise<void>;
  deleteItem: (id: string, type: 'product' | 'gallery') => Promise<void>;
  updateItem: (id: string, type: 'product' | 'gallery', data: Partial<Product | GalleryItem>) => Promise<void>;
  incrementViews: (id: string, type: 'product' | 'gallery') => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('products');
    return saved ? JSON.parse(saved) : [];
  });

  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem('galleryItems');
    return saved ? JSON.parse(saved) : [];
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('orders');
    return saved ? JSON.parse(saved) : [];
  });

  const [bookings, setBookings] = useState<Booking[]>(() => {
    const saved = localStorage.getItem('bookings');
    return saved ? JSON.parse(saved) : [];
  });

  // Persist data to localStorage
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('galleryItems', JSON.stringify(galleryItems));
  }, [galleryItems]);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }, [bookings]);

  const addProduct = async (product: Omit<Product, 'id' | 'views' | 'date'>) => {
    const newProduct: Product = {
      ...product,
      id: Date.now().toString(),
      views: 0,
      date: new Date().toISOString().split('T')[0]
    };
    setProducts(prev => [...prev, newProduct]);
    toast.success('Product added successfully');
  };

  const addGalleryItem = async (item: Omit<GalleryItem, 'id' | 'views' | 'date'>) => {
    const newItem: GalleryItem = {
      ...item,
      id: Date.now().toString(),
      views: 0,
      date: new Date().toISOString().split('T')[0]
    };
    setGalleryItems(prev => [...prev, newItem]);
    toast.success('Gallery item added successfully');
  };

  const addOrder = async (order: Omit<Order, 'id' | 'date' | 'status'>) => {
    const newOrder: Order = {
      ...order,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      status: 'pending'
    };
    setOrders(prev => [...prev, newOrder]);
    toast.success('Order placed successfully');
  };

  const addBooking = async (booking: Omit<Booking, 'id' | 'date' | 'status'>) => {
    const newBooking: Booking = {
      ...booking,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      status: 'pending'
    };
    setBookings(prev => [...prev, newBooking]);
    toast.success('Booking confirmed successfully');
  };

  const deleteItem = async (id: string, type: 'product' | 'gallery') => {
    if (type === 'product') {
      setProducts(prev => prev.filter(item => item.id !== id));
    } else {
      setGalleryItems(prev => prev.filter(item => item.id !== id));
    }
    toast.success('Item deleted successfully');
  };

  const updateItem = async (
    id: string,
    type: 'product' | 'gallery',
    data: Partial<Product | GalleryItem>
  ) => {
    if (type === 'product') {
      setProducts(prev =>
        prev.map(item =>
          item.id === id ? { ...item, ...data } : item
        )
      );
    } else {
      setGalleryItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, ...data } : item
        )
      );
    }
    toast.success('Item updated successfully');
  };

  const incrementViews = (id: string, type: 'product' | 'gallery') => {
    if (type === 'product') {
      setProducts(prev =>
        prev.map(item =>
          item.id === id ? { ...item, views: item.views + 1 } : item
        )
      );
    } else {
      setGalleryItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, views: item.views + 1 } : item
        )
      );
    }
  };

  return (
    <DataContext.Provider
      value={{
        products,
        galleryItems,
        orders,
        bookings,
        addProduct,
        addGalleryItem,
        addOrder,
        addBooking,
        deleteItem,
        updateItem,
        incrementViews
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}