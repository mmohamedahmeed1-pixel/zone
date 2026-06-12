import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Footer = () => {
  const { darkMode } = useCart();

  const footerBg = darkMode ? '#111111' : '#FFFFFF';
  const footerText = darkMode ? '#FFFFFF' : '#111111';
  const subTextColor = darkMode ? '#AAAAAA' : '#666666';

  return (
    <footer style={{ padding: '30px 40px', background: footerBg, color: footerText, borderTop: '2px solid #CCFF00', direction: 'rtl', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px' }}>
        
        <div style={{ flex: 1, minWidth: '200px' }}>
          <h3 style={{ color: '#CCFF00' }}>👟 سبورت زون</h3>
          <p style={{ fontSize: '14px', color: subTextColor, lineHeight: '1.6' }}>بيتك ومجتمعك الرياضي الأقوى لتأمين كافة مستلزمات التمرين والتدريب بكفاءة احترافية.</p>
        </div>

        <div style={{ flex: 1, minWidth: '150px' }}>
          <h4>روابط هامة</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
            <li><Link to="/calculator" style={{ color: subTextColor, textDecoration: 'none' }}>📊 حاسبة الماكروز والسعرات</Link></li>
            <li><Link to="/workouts" style={{ color: subTextColor, textDecoration: 'none' }}>🏋️ جداول التمارين المجانية</Link></li>
            <li><Link to="/rewards" style={{ color: subTextColor, textDecoration: 'none' }}>👑 نادي النقاط والمكافآت</Link></li>
          </ul>
        </div>

        <div style={{ flex: 1, minWidth: '150px' }}>
          <h4>الدعم والامان</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
            <li><Link to="/tracking" style={{ color: subTextColor, textDecoration: 'none' }}>📦 تتبع شحنتك</Link></li>
            <li><Link to="/reviews" style={{ color: subTextColor, textDecoration: 'none' }}>⭐ آراء الأبطال</Link></li>
            <li><Link to="/help" style={{ color: subTextColor, textDecoration: 'none' }}>مركز المساعدة</Link></li>
          </ul>
        </div>

      </div>
      <div style={{ textAlign: 'center', marginTop: '30px', paddingTop: '15px', borderTop: '1px solid #222', fontSize: '13px', color: subTextColor }}>
        <p>© {new Date().getFullYear()} سبورت زون. تطوير وبناء بأعلى طاقة رياضية للأبطال 💪</p>
      </div>
    </footer>
  );
};

export default Footer;