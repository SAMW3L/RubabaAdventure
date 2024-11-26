// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Adventures from './pages/Adventures';
// import Accommodation from './pages/Accommodation';
// import Booking from './pages/Booking';
// import AdminDashboard from './pages/AdminDashboard';
// import Shop from './pages/Shop';
// import Gallery from './pages/Gallery';
// import ProductDetails from './pages/ProductDetails';
// import Cart from './pages/Cart';
// import AdminLogin from './pages/AdminLogin';
// import { AuthProvider } from './contexts/AuthContext';
// import { CartProvider } from './contexts/CartContext';

// function App() {
//   return (
//     <AuthProvider>
//       <CartProvider>
//         <BrowserRouter>
//           <div className="min-h-screen flex flex-col">
//             <Navbar />
//             <main className="flex-grow">
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/adventures" element={<Adventures />} />
//                 <Route path="/accommodation" element={<Accommodation />} />
//                 <Route path="/booking/:type/:id" element={<Booking />} />
//                 <Route path="/shop" element={<Shop />} />
//                 <Route path="/gallery" element={<Gallery />} />
//                 <Route path="/product/:id" element={<ProductDetails />} />
//                 <Route path="/cart" element={<Cart />} />
//                 <Route path="/admin/login" element={<AdminLogin />} />
//                 <Route path="/admin" element={<AdminDashboard />} />
//               </Routes>
//             </main>
//             <Footer />
//           </div>
//         </BrowserRouter>
//       </CartProvider>
//     </AuthProvider>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Adventures from './pages/Adventures';
import Accommodation from './pages/Accommodation';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import AdminDashboard from './pages/AdminDashboard';
import Shop from './pages/Shop';
import Gallery from './pages/Gallery';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import AdminLogin from './pages/AdminLogin';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { DataProvider } from './contexts/DataContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <CartProvider>
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/adventures" element={<Adventures />} />
                  <Route path="/accommodation" element={<Accommodation />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/booking/:type/:id" element={<Booking />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route 
                    path="/admin/*" 
                    element={
                      <ProtectedRoute>
                        <AdminDashboard />
                      </ProtectedRoute>
                    } 
                  />
                </Routes>
              </main>
              <Footer />
              <Toaster position="top-right" />
            </div>
          </BrowserRouter>
        </CartProvider>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;