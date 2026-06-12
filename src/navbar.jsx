import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Navbar = () => {
  const { cartCount, darkMode, toggleDarkMode } = useCart();
  // حالة التحكم في فتح القائمة للموبايل
  const [isOpen, setIsOpen] = useState(false);

  // تثبيت الهوية الرياضية الفخمة باللون الأسود دائماً بناءً على طلبك
  const navBg = '#111111'; 
  const textColor = '#ffffff'; 
  const borderColor = '2px solid #CCFF00'; 

  return (
    <nav style={{ ...styles.navbarContainer, backgroundColor: navBg }}>
      
      {/* الجهة اليمنى: الهامبرغر والشعار */}
      <div style={styles.rightSection}>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          style={{ ...styles.menuToggle, color: textColor }}
          aria-label="Toggle navigation"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <div style={styles.logoContainer}>
          <Link to="/" onClick={() => setIsOpen(false)} style={{ ...styles.logoLink, color: textColor }}>
            <span style={styles.logoEmoji}>👟</span>
            <span style={styles.logoText}>سبورت زون</span>
          </Link>
        </div>
      </div>

      {/* روابط التنقل المحدثة ديناميكياً */}
      <ul className={`nav-menu ${isOpen ? 'open' : ''}`} style={styles.navLinks}>
        <li><Link to="/" onClick={() => setIsOpen(false)} style={{ ...styles.link, color: textColor }}>الرئيسية</Link></li>
        <li><Link to="/proudects" onClick={() => setIsOpen(false)} style={{ ...styles.link, color: textColor }}>المتجر</Link></li>
        <li><Link to="/offers" onClick={() => setIsOpen(false)} style={{ ...styles.link, color: textColor }}>العروض</Link></li>
        <li><Link to="/service" onClick={() => setIsOpen(false)} style={{ ...styles.link, color: textColor }}>الخدمات</Link></li>
      </ul>

      {/* الجهة اليسرى: الأزرار والتفاعل */}
      <div style={styles.actionsContainer}>
        <button onClick={toggleDarkMode} style={{ ...styles.themeBtn, color: textColor }}>
  {darkMode ? '🌙 وضع داكن' : '☀️ وضع مضيء'}
        </button>

        <Link to="/login" style={{ ...styles.iconLink, color: textColor }}>
          <span style={styles.userIcon}>👤</span>
        </Link>

        <Link to="/check/cart" style={{ ...styles.cartButton, border: borderColor, color: textColor }}>
          <span style={styles.cartIcon}>🛒</span>
          <span style={styles.cartText}>السلة</span>
          <span style={styles.cartCount}>{cartCount}</span>
        </Link>
      </div>

      {/* حقن الـ CSS الإعلامي الحاسم لإلغاء التداخل وعزل القائمة الجانبية */}
      <style>{`
        /* الإعدادات الافتراضية للشاشات الكبيرة */
        .nav-menu {
          display: flex !important;
        }

        /* تعديلات الموبايل والشاشات الصغيرة حاسمة لمنع الطفو والتداخل */
        @media (max-width: 768px) {
          .nav-menu {
            display: none !important; /* إخفاء تماماً في الحالة العادية */
            position: absolute !important;
            top: 70px !important;
            right: 0 !important;
            width: 100% !important;
            background-color: #111111 !important;
            flex-direction: column !important;
            gap: 0 !important;
            padding: 10px 0 !important;
            box-shadow: 0 15px 25px rgba(0,0,0,0.4) !important;
            z-index: 9999 !important;
            border-bottom: 2px solid #CCFF00 !important;
          }
          
          /* إظهار القائمة فقط عندما تكون حالة isOpen صحيحة */
          .nav-menu.open {
            display: flex !important;
          }

          .nav-menu li {
            width: 100% !important;
            text-align: center !important;
          }

          .nav-menu li a {
            display: block !important;
            padding: 15px 0 !important;
            width: 100% !important;
            border-bottom: 1px solid #222 !important;
          }

          /* إخفاء نص "السلة" الداخلي للمحافظة على المساحة الكافية للأزرار */
          .cart-text-class {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

const styles = {
  navbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 4%',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    direction: 'rtl',
    fontFamily: 'sans-serif',
    height: '70px',
    boxSizing: 'border-box',
    borderBottom: '2px solid #CCFF00',
    // أهم سطر لمنع تداخل القوائم تحت المحتوى
    position: 'relative'
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  menuToggle: {
    background: 'none',
    border: 'none',
    fontSize: '28px',
    cursor: 'pointer',
    outline: 'none',
    padding: 0,
    display: 'none' // يتم التحكم بظهوره عبر الـ Media Queries بالأسفل
  },
  logoContainer: { display: 'flex', alignItems: 'center' },
  logoLink: { textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' },
  logoEmoji: { fontSize: '22px' },
  logoText: { fontWeight: '900', fontSize: '19px' },
  navLinks: {
    listStyle: 'none',
    gap: '20px',
    margin: 0,
    padding: 0,
    alignItems: 'center'
  },
  link: {
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: 'bold',
    padding: '8px 12px',
    transition: '0.2s'
  },
  actionsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  themeBtn: {
    background: 'none',
    border: 'none',
    fontSize: '13px',
    fontWeight: 'bold',
    cursor: 'pointer',
    outline: 'none'
  },
  iconLink: {
    textDecoration: 'none',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center'
  },
  userIcon: { cursor: 'pointer' },
  cartButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '20px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '13px'
  },
  cartIcon: { fontSize: '15px' },
  cartText: { display: 'inline' },
  cartCount: {
    backgroundColor: '#FF3333',
    color: '#ffffff',
    fontSize: '11px',
    borderRadius: '50%',
    padding: '2px 6px',
    fontWeight: 'bold'
  }
};

// تفعيل ظهور زر الهامبرغر في الكائنات البرمجية للشاشات الصغيرة تلقائياً
if (typeof window !== 'undefined' && window.innerWidth <= 768) {
  styles.menuToggle.display = 'block';
}

export default Navbar;