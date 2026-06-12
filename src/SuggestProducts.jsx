import React from 'react';
import { useCart } from './CartContext';

const SuggestProducts = () => {
  const { darkMode } = useCart();

  const suggestedItems = [
    { id: 101, title: "تيشيرت ضاغط للتمارين 👕", price: "450 ج.م", tag: "ملابس رياضية", img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&q=80" },
    { id: 102, title: "حذاء جري هيدرو-بوست 👟", price: "1,200 ج.م", tag: "أحذية رياضية", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" },
    { id: 103, title: "زجاجة مياه ذكية وعازلة 💧", price: "250 ج.م", tag: "إكسسوارات رياضية", img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80" }
  ];

  const containerBg = darkMode ? '#111111' : '#F9F9F9';
  const cardBg = darkMode ? '#161616' : '#FFFFFF';
  const textColor = darkMode ? '#FFFFFF' : '#111111';
  const subText = darkMode ? '#AAAAAA' : '#666666';
  const borderStyle = darkMode ? '1px solid #222' : '1px solid #EAEAEA';
  
  // ضبط لون الزر والعنوان الفرعي بالمضيء لكي يظهر بوضوح
  const titleColor = darkMode ? '#CCFF00' : '#111111';
  const btnBorderColor = darkMode ? '#CCFF00' : '#111111';
  const btnTextColor = darkMode ? '#CCFF00' : '#111111';

  return (
    <div style={{ ...styles.container, backgroundColor: containerBg, transition: '0.3s' }}>
      <div style={styles.header}>
        <h2 style={{ ...styles.title, color: titleColor }}>أكمل طقمك الرياضي 🔥</h2>
        <p style={{ ...styles.subtitle, color: subText }}>كباتن كتير اشتروا هذه المنتجات معاً للحصول على مظهر متكامل</p>
      </div>

      <div style={styles.grid}>
        {suggestedItems.map((item) => (
          <div key={item.id} style={{ ...styles.card, backgroundColor: cardBg, border: borderStyle }}>
            <div style={styles.imageWrapper}>
              <img src={item.img} alt={item.title} style={styles.image} />
              <span style={styles.tag}>{item.tag}</span>
            </div>
            <div style={styles.info}>
              <h4 style={{ ...styles.itemTitle, color: textColor }}>{item.title}</h4>
              <p style={styles.price}>{item.price}</p>
              <button 
                type="button"
                onClick={() => alert(`تم إضافة ${item.title} إلى سلة المشتريات! 🛒`)} 
                style={{ ...styles.addBtn, borderColor: btnBorderColor, color: btnTextColor }}
              >
                + إضافة سريعة للطقم
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '40px 20px', borderRadius: '16px', marginTop: '30px', direction: 'rtl' },
  header: { marginBottom: '25px', textAlign: 'right' },
  title: { fontSize: '22px', fontWeight: '900', margin: '0 0 5px 0' },
  subtitle: { fontSize: '14px', margin: 0 },
  grid: { display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'flex-start' },
  card: { width: '240px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' },
  imageWrapper: { position: 'relative', height: '160px', backgroundColor: '#eee' },
  image: { width: '100%', height: '100%', objectFit: 'cover' },
  tag: { position: 'absolute', top: '10px', right: '10px', backgroundColor: '#CCFF00', color: '#000', fontSize: '11px', fontWeight: 'bold', padding: '3px 8px', borderRadius: '20px' },
  info: { padding: '15px', textAlign: 'right' },
  itemTitle: { fontSize: '14px', fontWeight: 'bold', margin: '0 0 5px 0' },
  price: { color: '#FF3333', fontWeight: 'bold', fontSize: '15px', margin: '0 0 12px 0' },
  addBtn: { width: '100%', padding: '8px', backgroundColor: 'transparent', border: '2px solid', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px', outline: 'none' }
};

export default SuggestProducts;