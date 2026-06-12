import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // 🌙 حالة الوضع الداكن
  const [darkMode, setDarkMode] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const exist = prevItems.find((item) => item.id === product.id);
      if (exist) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // دالة تبديل الوضع الداكن
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cartItems.reduce((total, item) => {
    // تم إزالة الـ parseInt الزائدة هنا لأن الدالة بالأسفل تعيد رقماً بالفعل
    const priceNum = productPriceToNumber(item.price); 
    return total + priceNum * item.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart, cartCount, cartTotal, darkMode, toggleDarkMode }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

// دالة تحويل السعر المحدثة والمضمونة
function productPriceToNumber(priceStr) {
  if (!priceStr) return 0;
  
  // تحويل المدخل إلى نص للتأكد من عدم حدوث خطأ إذا كان قادماً كرقم
  let str = String(priceStr);

  const map = { '٠':0, '١':1, '٢':2, '٣':3, '٤':4, '٥':5, '٦':6, '٧':7, '٨':8, '٩':9 };
  
  // 1. أولاً: نقوم بتحويل الأرقام الشرقية (٠-٩) إلى أرقام إنجليزية
  let englishNumberStr = str.replace(/[٠-٩]/g, function(d) { return map[d]; });
  
  // 2. ثانياً: نحذف أي شيء ليس رقماً (مثل الحروف العربية والإنجليزية والرموز والمسافات)
  let cleanStr = englishNumberStr.replace(/[^\d]/g, '');
  
  return parseInt(cleanStr, 10) || 0;
}