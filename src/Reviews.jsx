import React from 'react';
import { useCart } from './CartContext';

const Reviews = () => {
  const { darkMode } = useCart();
  
  const testimonials = [
    { name: "كابتن أحمد علي", rate: "⭐⭐⭐⭐⭐", comment: "الواي بروتين أصلي والنتائج ممتازة، والتوصيل كان سريع جداً.", img: "👤" },
    { name: "سارة محمود", rate: "⭐⭐⭐⭐⭐", comment: "اشتريت طقم اليوجا والخامة رائعة ومرنة جداً في التمرين.", img: "👩" },
    { name: "محمد حسن", rate: "⭐⭐⭐⭐", comment: "المشاية الكهربائية جودتها عالية جداً وخدمة التركيب محترمة.", img: "👤" },
    { name: "إسلام يوسف", rate: "⭐⭐⭐⭐⭐", comment: "أفضل مكان تشتري منه مكملات وأنت مطمن إنها أصلية.", img: "🏋️" },
  ];

  return (
    <div style={{ padding: '60px 20px', direction: 'rtl', textAlign: 'center', background: darkMode ? '#0a0a0a' : '#fff' }}>
      <h1 style={{ color: darkMode ? '#CCFF00' : '#111', fontSize: '36px', fontWeight: '900' }}>آراء أبطال سبورت زون 🏅</h1>
      <div style={styles.grid}>
        {testimonials.map((t, i) => (
          <div key={i} style={{ ...styles.card, background: darkMode ? '#161616' : '#f9f9f9', border: darkMode ? '1px solid #222' : '1px solid #eee' }}>
            <div style={styles.avatar}>{t.img}</div>
            <h3 style={{ color: darkMode ? '#fff' : '#111' }}>{t.name}</h3>
            <div style={{ marginBottom: '10px' }}>{t.rate}</div>
            <p style={{ color: darkMode ? '#aaa' : '#666', lineHeight: '1.6' }}>"{t.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  grid: { display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '40px' },
  card: { width: '280px', padding: '30px', borderRadius: '20px', textAlign: 'center' },
  avatar: { fontSize: '40px', marginBottom: '15px' }
};

export default Reviews;