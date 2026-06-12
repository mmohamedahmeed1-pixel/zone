import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// استيراد الـ Provider الخاص بسلة المشتريات والوضع الداكن
import { CartProvider } from './CartContext';

// استيراد المكونات الثابتة (الناف بار والفوتر)
import Navbar from './navbar';
import Footer from './footer';

// استيراد الصفحات الأساسية
import Header from './header';
import Proudects from "./proudects";
import Check from "./check";
import Help from './help';
import Service from './service';
import Offers from './offers'; 
import Login from './login'; 
import Tracking from './Tracking'; 
import Reviews from './Reviews';   

// استيراد الصفحات والأفكار الجديدة
import FitnessCalculator from './FitnessCalculator'; // 1. حاسبة السعرات والماكروز
import WorkoutPlans from './WorkoutPlans';           // 2. الجداول الرياضية الجاهزة
import RewardPoints from './RewardPoints';           // 3. نظام النقاط والمكافآت

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/proudects" element={<Proudects />} />
          <Route path="/offers" element={<Offers />} /> 
          <Route path="/service" element={<Service />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/tracking" element={<Tracking />} /> 
          <Route path="/reviews" element={<Reviews />} />   
          
          {/* مسارات الأفكار الجديدة */}
          <Route path="/calculator" element={<FitnessCalculator />} />
          <Route path="/workouts" element={<WorkoutPlans />} />
          <Route path="/rewards" element={<RewardPoints />} />

          <Route path="/check/:gameSlug" element={<Check />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;