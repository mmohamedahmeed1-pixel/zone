import React, { useState } from 'react';
import { useCart } from './CartContext';

const Tracking = () => {
  const { darkMode } = useCart();
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    // محاكاة لعملية البحث
    if(orderId) setStatus('processing'); 
  };

  const pageBg = darkMode ? '#0a0a0a' : '#f8f9fa';
  const cardBg = darkMode ? '#111111' : '#ffffff';
  const textColor = darkMode ? '#ffffff' : '#111111';

  return (
    <div style={{ ...styles.container, backgroundColor: pageBg }}>
      <div style={{ ...styles.trackCard, backgroundColor: cardBg, border: darkMode ? '1px solid #222' : '1px solid #eee' }}>
        <h2 style={{ color: darkMode ? '#CCFF00' : '#111' }}>تتبع حالة طلبك 📦</h2>
        <p style={{ color: darkMode ? '#aaa' : '#666' }}>أدخل رقم الطلب المكون من 8 أرقام لمتابعة خط سير شحنتك</p>
        
        <form onSubmit={handleTrack} style={styles.form}>
          <input 
            type="text" 
            placeholder="مثال: #SZ-123456" 
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            style={{ ...styles.input, background: darkMode ? '#222' : '#f0f0f0', color: textColor }} 
          />
          <button type="submit" style={styles.btn}>تتبع الآن</button>
        </form>

        {status && (
          <div style={styles.timeline}>
            <div style={styles.step}>
              <div style={{ ...styles.dot, backgroundColor: '#CCFF00' }}></div>
              <p style={{ color: textColor }}>تم استلام الطلب</p>
            </div>
            <div style={styles.line}></div>
            <div style={styles.step}>
              <div style={{ ...styles.dot, backgroundColor: '#CCFF00' }}></div>
              <p style={{ color: textColor }}>جاري التجهيز</p>
            </div>
            <div style={styles.line}></div>
            <div style={styles.step}>
              <div style={{ ...styles.dot, backgroundColor: '#444' }}></div>
              <p style={{ color: '#888' }}>مع المندوب</p>
            </div>
            <div style={styles.line}></div>
            <div style={styles.step}>
              <div style={{ ...styles.dot, backgroundColor: '#444' }}></div>
              <p style={{ color: '#888' }}>تم التوصيل</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: { minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', direction: 'rtl' },
  trackCard: { width: '100%', maxWidth: '600px', padding: '40px', borderRadius: '20px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' },
  form: { display: 'flex', gap: '10px', marginTop: '30px', flexWrap: 'wrap' },
  input: { flex: 2, padding: '15px', borderRadius: '10px', border: 'none', outline: 'none', fontSize: '16px' },
  btn: { flex: 1, padding: '15px', background: '#CCFF00', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' },
  timeline: { marginTop: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' },
  step: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', zIndex: 2 },
  dot: { width: '20px', height: '20px', borderRadius: '50%', border: '4px solid #111' },
  line: { flexGrow: 1, height: '2px', background: '#333', marginBottom: '30px' }
};

export default Tracking;